/**
 * BLACK FM - Varsayılan Çalma Listesi ve Jingle Yapılandırması
 * 
 * Bu dosya radyoda çalacak şarkıları ve aralara girecek jingle seslerini tanımlar.
 * Hem internet üzerindeki yayın linklerini (URL) hem de projenizin içine ekleyeceğiniz
 * yerel ses dosyalarını (örneğin "songs/sarki.mp3") destekler.
 * 
 * GitHub Pages'e yüklemeden önce kendi MP3 dosyalarınızı "songs" ve "jingles" 
 * klasörlerine koyup, bu listeyi güncelleyebilirsiniz.
 */

const DEFAULT_PLAYLIST = {
  // Radyoda çalacak normal müzikler / şarkılar
  songs: [
    {
      title: "Synthwave Breeze (Song 1)",
      artist: "SoundHelix Project",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      duration: "06:12" // Yaklaşık süre (isteğe bağlı)
    },
    {
      title: "Neon Horizon (Song 2)",
      artist: "SoundHelix Project",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      duration: "07:05"
    },
    {
      title: "Retro Grid Drive (Song 3)",
      artist: "SoundHelix Project",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
      duration: "05:44"
    },
    {
      title: "Cyber City Lights (Song 4)",
      artist: "SoundHelix Project",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
      duration: "05:02"
    }
  ],

  // Şarkı aralarına girecek Jingle'lar (reklamlar / kanal kimlikleri / geçiş sesleri)
  jingles: [
    {
      title: "Black FM Retro Dial-Up ID",
      artist: "System Sound",
      src: "https://www.soundjay.com/communication/sounds/dial-up-modem-01.mp3" // Cyberpunk retro modem sesi!
    },
    {
      title: "Black FM Cyber Sound Effect",
      artist: "UI Beep",
      src: "https://www.soundjay.com/buttons/sounds/button-10.mp3"
    },
    {
      title: "Black FM Radio Static Transition",
      artist: "Radio Noise",
      src: "https://www.soundjay.com/misc/sounds/radio-static-05.mp3" // Radyo frekans arama sesi
    }
  ]
};
