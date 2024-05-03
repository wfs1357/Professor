const acrostico = document.getElementById('acrostico');
const paragraphs = acrostico.getElementsByTagName('p');

let currentColorIndex = 0;
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

function changeColor() {
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length;
  }
}

setInterval(changeColor, 1000); // Altera a cor a cada segundo
