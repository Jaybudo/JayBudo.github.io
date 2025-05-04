document.addEventListener("DOMContentLoaded", function () {
  const bgMusic = new Audio('audio/bgmusic.mp3');
  bgMusic.loop = true;
  bgMusic.volume = 0.2;

  const playBtn = document.getElementById('playMusicBtn');

  if (playBtn) {
    playBtn.addEventListener('click', () => {
      bgMusic.play()
        .then(() => {
          playBtn.style.display = 'none'; // Cache le bouton une fois la musique activée
        })
        .catch(err => {
          console.error("Erreur de lecture :", err);
        });
    });
  }
});



