onload = () => {
  document.body.classList.remove("container");
};

document.addEventListener("DOMContentLoaded", function() {
    var toggleBubblesBtn = document.getElementById("toggleBubbles");

    toggleBubblesBtn.addEventListener("click", function() {
        var bubblesContainer = document.querySelector("body > .bubbles");
      if (bubblesContainer) {
          if (bubblesContainer.hidden) {
              bubblesContainer.hidden = false; // Mostrar si está oculto
          } else {
              bubblesContainer.hidden = true; // Ocultar si está visible
          }
      }
    });
});

