/**
 * BLACK FM - Core Logic & Audio Controller
 */

document.addEventListener("DOMContentLoaded", () => {
    // -------------------------------------------------------------
    // 1. STATE & VARIABLES
    // -------------------------------------------------------------
    let songs = [...DEFAULT_PLAYLIST.songs];
    let jingles = [...DEFAULT_PLAYLIST.jingles];
    
    // User added URL streams (load from localStorage if exists)
    let customTracks = JSON.parse(localStorage.getItem("blackfm_custom_tracks")) || [];
    songs = [...songs, ...customTracks];

    let currentTrack = null;
    let isPlaying = false;
    let isMuted = false;
    let volume = 0.8; // Default volume (80%)
    
    // Playback Queue variables
    let history = [];
    let isShuffle = false;
    let isLiveMode = false;
    let jingleFrequency = 2; // Every 2 songs, play a jingle
    let songsPlayedCount = 0; // Songs played since last jingle
    let crossfadeDuration = 2; // Fade out/in duration in seconds
    
    // Audio Context & Web Audio API
    let audioCtx = null;
    let audioSource = null;
    let analyser = null;
    let gainNode = null;
    let visualizerAnimationId = null;
    let isAnalyserSilent = true;
    let isUsingSimulatedVisualizer = false;

    // DJ Mode Variables
    let isDJ = false;
    const DJ_PASSWORD_HASH = "dcc9f80a36945ab2216774aa09b39db42c53ad4e72037b9a62efe74c9b2915da"; // SHA-256 of blackfm123

    // DOM Elements
    const audio = document.getElementById("audio-player");
    const playBtn = document.getElementById("play-btn");
    const playIcon = document.getElementById("play-icon");
    const overlayPlayIcon = document.getElementById("overlay-play-icon");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const muteBtn = document.getElementById("mute-btn");
    const volumeIcon = document.getElementById("volume-icon");
    const volumeSliderWrapper = document.getElementById("volume-slider-wrapper");
    const volumeBar = document.getElementById("volume-bar");
    const shuffleBtn = document.getElementById("shuffle-btn");
    const liveModeBtn = document.getElementById("live-mode-btn");
    const vinylDisk = document.getElementById("vinyl-disk");
    
    const trackTypeBadge = document.getElementById("track-type-badge");
    const nowPlayingTitle = document.getElementById("now-playing-title");
    const nowPlayingArtist = document.getElementById("now-playing-artist");
    const currentTimeText = document.getElementById("current-time");
    const totalTimeText = document.getElementById("total-time");
    const progressBarWrapper = document.getElementById("progress-bar-wrapper");
    const progressBar = document.getElementById("progress-bar");
    const progressHandle = document.getElementById("progress-handle");
    const streamStatus = document.getElementById("stream-status");
    
    // Tabs & Lists
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");
    const songsList = document.getElementById("songs-list-container");
    const jinglesList = document.getElementById("jingles-list-container");
    const songsCountBadge = document.getElementById("songs-count");
    const jinglesCountBadge = document.getElementById("jingles-count");
    
    // Drag & Drop
    const songUploadZone = document.getElementById("song-upload-zone");
    const songFileInput = document.getElementById("song-file-input");
    const jingleUploadZone = document.getElementById("jingle-upload-zone");
    const jingleFileInput = document.getElementById("jingle-file-input");
    
    // Settings
    const jingleFreqSelect = document.getElementById("jingle-frequency");
    const crossfadeSlider = document.getElementById("crossfade-duration");
    const crossfadeValue = document.getElementById("crossfade-value");
    const customStreamUrl = document.getElementById("custom-stream-url");
    const addUrlBtn = document.getElementById("add-url-btn");
    const resetPlaylistBtn = document.getElementById("reset-playlist-btn");
    const testJingleBtn = document.getElementById("test-jingle-btn");
    

    // DJ Elements
    const djLoginToggleBtn = document.getElementById("dj-login-toggle-btn");
    const djLoginModal = document.getElementById("dj-login-modal");
    const modalCloseBtn = document.getElementById("modal-close-btn");
    const cancelLoginBtn = document.getElementById("cancel-login-btn");
    const submitLoginBtn = document.getElementById("submit-login-btn");
    const djPasswordInput = document.getElementById("dj-password-input");
    const loginErrorMsg = document.getElementById("login-error-msg");
    
    // Canvas
    const canvas = document.getElementById("visualizer");
    const canvasCtx = canvas ? canvas.getContext("2d") : null;

    // Initialize Lucide Icons
    lucide.createIcons();

    // -------------------------------------------------------------
    // 2. PLAYBACK & QUEUE MANAGEMENT
    // -------------------------------------------------------------
    
    // Create playing queue item
    function setTrack(track, type = "music") {
        currentTrack = { track, type };
        
        // Update UI
        nowPlayingTitle.textContent = track.title;
        nowPlayingArtist.textContent = track.artist || (type === "jingle" ? "BLACK FM JINGLE" : "Bilinmeyen Sanatçı");
        
        if (type === "jingle") {
            trackTypeBadge.textContent = "JINGLE";
            trackTypeBadge.className = "badge badge-jingle";
            streamStatus.textContent = "JINGLE YAYINDA";
        } else {
            trackTypeBadge.textContent = "MÜZİK";
            trackTypeBadge.className = "badge badge-music";
            streamStatus.textContent = "CANLI YAYIN";
        }
        
        // Reset progress bar
        progressBar.style.width = "0%";
        progressHandle.style.left = "0%";
        currentTimeText.textContent = "00:00";
        totalTimeText.textContent = track.duration || "00:00";

        // Setup audio source
        audio.src = track.src;
        audio.load();

        // Update active highlight in lists
        updateActiveHighlight();
    }

    // Smooth transition between tracks
    function transitionToTrack(track, type = "music") {
        if (!isPlaying) {
            setTrack(track, type);
            playAudio();
            return;
        }

        // Fade out
        fadeVolume(0, crossfadeDuration * 1000 / 2, () => {
            setTrack(track, type);
            
            // Wait for metadata/load before fading back in
            audio.oncanplay = function() {
                playAudio();
                fadeVolume(volume, crossfadeDuration * 1000 / 2);
                audio.oncanplay = null; // Remove event listener
            };
        });
    }

    // Audio fade helper
    let fadeInterval = null;
    function fadeVolume(targetVolume, durationMs, callback) {
        if (fadeInterval) clearInterval(fadeInterval);
        
        const startVolume = audio.volume;
        const diff = targetVolume - startVolume;
        const stepTime = 50; // ms
        const steps = durationMs / stepTime;
        let currentStep = 0;

        if (steps <= 0) {
            audio.volume = targetVolume;
            if (callback) callback();
            return;
        }

        fadeInterval = setInterval(() => {
            currentStep++;
            audio.volume = Math.max(0, Math.min(1, startVolume + (diff * (currentStep / steps))));
            
            if (currentStep >= steps) {
                clearInterval(fadeInterval);
                audio.volume = targetVolume;
                if (callback) callback();
            }
        }, stepTime);
    }

    // Play next element in radio queue
    function playNext() {
        if (songs.length === 0) return;

        // Check if we should inject a jingle
        if (jingleFrequency > 0 && jingles.length > 0) {
            if (songsPlayedCount >= jingleFrequency) {
                // Play random jingle!
                songsPlayedCount = 0;
                const randomJingle = jingles[Math.floor(Math.random() * jingles.length)];
                transitionToTrack(randomJingle, "jingle");
                return;
            }
        }

        // Play next song
        let nextIndex = 0;
        
        if (currentTrack && currentTrack.type === "music") {
            const currentIndex = songs.findIndex(s => s.src === currentTrack.track.src);
            
            if (isShuffle) {
                nextIndex = Math.floor(Math.random() * songs.length);
                // Try not to repeat same song immediately if possible
                if (nextIndex === currentIndex && songs.length > 1) {
                    nextIndex = (nextIndex + 1) % songs.length;
                }
            } else {
                nextIndex = (currentIndex + 1) % songs.length;
            }
            songsPlayedCount++;
        } else {
            // If we just finished a jingle, resume with a song
            if (currentTrack && currentTrack.type === "jingle") {
                // Keep the current song index or go to next
                // Let's go to next song
                if (history.length > 0) {
                    const lastSongSrc = history[history.length - 1];
                    const lastIndex = songs.findIndex(s => s.src === lastSongSrc);
                    nextIndex = (lastIndex + 1) % songs.length;
                } else {
                    nextIndex = 0;
                }
            } else {
                nextIndex = 0;
            }
            songsPlayedCount++;
        }

        // Record song to history
        if (currentTrack && currentTrack.type === "music") {
            history.push(currentTrack.track.src);
            if (history.length > 20) history.shift();
        }

        transitionToTrack(songs[nextIndex], "music");
    }

    // Play previous song
    function playPrev() {
        if (songs.length === 0) return;

        let prevIndex = 0;
        if (currentTrack && currentTrack.type === "music") {
            const currentIndex = songs.findIndex(s => s.src === currentTrack.track.src);
            prevIndex = currentIndex - 1;
            if (prevIndex < 0) prevIndex = songs.length - 1;
        }

        songsPlayedCount = 0; // Reset jingle counter on manual previous click
        transitionToTrack(songs[prevIndex], "music");
    }

    // -------------------------------------------------------------
    // 3. AUDIO PLAY / PAUSE / VOLUME
    // -------------------------------------------------------------
    function initAudioContext() {
        if (audioCtx) return;

        try {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            analyser = audioCtx.createAnalyser();
            analyser.fftSize = 256;
            
            // Connect HTML5 audio element to context
            audioSource = audioCtx.createMediaElementSource(audio);
            
            gainNode = audioCtx.createGain();
            
            audioSource.connect(analyser);
            analyser.connect(gainNode);
            gainNode.connect(audioCtx.destination);
            
            console.log("Web Audio API initialized successfully.");
        } catch (e) {
            console.warn("Web Audio API could not initialize (CORS/Browser security):", e);
            isUsingSimulatedVisualizer = true;
        }
    }

    function playAudio() {
        initAudioContext();
        if (audioCtx && audioCtx.state === "suspended") {
            audioCtx.resume();
        }

        audio.play()
            .then(() => {
                isPlaying = true;
                playIcon.setAttribute("data-lucide", "pause");
                overlayPlayIcon.setAttribute("data-lucide", "pause");
                lucide.createIcons();
                vinylDisk.classList.add("playing");
                
                if (currentTrack && currentTrack.type === "jingle") {
                    streamStatus.textContent = "JINGLE YAYINDA";
                } else {
                    streamStatus.textContent = "CANLI YAYIN";
                }

                // Start Visualizer Loop
                isAnalyserSilent = true; // reset check
                startVisualizer();
            })
            .catch(err => {
                console.error("Playback failed:", err);
                isPlaying = false;
                streamStatus.textContent = "HATA - OYNATILAMADI";
            });
    }

    function pauseAudio() {
        audio.pause();
        isPlaying = false;
        playIcon.setAttribute("data-lucide", "play");
        overlayPlayIcon.setAttribute("data-lucide", "play");
        lucide.createIcons();
        vinylDisk.classList.remove("playing");
        streamStatus.textContent = "DURAKLATILDI";
        
        if (visualizerAnimationId) {
            cancelAnimationFrame(visualizerAnimationId);
        }
    }

    function togglePlay() {
        if (isPlaying) {
            pauseAudio();
        } else {
            if (!currentTrack && songs.length > 0) {
                setTrack(songs[0], "music");
            }
            playAudio();
        }
    }

    function setVolume(val) {
        volume = Math.max(0, Math.min(1, val));
        
        if (!isMuted) {
            audio.volume = volume;
        }
        
        // Update UI Slider
        volumeBar.style.width = `${volume * 100}%`;

        // Update Icon
        if (volume === 0 || isMuted) {
            volumeIcon.setAttribute("data-lucide", "volume-x");
        } else if (volume < 0.4) {
            volumeIcon.setAttribute("data-lucide", "volume-1");
        } else {
            volumeIcon.setAttribute("data-lucide", "volume-2");
        }
        lucide.createIcons();
    }

    function toggleMute() {
        isMuted = !isMuted;
        if (isMuted) {
            audio.volume = 0;
            volumeIcon.setAttribute("data-lucide", "volume-x");
            muteBtn.classList.add("active");
        } else {
            audio.volume = volume;
            setVolume(volume);
            muteBtn.classList.remove("active");
        }
        lucide.createIcons();
    }

    // -------------------------------------------------------------
    // 4. SYNCHRONIZED SIMULATED LIVE STREAM
    // -------------------------------------------------------------
    function toggleLiveMode() {
        isLiveMode = !isLiveMode;
        
        if (isLiveMode) {
            liveModeBtn.classList.add("active");
            syncToLiveStream();
        } else {
            liveModeBtn.classList.remove("active");
            // Standard state resume
            streamStatus.textContent = isPlaying ? "CANLI YAYIN" : "YAYIN HAZIR";
        }
    }

    function syncToLiveStream() {
        if (!isLiveMode || songs.length === 0) return;

        // Define duration for songs that don't have metadata (fallback to 4 minutes = 240s)
        const getDuration = (s) => {
            if (s.duration) {
                const parts = s.duration.split(":");
                if (parts.length === 2) return parseInt(parts[0]) * 60 + parseInt(parts[1]);
            }
            return 240; 
        };

        // Total playlist duration
        const totalDuration = songs.reduce((acc, s) => acc + getDuration(s), 0);
        
        // Get absolute timestamp offset (e.g. seconds elapsed today)
        const now = new Date();
        const secondsSinceMidnight = (now.getHours() * 3600) + (now.getMinutes() * 60) + now.getSeconds();
        const currentPlaylistPosition = secondsSinceMidnight % totalDuration;

        // Find which song matches this offset
        let accumulatedTime = 0;
        let selectedSong = songs[0];
        let songOffset = 0;

        for (let i = 0; i < songs.length; i++) {
            const songDur = getDuration(songs[i]);
            if (currentPlaylistPosition >= accumulatedTime && currentPlaylistPosition < accumulatedTime + songDur) {
                selectedSong = songs[i];
                songOffset = currentPlaylistPosition - accumulatedTime;
                break;
            }
            accumulatedTime += songDur;
        }

        // Load and play at calculated offset
        setTrack(selectedSong, "music");
        
        audio.oncanplay = function() {
            audio.currentTime = songOffset;
            playAudio();
            audio.oncanplay = null; // Clean up
        };
        
        streamStatus.textContent = "SENKRONİZE LİVE";
    }

    // -------------------------------------------------------------
    // 5. AUDIO VISUALIZER (RADIAL GLOW WAVE)
    // -------------------------------------------------------------
    function resizeCanvas() {
        // Visualizer disabled to prevent lag
    }
    
    function startVisualizer() {
        // Visualizer disabled to prevent lag
    }

    // -------------------------------------------------------------
    // 6. EVENT LISTENERS & CONTROLS
    // -------------------------------------------------------------
    
    // Play/Pause Click
    playBtn.addEventListener("click", togglePlay);
    vinylDisk.addEventListener("click", togglePlay);
    
    // Skip Controls
    nextBtn.addEventListener("click", playNext);
    prevBtn.addEventListener("click", playPrev);
    
    // Volume controls
    muteBtn.addEventListener("click", toggleMute);
    
    volumeSliderWrapper.addEventListener("mousedown", (e) => {
        handleVolumeDrag(e);
        document.addEventListener("mousemove", handleVolumeDrag);
        document.addEventListener("mouseup", () => {
            document.removeEventListener("mousemove", handleVolumeDrag);
        }, { once: true });
    });

    function handleVolumeDrag(e) {
        const rect = volumeSliderWrapper.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        let percentage = offsetX / rect.width;
        percentage = Math.max(0, Math.min(1, percentage));
        
        if (isMuted) toggleMute();
        setVolume(percentage);
    }

    // Shuffle & Live Mode
    shuffleBtn.addEventListener("click", () => {
        isShuffle = !isShuffle;
        shuffleBtn.classList.toggle("active", isShuffle);
    });

    liveModeBtn.addEventListener("click", toggleLiveMode);

    // Audio Element Callbacks
    audio.addEventListener("timeupdate", () => {
        if (!audio.duration) return;
        
        // Progress percentage
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = `${progress}%`;
        progressHandle.style.left = `${progress}%`;
        
        // Timer values
        currentTimeText.textContent = formatTime(audio.currentTime);
        totalTimeText.textContent = formatTime(audio.duration);

        // Auto transition trigger for crossfade
        if (isPlaying && (audio.duration - audio.currentTime <= crossfadeDuration) && crossfadeDuration > 0) {
            // Unbind timeupdate temporarily to prevent double skip
            audio.ontimeupdate = null;
            playNext();
        }
    });

    // Re-bind timeupdate on loadedmetadata/source change
    audio.addEventListener("play", () => {
        // Re-enable timeupdate if cleared
        audio.ontimeupdate = true;
    });

    audio.addEventListener("ended", () => {
        playNext();
    });

    audio.addEventListener("waiting", () => {
        if (isPlaying) {
            document.querySelector(".status-indicator").classList.add("buffering");
            streamStatus.textContent = "BAĞLANIYOR...";
        }
    });

    audio.addEventListener("playing", () => {
        document.querySelector(".status-indicator").classList.remove("buffering");
        if (currentTrack && currentTrack.type === "jingle") {
            streamStatus.textContent = "JINGLE YAYINDA";
        } else {
            streamStatus.textContent = "CANLI YAYIN";
        }
    });

    // Seeker Dragging
    progressBarWrapper.addEventListener("mousedown", (e) => {
        if (!currentTrack || isLiveMode) return; // Disable seek in Live simulation
        
        handleSeek(e);
        document.addEventListener("mousemove", handleSeek);
        document.addEventListener("mouseup", () => {
            document.removeEventListener("mousemove", handleSeek);
        }, { once: true });
    });

    function handleSeek(e) {
        if (!audio.duration) return;
        const rect = progressBarWrapper.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        let percentage = offsetX / rect.width;
        percentage = Math.max(0, Math.min(1, percentage));
        
        audio.currentTime = percentage * audio.duration;
    }

    // Tab Navigation
    tabButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            tabButtons.forEach(b => b.classList.remove("active"));
            tabContents.forEach(c => c.classList.remove("active"));
            
            btn.classList.add("active");
            document.getElementById(btn.getAttribute("data-tab")).classList.add("active");
        });
    });

    // -------------------------------------------------------------
    // 7. PLAYLIST RENDERING & DYNAMIC LISTS
    // -------------------------------------------------------------
    function formatTime(seconds) {
        if (isNaN(seconds) || seconds === Infinity) return "00:00";
        const m = Math.floor(seconds / 60).toString().padStart(2, "0");
        const s = Math.floor(seconds % 60).toString().padStart(2, "0");
        return `${m}:${s}`;
    }

    function renderSongsList() {
        if (!songsList) return;
        songsList.innerHTML = "";
        if (songsCountBadge) songsCountBadge.textContent = `${songs.length} Şarkı`;
        
        if (songs.length === 0) {
            songsList.innerHTML = `<div class="empty-list-msg">Çalma listesi boş. Şarkı ekleyin!</div>`;
            return;
        }

        songs.forEach((song, index) => {
            const card = document.createElement("div");
            card.className = "track-card";
            card.setAttribute("data-src", song.src);
            
            card.innerHTML = `
                <div class="card-play-icon">
                    <i data-lucide="play"></i>
                </div>
                <div class="card-meta">
                    <h4>${song.title}</h4>
                    <p>${song.artist || "Bilinmeyen Sanatçı"}</p>
                </div>
                <span class="card-duration">${song.duration || "--:--"}</span>
                <button class="delete-track-btn" title="Sil" data-index="${index}">
                    <i data-lucide="trash-2"></i>
                </button>
            `;
            
            // Play song on click
            card.addEventListener("click", (e) => {
                if (e.target.closest(".delete-track-btn")) return; // ignore delete click
                songsPlayedCount = 0; // Reset jingle count when manually selecting song
                transitionToTrack(song, "music");
            });

            // Delete song on click
            const delBtn = card.querySelector(".delete-track-btn");
            delBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                deleteSong(index);
            });

            songsList.appendChild(card);
        });

        updateActiveHighlight();
        lucide.createIcons();
    }

    function renderJinglesList() {
        if (!jinglesList) return;
        jinglesList.innerHTML = "";
        if (jinglesCountBadge) jinglesCountBadge.textContent = `${jingles.length} Jingle`;

        if (jingles.length === 0) {
            jinglesList.innerHTML = `<div class="empty-list-msg">Jingle listesi boş. Jingle ekleyin!</div>`;
            return;
        }

        jingles.forEach((jingle, index) => {
            const card = document.createElement("div");
            card.className = "track-card jingle-card";
            card.setAttribute("data-src", jingle.src);

            card.innerHTML = `
                <div class="card-play-icon">
                    <i data-lucide="play"></i>
                </div>
                <div class="card-meta">
                    <h4>${jingle.title}</h4>
                    <p>BLACK FM JINGLE</p>
                </div>
                <button class="delete-track-btn" title="Sil" data-index="${index}">
                    <i data-lucide="trash-2"></i>
                </button>
            `;

            // Play jingle on click
            card.addEventListener("click", (e) => {
                if (e.target.closest(".delete-track-btn")) return;
                transitionToTrack(jingle, "jingle");
            });

            // Delete jingle on click
            const delBtn = card.querySelector(".delete-track-btn");
            delBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                deleteJingle(index);
            });

            jinglesList.appendChild(card);
        });

        updateActiveHighlight();
        lucide.createIcons();
    }

    function updateActiveHighlight() {
        const cards = document.querySelectorAll(".track-card");
        cards.forEach(card => {
            const src = card.getAttribute("data-src");
            if (currentTrack && currentTrack.track.src === src) {
                card.classList.add("active");
                const icon = card.querySelector(".card-play-icon i");
                if (icon) {
                    icon.setAttribute("data-lucide", isPlaying ? "pause" : "play");
                }
            } else {
                card.classList.remove("active");
                const icon = card.querySelector(".card-play-icon i");
                if (icon) {
                    icon.setAttribute("data-lucide", "play");
                }
            }
        });
        lucide.createIcons();
    }

    // -------------------------------------------------------------
    // 8. FILE UPLOADS & LOCALSTORAGE MANAGEMENT
    // -------------------------------------------------------------
    
    // Helper to extract file metadata and return ObjectURL
    function processAudioFiles(files, listCallback) {
        Array.from(files).forEach(file => {
            const fileUrl = URL.createObjectURL(file);
            
            // Create dummy audio element to read duration
            const tempAudio = new Audio();
            tempAudio.src = fileUrl;
            tempAudio.addEventListener("loadedmetadata", () => {
                const durationFormatted = formatTime(tempAudio.duration);
                
                // Standardize title and artist from filename
                const nameWithoutExt = file.name.replace(/\.[^/.]+$/, "");
                const parts = nameWithoutExt.split(" - ");
                const title = parts[1] || parts[0];
                const artist = parts[1] ? parts[0] : "Kişisel Kitaplık";

                const newTrack = {
                    title: title,
                    artist: artist,
                    src: fileUrl,
                    duration: durationFormatted,
                    isLocal: true // flag that this is blob URL
                };

                listCallback(newTrack);
            });
        });
    }

    // Songs file selection
    if (songUploadZone && songFileInput) {
        songUploadZone.addEventListener("click", () => songFileInput.click());
        songFileInput.addEventListener("change", (e) => {
            processAudioFiles(e.target.files, (newSong) => {
                songs.push(newSong);
                renderSongsList();
            });
        });
    }

    // Jingles file selection
    if (jingleUploadZone && jingleFileInput) {
        jingleUploadZone.addEventListener("click", () => jingleFileInput.click());
        jingleFileInput.addEventListener("change", (e) => {
            processAudioFiles(e.target.files, (newJingle) => {
                jingles.push(newJingle);
                renderJinglesList();
            });
        });
    }

    // Drag and Drop implementation
    function setupDragAndDrop(zone, fileInput, listCallback) {
        if (!zone || !fileInput) return;
        zone.addEventListener("dragover", (e) => {
            e.preventDefault();
            zone.classList.add("dragover");
        });

        zone.addEventListener("dragleave", () => {
            zone.classList.remove("dragover");
        });

        zone.addEventListener("drop", (e) => {
            e.preventDefault();
            zone.classList.remove("dragover");
            
            if (e.dataTransfer.files.length > 0) {
                processAudioFiles(e.dataTransfer.files, listCallback);
            }
        });
    }

    if (songUploadZone && songFileInput) {
        setupDragAndDrop(songUploadZone, songFileInput, (newSong) => {
            songs.push(newSong);
            renderSongsList();
        });
    }

    if (jingleUploadZone && jingleFileInput) {
        setupDragAndDrop(jingleUploadZone, jingleFileInput, (newJingle) => {
            jingles.push(newJingle);
            renderJinglesList();
        });
    }

    // Deleting tracks
    function deleteSong(index) {
        const deleted = songs[index];
        songs.splice(index, 1);
        
        // If playing song is deleted, skip to next
        if (currentTrack && currentTrack.type === "music" && currentTrack.track.src === deleted.src) {
            playNext();
        }

        // If it was custom persistent track, update localStorage
        if (!deleted.isLocal) {
            customTracks = customTracks.filter(t => t.src !== deleted.src);
            localStorage.setItem("blackfm_custom_tracks", JSON.stringify(customTracks));
        }

        renderSongsList();
    }

    function deleteJingle(index) {
        const deleted = jingles[index];
        jingles.splice(index, 1);

        if (currentTrack && currentTrack.type === "jingle" && currentTrack.track.src === deleted.src) {
            playNext();
        }

        renderJinglesList();
    }

    // -------------------------------------------------------------
    // 9. SETTINGS PANEL ACTIONS
    // -------------------------------------------------------------
    
    // Jingle frequency setting change
    if (jingleFreqSelect) {
        jingleFreqSelect.addEventListener("change", (e) => {
            jingleFrequency = parseInt(e.target.value);
            songsPlayedCount = 0; // reset counter
        });
    }

    // Crossfade setting change
    if (crossfadeSlider) {
        crossfadeSlider.addEventListener("input", (e) => {
            crossfadeDuration = parseFloat(e.target.value);
            if (crossfadeValue) crossfadeValue.textContent = `${crossfadeDuration}s`;
        });
    }

    // Adding custom stream URL
    if (addUrlBtn && customStreamUrl) {
        addUrlBtn.addEventListener("click", () => {
            const url = customStreamUrl.value.trim();
            if (!url) return;

            // Try to guess a name
            let title = "Özel Yayın";
            try {
                const urlObj = new URL(url);
                const pathParts = urlObj.pathname.split("/");
                const lastPart = pathParts[pathParts.length - 1];
                if (lastPart) title = decodeURIComponent(lastPart.replace(/\.[^/.]+$/, ""));
            } catch(e) {}

            const newTrack = {
                title: title,
                artist: "Canlı Yayın Akışı",
                src: url,
                duration: "CANLI"
            };

            songs.push(newTrack);
            customTracks.push(newTrack);
            
            // Save URL list persistently
            localStorage.setItem("blackfm_custom_tracks", JSON.stringify(customTracks));

            // Render lists & notify
            renderSongsList();
            customStreamUrl.value = "";
            
            // Scroll to tab and highlight
            const tabSongs = document.querySelector("[data-tab='tab-songs']");
            if (tabSongs) tabSongs.click();
        });
    }

    // Reset playlist
    if (resetPlaylistBtn) {
        resetPlaylistBtn.addEventListener("click", () => {
            if (confirm("Çalma listesini varsayılan şarkılara sıfırlamak istiyor musunuz? Eklediğiniz tüm şarkı ve URL'ler temizlenecektir.")) {
                // Revoke blob URLs to free memory
                songs.forEach(s => {
                    if (s.isLocal && s.src.startsWith("blob:")) {
                        URL.revokeObjectURL(s.src);
                    }
                });
                jingles.forEach(j => {
                    if (j.isLocal && j.src.startsWith("blob:")) {
                        URL.revokeObjectURL(j.src);
                    }
                });

                localStorage.removeItem("blackfm_custom_tracks");
                customTracks = [];
                
                songs = [...DEFAULT_PLAYLIST.songs];
                jingles = [...DEFAULT_PLAYLIST.jingles];
                
                songsPlayedCount = 0;
                currentTrack = null;
                pauseAudio();
                
                renderSongsList();
                renderJinglesList();
            }
        });
    }

    // Test Jingle trigger in footer
    if (testJingleBtn) {
        testJingleBtn.addEventListener("click", (e) => {
            e.preventDefault();
            if (jingles.length === 0) {
                alert("Listede hiç jingle yok! Önce jingle sekmesinden ses yükleyin.");
                return;
            }
            
            // Trigger a random jingle immediately!
            const randomJingle = jingles[Math.floor(Math.random() * jingles.length)];
            transitionToTrack(randomJingle, "jingle");
        });
    }

    // -------------------------------------------------------------
    // 9.5 DJ AUTHENTICATION & UI CONTROL
    // -------------------------------------------------------------
    
    // Hash checker using Web Crypto API
    async function hashSHA256(str) {
        const utf8 = new TextEncoder().encode(str);
        const hashBuffer = await crypto.subtle.digest('SHA-256', utf8);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        return hashHex;
    }

    // Set DJ Mode UI
    function setDJMode(active) {
        isDJ = active;
        if (active) {
            document.body.classList.remove("is-guest");
            document.body.classList.add("is-dj");
            if (djLoginToggleBtn) {
                djLoginToggleBtn.classList.add("dj-active");
                djLoginToggleBtn.innerHTML = '<i data-lucide="unlock"></i> <span id="dj-btn-text">DJ Çıkışı</span>';
                djLoginToggleBtn.title = "DJ Yetkilerini Kapat";
            }
            sessionStorage.setItem("blackfm_is_dj", "true");
        } else {
            document.body.classList.remove("is-dj");
            document.body.classList.add("is-guest");
            if (djLoginToggleBtn) {
                djLoginToggleBtn.classList.remove("dj-active");
                djLoginToggleBtn.innerHTML = '<i data-lucide="lock"></i> <span id="dj-btn-text">DJ Girişi</span>';
                djLoginToggleBtn.title = "DJ Kontrol Paneli Girişi";
            }
            sessionStorage.removeItem("blackfm_is_dj");
            
            // Switch to Songs tab in case they were on Settings or Jingles (which are hidden for guests)
            const tabSongs = document.querySelector("[data-tab='tab-songs']");
            if (tabSongs) tabSongs.click();
        }
        lucide.createIcons();
    }

    // Login logic
    async function handleLogin() {
        if (!djPasswordInput) return;
        const password = djPasswordInput.value;
        const hash = await hashSHA256(password);
        
        if (hash === DJ_PASSWORD_HASH) {
            setDJMode(true);
            closeLoginModal();
            if (loginErrorMsg) loginErrorMsg.style.display = "none";
            djPasswordInput.value = "";
        } else {
            if (loginErrorMsg) loginErrorMsg.style.display = "block";
            djPasswordInput.value = "";
            djPasswordInput.focus();
        }
    }

    function openLoginModal() {
        if (djLoginModal) djLoginModal.classList.add("active");
        if (loginErrorMsg) loginErrorMsg.style.display = "none";
        if (djPasswordInput) {
            djPasswordInput.value = "";
            setTimeout(() => djPasswordInput.focus(), 100);
        }
    }

    function closeLoginModal() {
        if (djLoginModal) djLoginModal.classList.remove("active");
    }

    // Event Listeners for DJ Login
    if (djLoginToggleBtn) {
        djLoginToggleBtn.addEventListener("click", () => {
            if (isDJ) {
                if (confirm("DJ yetkilerini kapatmak ve dinleyici moduna geçmek istiyor musunuz?")) {
                    setDJMode(false);
                }
            } else {
                openLoginModal();
            }
        });
    }

    if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeLoginModal);
    if (cancelLoginBtn) cancelLoginBtn.addEventListener("click", closeLoginModal);
    
    if (submitLoginBtn && djPasswordInput) {
        submitLoginBtn.addEventListener("click", handleLogin);
        djPasswordInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                handleLogin();
            }
        });
    }

    // Close modal when clicking outside content area
    if (djLoginModal) {
        djLoginModal.addEventListener("click", (e) => {
            if (e.target === djLoginModal) {
                closeLoginModal();
            }
        });
    }

    // -------------------------------------------------------------
    // 10. INITIALIZATION
    // -------------------------------------------------------------
    const wasDJ = sessionStorage.getItem("blackfm_is_dj") === "true";
    setDJMode(wasDJ);
    setVolume(volume);
    renderSongsList();
    renderJinglesList();

    // Default select first track without auto-playing immediately (user interaction first)
    if (songs.length > 0) {
        setTrack(songs[0], "music");
    }
});
