var audio = document.getElementById("audio");
onload = () => {
  document.body.classList.remove("container");
  if (audio.paused) {
    audio.play();
  }
};
