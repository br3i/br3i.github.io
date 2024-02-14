onload = () => {
  document.body.classList.remove("container");
  console.log("Entra");
  let cancion = new Audio("audio/Jacob and the Stone.mp3")
  cancion.play();
};