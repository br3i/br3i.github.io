onload = () => {
  document.body.classList.remove("container");
  console.log("Entra");
};
document.getElementById('playButton').addEventListener('click', function() {
  console.log("Entra2");
    var audio = document.getElementById('audio');
    audio.play().then(function() {
        // La reproducción del audio se inició correctamente
    }).catch(function(error) {
        // Error al intentar iniciar la reproducción del audio
        console.error('Error al reproducir el audio:', error);
    });
});