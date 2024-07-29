onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  document.addEventListener("DOMContentLoaded", function() {
    var playButton = document.getElementById("play-button");
    var backgroundMusic = document.getElementById("background-music");

    playButton.addEventListener("click", function() {
        backgroundMusic.play();
        playButton.style.display = "none"; // Hide the button after clicking
    });
});
