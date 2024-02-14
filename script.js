onload = () => {
  document.body.classList.remove("container");
};

function reproducirAudio() {
  console.log("Reproduciendo audio");
  // Obtiene el elemento de audio
  var audio = document.getElementById("audio");
  // Inicia la reproducción del audio
  audio.play();
}