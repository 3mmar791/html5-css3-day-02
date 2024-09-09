const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function drawRandomCircles() {
  const color = document.getElementById("circleColor").value;

  context.clearRect(0, 0, canvas.width, canvas.height); // clear canvas
  this.style.backgroundColor = color;
  for (let i = 0; i < 100; i++) {
    const x = getRandomInt(0, canvas.width);
    const y = getRandomInt(0, canvas.height);
    const radius = getRandomInt(10, 40);

    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.strokeStyle = color;
    context.stroke();
  }
}

document
  .getElementById("generateCirclesBtn")
  .addEventListener("click", drawRandomCircles);
