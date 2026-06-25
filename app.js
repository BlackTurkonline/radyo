/**
 * BLACK FM - Core Logic & Audio Controller
 */

document.addEventListener("DOMContentLoaded", () => {
    // -------------------------------------------------------------
    // 1. STATE & VARIABLES
    // -------------------------------------------------------------
    let jingles = [...DEFAULT_PLAYLIST.jingles];
    
    // User added URL streams (load from localStorage if exists)
    let customTracks = JSON.parse(localStorage.getItem("blackfm_custom_tracks")) || [];
    
    // Master song list containing all items
    let allSongs = [...DEFAULT_PLAYLIST.songs, ...customTracks];
    let songs = [...allSongs]; // currently active playing pool
    
    // Playlists & Liking State
    let likedSongs = new Set(JSON.parse(localStorage.getItem("blackfm_liked_songs")) || []);
    let playCounts = JSON.parse(localStorage.getItem("blackfm_play_counts")) || {};
    let activePlaylist = "all"; // "all" | "favorites" | "most-played"
    let playCountIncremented = false;

    let currentTrack = null;
    let isPlaying = false;
    let isMuted = false;
    let volume = 0.8; // Default volume (80%)
    
    // Playback Queue variables
    let history = [];
    let isShuffle = true;
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
    const DJ_PASSWORD_HASH = "bfeeb56fda1d80f8ee0c1cee87a260947023f9ba208974fa32ba8ec832c6501c"; // SHA-256 of 581534

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

    // Audio Visualizer Bars
    const visualizerBarsContainer = document.getElementById("visualizer-bars");
    const numVisualizerBars = 16;
    let visualizerLoopId = null;

    if (visualizerBarsContainer) {
        visualizerBarsContainer.innerHTML = ""; // Clear placeholders
        for (let i = 0; i < numVisualizerBars; i++) {
            const bar = document.createElement("div");
            bar.className = "bar";
            visualizerBarsContainer.appendChild(bar);
        }
        // Initialize in paused state
        visualizerBarsContainer.classList.add("paused");
    }

    // Initialize Lucide Icons
    lucide.createIcons();

    // -------------------------------------------------------------
    // 2. PLAYBACK & QUEUE MANAGEMENT
    // -------------------------------------------------------------
    
    let nextSongIndex = null;
    let nextNumericJingleIndex = 0;

    function prepareNextTrack() {
        if (songs.length === 0) return;
        
        let currentIndex = -1;
        if (currentTrack && currentTrack.type === "music") {
            currentIndex = songs.findIndex(s => s.src === currentTrack.track.src);
        } else if (history.length > 0) {
            const lastSongSrc = history[history.length - 1];
            currentIndex = songs.findIndex(s => s.src === lastSongSrc);
        }

        if (isShuffle) {
            nextSongIndex = Math.floor(Math.random() * songs.length);
            if (nextSongIndex === currentIndex && songs.length > 1) {
                nextSongIndex = (nextSongIndex + 1) % songs.length;
            }
        } else {
            nextSongIndex = (currentIndex + 1) % songs.length;
        }

        updateNextTrackUI();
    }

    function updateNextTrackUI() {
        const nextTrackTitle = document.getElementById("next-track-title");
        if (!nextTrackTitle) return;

        if (songs.length === 0) {
            nextTrackTitle.textContent = "Çalma listesi boş";
            return;
        }

        // Check if next track is a jingle in our sequence
        if (jingles.length > 0) {
            const numericJingles = jingles.filter(j => /jingles\/[1-8]\.mp3$/.test(j.src));
            
            if (currentTrack && currentTrack.type === "music") {
                // Currently playing music -> next is numeric jingle
                if (numericJingles.length > 0) {
                    const nextJingle = numericJingles[nextNumericJingleIndex];
                    nextTrackTitle.textContent = `${nextJingle.title} (Tanıtım)`;
                    return;
                }
            } else if (currentTrack && currentTrack.type === "jingle") {
                // Currently playing a jingle
                const currentSrc = currentTrack.track.src.toLowerCase();
                const isNumeric = /jingles\/[1-8]\.mp3$/.test(currentSrc);
                if (isNumeric) {
                    // Next is the BlackFm jingle
                    nextTrackTitle.textContent = "BLACK FM (Jingle)";
                    return;
                }
            }
        }

        // Default song preview
        if (nextSongIndex === null || nextSongIndex >= songs.length) {
            nextSongIndex = 0; // Fallback
        }
        const nextSong = songs[nextSongIndex];
        nextTrackTitle.textContent = `${nextSong.title} - ${nextSong.artist}`;
    }

    // Create playing queue item
    function setTrack(track, type = "music") {
        currentTrack = { track, type };
        playCountIncremented = false;
        updateLikeButtonUI();
        
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

        // Prepare next track info
        if (type === "music") {
            prepareNextTrack();
        } else {
            updateNextTrackUI();
        }
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
    function playNext(isAuto = false) {
        if (songs.length === 0) return;

        // Play custom sequential jingle if isAuto is true
        if (isAuto === true && jingles.length > 0) {
            // Find numeric jingles: 1.mp3 to 8.mp3
            const numericJingles = jingles.filter(j => /jingles\/[1-8]\.mp3$/.test(j.src));
            const blackFmJingle = jingles.find(j => j.src.toLowerCase().endsWith("jingles/blackfm.mp3"));

            if (currentTrack && currentTrack.type === "music") {
                // Song ended naturally -> play the next numeric jingle in sequence
                if (numericJingles.length > 0) {
                    const jingleToPlay = numericJingles[nextNumericJingleIndex];
                    nextNumericJingleIndex = (nextNumericJingleIndex + 1) % numericJingles.length;
                    transitionToTrack(jingleToPlay, "jingle");
                    return;
                }
            } else if (currentTrack && currentTrack.type === "jingle") {
                // Jingle ended -> check if it was numeric or blackfm
                const currentSrc = currentTrack.track.src.toLowerCase();
                const isNumeric = /jingles\/[1-8]\.mp3$/.test(currentSrc);
                if (isNumeric && blackFmJingle) {
                    // Numeric jingle ended -> play BlackFm jingle immediately
                    transitionToTrack(blackFmJingle, "jingle");
                    return;
                }
            }
        }

        // If not auto, or jingle flow didn't trigger, play the next song in the playlist
        if (nextSongIndex === null || nextSongIndex >= songs.length) {
            if (isShuffle) {
                nextSongIndex = Math.floor(Math.random() * songs.length);
            } else {
                nextSongIndex = 0;
            }
        }

        const songToPlay = songs[nextSongIndex];
        songsPlayedCount = 0;

        // Record song to history
        if (currentTrack && currentTrack.type === "music") {
            history.push(currentTrack.track.src);
            if (history.length > 20) history.shift();
        }

        transitionToTrack(songToPlay, "music");
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
        
        if (visualizerBarsContainer) {
            visualizerBarsContainer.classList.add("paused");
            visualizerBarsContainer.classList.remove("simulated");
            const bars = visualizerBarsContainer.querySelectorAll(".bar");
            bars.forEach(b => b.style.height = "4px");
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
    // 5. AUDIO VISUALIZER (NEON EQUALIZER BARS)
    // -------------------------------------------------------------
    function startVisualizer() {
        if (visualizerAnimationId) {
            cancelAnimationFrame(visualizerAnimationId);
        }
        updateVisualizer();
    }

    function updateVisualizer() {
        if (!isPlaying) {
            if (visualizerBarsContainer) {
                visualizerBarsContainer.classList.add("paused");
                visualizerBarsContainer.classList.remove("simulated");
                const bars = visualizerBarsContainer.querySelectorAll(".bar");
                bars.forEach(b => b.style.height = "4px");
            }
            return;
        }

        if (visualizerBarsContainer) {
            visualizerBarsContainer.classList.remove("paused");
        }

        // If Web Audio API is active and we have data
        if (audioCtx && analyser && !isUsingSimulatedVisualizer) {
            if (visualizerBarsContainer) {
                visualizerBarsContainer.classList.remove("simulated");
            }

            const bufferLength = analyser.frequencyBinCount;
            const dataArray = new Uint8Array(bufferLength);
            analyser.getByteFrequencyData(dataArray);

            const bars = visualizerBarsContainer.querySelectorAll(".bar");
            const step = Math.floor(bufferLength / numVisualizerBars) || 1;

            let isSilent = true;
            bars.forEach((bar, i) => {
                const dataIndex = Math.min(i * step, bufferLength - 1);
                const value = dataArray[dataIndex];
                if (value > 0) isSilent = false;

                // Map value (0-255) to height (4-38px)
                const height = 4 + (value / 255) * 34;
                bar.style.height = `${height}px`;
            });

            if (isSilent) {
                if (visualizerBarsContainer) {
                    visualizerBarsContainer.classList.add("simulated");
                }
            }
        } else {
            // Fallback to simulated CSS wave
            if (visualizerBarsContainer) {
                visualizerBarsContainer.classList.add("simulated");
            }
        }

        visualizerAnimationId = requestAnimationFrame(updateVisualizer);
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
        prepareNextTrack();
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

        // Play count increment logic (more than 5 seconds played)
        if (isPlaying && !playCountIncremented && currentTrack && currentTrack.type === "music" && audio.currentTime > 5) {
            const src = currentTrack.track.src;
            playCounts[src] = (playCounts[src] || 0) + 1;
            localStorage.setItem("blackfm_play_counts", JSON.stringify(playCounts));
            playCountIncremented = true;
            console.log(`Play count incremented for ${currentTrack.track.title}: ${playCounts[src]}`);
            
            if (activePlaylist === 'most-played') {
                updateSongsQueue();
            }
            if (isDJ) {
                renderSongsList();
            }
        }

        // Auto transition trigger for crossfade
        if (isPlaying && (audio.duration - audio.currentTime <= crossfadeDuration) && crossfadeDuration > 0) {
            // Unbind timeupdate temporarily to prevent double skip
            audio.ontimeupdate = null;
            playNext(true);
        }
    });

    // Re-bind timeupdate on loadedmetadata/source change
    audio.addEventListener("play", () => {
        // Re-enable timeupdate if cleared
        audio.ontimeupdate = true;
    });

    audio.addEventListener("ended", () => {
        playNext(true);
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

    // Playlist selector logic
    const pillButtons = document.querySelectorAll(".pill-btn");
    pillButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const playlistType = btn.getAttribute("data-playlist");
            
            // Check if empty
            if (playlistType === "favorites" && likedSongs.size === 0) {
                alert("Henüz beğendiğiniz bir şarkı yok! Şarkıları çalarken kalp simgesine tıklayarak favorilerinize ekleyebilirsiniz.");
                return;
            }
            if (playlistType === "most-played") {
                const playedSongsCount = Object.keys(playCounts).length;
                if (playedSongsCount === 0) {
                    alert("Henüz yeterli dinleme verisi yok! Şarkıları dinledikçe en çok dinlenenler listesi otomatik oluşacaktır.");
                    return;
                }
            }
            
            pillButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            activePlaylist = playlistType;
            updateSongsQueue();
            
            // Play a track from new playlist
            if (songs.length > 0) {
                let startTrack = songs[0];
                if (isShuffle) {
                    startTrack = songs[Math.floor(Math.random() * songs.length)];
                }
                setTrack(startTrack, "music");
                playAudio();
            } else {
                currentTrack = null;
                pauseAudio();
                nowPlayingTitle.textContent = "Şarkı Seçilmedi";
                nowPlayingArtist.textContent = "Çalma listesi boş";
            }
            
            if (isDJ) {
                renderSongsList();
            }
        });
    });

    // Helper functions for Playlists & Favorites
    function updateSongsQueue() {
        if (activePlaylist === "all") {
            songs = [...allSongs];
        } else if (activePlaylist === "favorites") {
            songs = allSongs.filter(s => likedSongs.has(s.src));
        } else if (activePlaylist === "most-played") {
            const playedSongs = allSongs.filter(s => (playCounts[s.src] || 0) > 0);
            songs = playedSongs.sort((a, b) => (playCounts[b.src] || 0) - (playCounts[a.src] || 0));
        }
    }

    const likeBtn = document.getElementById("like-btn");
    const likeIcon = document.getElementById("like-icon");

    function updateLikeButtonUI() {
        if (!likeBtn || !currentTrack) return;
        
        if (currentTrack.type === "jingle") {
            likeBtn.style.display = "none";
            return;
        }
        
        likeBtn.style.display = "inline-flex";
        if (likedSongs.has(currentTrack.track.src)) {
            likeBtn.classList.add("liked");
            likeIcon.setAttribute("data-lucide", "heart");
        } else {
            likeBtn.classList.remove("liked");
            likeIcon.setAttribute("data-lucide", "heart");
        }
        lucide.createIcons();
    }

    function toggleLike() {
        if (!currentTrack || currentTrack.type === "jingle") return;
        
        const src = currentTrack.track.src;
        if (likedSongs.has(src)) {
            likedSongs.delete(src);
            // If the favorites playlist is now empty, switch back to 'all'
            if (activePlaylist === 'favorites' && likedSongs.size === 0) {
                activePlaylist = 'all';
                const allPill = document.querySelector('.pill-btn[data-playlist="all"]');
                if (allPill) {
                    pillButtons.forEach(b => b.classList.remove("active"));
                    allPill.classList.add("active");
                }
                updateSongsQueue();
                alert("Favori listeniz boşaldığı için Radyo Akışı'na geri dönüldü.");
            }
        } else {
            likedSongs.add(src);
        }
        
        localStorage.setItem("blackfm_liked_songs", JSON.stringify(Array.from(likedSongs)));
        updateLikeButtonUI();
        
        if (activePlaylist === "favorites") {
            updateSongsQueue();
            prepareNextTrack();
        }
        
        if (isDJ) {
            renderSongsList();
        }
    }

    if (likeBtn) {
        likeBtn.addEventListener("click", toggleLike);
    }

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
        
        let countText = `${songs.length} Şarkı`;
        if (activePlaylist === "favorites") {
            countText = `${songs.length} Beğenilen Şarkı`;
        } else if (activePlaylist === "most-played") {
            countText = `${songs.length} En Çok Dinlenen`;
        }
        if (songsCountBadge) songsCountBadge.textContent = countText;
        
        if (songs.length === 0) {
            songsList.innerHTML = `<div class="empty-list-msg">Çalma listesi boş. Şarkı ekleyin!</div>`;
            return;
        }

        songs.forEach((song, index) => {
            const card = document.createElement("div");
            card.className = "track-card";
            card.setAttribute("data-src", song.src);
            
            const isLiked = likedSongs.has(song.src);
            const playCount = playCounts[song.src] || 0;
            const playCountText = playCount > 0 ? `<span class="card-play-count"><i data-lucide="play" style="width: 10px; height: 10px; display: inline-flex;"></i> ${playCount}</span>` : "";
            const heartText = isLiked ? `<span class="card-heart-icon"><i data-lucide="heart" style="fill: var(--neon-pink); color: var(--neon-pink); width: 10px; height: 10px; display: inline-flex;"></i></span>` : "";

            card.innerHTML = `
                <div class="card-play-icon">
                    <i data-lucide="play"></i>
                </div>
                <div class="card-meta">
                    <div style="display: flex; align-items: center; gap: 6px;">
                        <h4>${song.title}</h4>
                        ${heartText}
                    </div>
                    <p>${song.artist || "Bilinmeyen Sanatçı"}${playCountText}</p>
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
                allSongs.push(newSong);
                updateSongsQueue();
                renderSongsList();
                prepareNextTrack();
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
            allSongs.push(newSong);
            updateSongsQueue();
            renderSongsList();
            prepareNextTrack();
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
        allSongs = allSongs.filter(s => s.src !== deleted.src);
        
        // If playing song is deleted, skip to next
        if (currentTrack && currentTrack.type === "music" && currentTrack.track.src === deleted.src) {
            playNext();
        }

        // If it was custom persistent track, update localStorage
        if (!deleted.isLocal) {
            customTracks = customTracks.filter(t => t.src !== deleted.src);
            localStorage.setItem("blackfm_custom_tracks", JSON.stringify(customTracks));
        }

        if (likedSongs.has(deleted.src)) {
            likedSongs.delete(deleted.src);
            localStorage.setItem("blackfm_liked_songs", JSON.stringify(Array.from(likedSongs)));
        }
        
        if (playCounts[deleted.src]) {
            delete playCounts[deleted.src];
            localStorage.setItem("blackfm_play_counts", JSON.stringify(playCounts));
        }

        updateSongsQueue();
        renderSongsList();
        prepareNextTrack();
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

            allSongs.push(newTrack);
            customTracks.push(newTrack);
            
            // Save URL list persistently
            localStorage.setItem("blackfm_custom_tracks", JSON.stringify(customTracks));

            updateSongsQueue();
            // Render lists & notify
            renderSongsList();
            customStreamUrl.value = "";
            
            // Scroll to tab and highlight
            const tabSongs = document.querySelector("[data-tab='tab-songs']");
            if (tabSongs) tabSongs.click();

            prepareNextTrack();
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
                
                allSongs = [...DEFAULT_PLAYLIST.songs];
                updateSongsQueue();
                
                songsPlayedCount = 0;
                currentTrack = null;
                pauseAudio();
                
                renderSongsList();
                renderJinglesList();
                prepareNextTrack();
            }
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

    // Set initial shuffle button state
    if (isShuffle && shuffleBtn) {
        shuffleBtn.classList.add("active");
    }

    // Default select first track without auto-playing immediately (user interaction first)
    if (songs.length > 0) {
        // If shuffle is active, select a random starting track
        const startTrack = isShuffle ? songs[Math.floor(Math.random() * songs.length)] : songs[0];
        setTrack(startTrack, "music");
    }

    // Fetch songs dynamically from Archive.org item metadata in the background
    async function syncSongsFromArchive() {
        try {
            console.log("Syncing songs from Archive.org metadata...");
            const response = await fetch("https://archive.org/metadata/Blackfm");
            if (!response.ok) throw new Error("Metadata request failed");
            
            const data = await response.json();
            if (!data.files || data.files.length === 0) return;
            
            const mp3Files = data.files.filter(f => f.name.toLowerCase().endsWith(".mp3"));
            if (mp3Files.length === 0) return;
            
            // Map files to song objects
            const fetchedSongs = mp3Files.map(file => {
                const parts = file.name.split("/");
                const baseNameWithExt = parts[parts.length - 1];
                const baseName = baseNameWithExt.substring(0, baseNameWithExt.lastIndexOf("."));
                
                let title = file.title || "";
                let artist = file.creator || file.artist || "";
                
                if (!title || !artist) {
                    if (baseName.includes(" - ")) {
                        const splitParts = baseName.split(" - ");
                        artist = artist || splitParts[0].trim();
                        title = title || splitParts.slice(1).join(" - ").trim();
                    } else {
                        title = title || baseName.trim();
                        artist = artist || "BLACK FM";
                    }
                }
                
                let duration = "CANLI";
                if (file.length) {
                    const secs = parseFloat(file.length);
                    const m = Math.floor(secs / 60);
                    const s = Math.floor(secs % 60).toString().padStart(2, '0');
                    duration = `${m}:${s}`;
                }
                
                const src = encodeURI(`https://archive.org/download/Blackfm/${file.name}`);
                
                return {
                    title,
                    artist,
                    src,
                    duration
                };
            });
            
            console.log(`Successfully parsed ${fetchedSongs.length} songs from Archive.org!`);
            
            // Update state
            DEFAULT_PLAYLIST.songs = fetchedSongs;
            allSongs = [...DEFAULT_PLAYLIST.songs, ...customTracks];
            
            // If the user hasn't started playing anything, reset the starting track to the new list
            const currentSrc = currentTrack && currentTrack.track && currentTrack.track.src;
            const isPlayingOrLoaded = currentSrc && fetchedSongs.some(s => s.src === currentSrc);
            
            updateSongsQueue();
            renderSongsList();
            
            if (!isPlaying && !isPlayingOrLoaded && songs.length > 0) {
                const startTrack = isShuffle ? songs[Math.floor(Math.random() * songs.length)] : songs[0];
                setTrack(startTrack, "music");
            } else {
                prepareNextTrack();
            }
            
        } catch (error) {
            console.error("Failed to sync songs from Archive.org, using local fallback list.", error);
        }
    }

    // Start background sync
    syncSongsFromArchive();

    // -------------------------------------------------------------
    // 11. SONG SEARCH IMPLEMENTATION
    // -------------------------------------------------------------
    const searchInput = document.getElementById("song-search-input");
    const searchClearBtn = document.getElementById("search-clear-btn");
    const searchResultsContainer = document.getElementById("search-results");

    if (searchInput && searchResultsContainer) {
        searchInput.addEventListener("input", (e) => {
            const query = e.target.value.trim().toLowerCase();
            
            if (searchClearBtn) {
                searchClearBtn.style.display = query.length > 0 ? "block" : "none";
            }
            
            if (query.length <= 1) {
                searchResultsContainer.style.display = "none";
                searchResultsContainer.innerHTML = "";
                return;
            }
            
            // Filter matching songs from allSongs
            const matches = allSongs.filter(song => {
                const titleMatch = (song.title || "").toLowerCase().includes(query);
                const artistMatch = (song.artist || "").toLowerCase().includes(query);
                return titleMatch || artistMatch;
            });
            
            searchResultsContainer.innerHTML = "";
            
            if (matches.length === 0) {
                searchResultsContainer.innerHTML = `<div class="search-no-results">Sonuç bulunamadı</div>`;
                searchResultsContainer.style.display = "flex";
                return;
            }
            
            // Show max 5 results for compact view
            const limit = Math.min(matches.length, 5);
            for (let i = 0; i < limit; i++) {
                const song = matches[i];
                const card = document.createElement("div");
                card.className = "search-result-card";
                
                card.innerHTML = `
                    <i data-lucide="music"></i>
                    <div class="search-result-info">
                        <span class="search-result-title">${song.title}</span>
                        <span class="search-result-artist">${song.artist || "Bilinmeyen Sanatçı"}</span>
                    </div>
                    <span class="search-result-duration">${song.duration || "--:--"}</span>
                `;
                
                card.addEventListener("click", () => {
                    songsPlayedCount = 0; // Reset jingle counter on manual selection
                    setTrack(song, "music");
                    playAudio();
                    
                    // Clear search
                    searchInput.value = "";
                    if (searchClearBtn) searchClearBtn.style.display = "none";
                    searchResultsContainer.style.display = "none";
                    searchResultsContainer.innerHTML = "";
                });
                
                searchResultsContainer.appendChild(card);
            }
            
            lucide.createIcons();
            searchResultsContainer.style.display = "flex";
        });
        
        // Clear button handler
        if (searchClearBtn) {
            searchClearBtn.addEventListener("click", () => {
                searchInput.value = "";
                searchClearBtn.style.display = "none";
                searchResultsContainer.style.display = "none";
                searchResultsContainer.innerHTML = "";
                searchInput.focus();
            });
        }
        
        // Close dropdown when clicking outside
        document.addEventListener("click", (e) => {
            if (!searchInput.contains(e.target) && !searchResultsContainer.contains(e.target)) {
                searchResultsContainer.style.display = "none";
            }
        });
    }
});
