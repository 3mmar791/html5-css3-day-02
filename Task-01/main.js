var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function drawRandomCircles() {
  var colorVlue = document.getElementById("circleColor").value;
  var color = document.getElementById("circleColor");

  color.onchange = function (e) {
    if (e.target.value === colorVlue) {
      return;
    } else {
      context.clearRect(0, 0, canvas.width, canvas.height); // clear canvas
      colorVlue = e.target.value;
    }
  };

  this.style.backgroundColor = colorVlue; // styling the button with the same color

  for (let i = 0; i < 100; i++) {
    var x = getRandomInt(0, canvas.width);
    var y = getRandomInt(0, canvas.height);
    var radius = getRandomInt(10, 40);

    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.strokeStyle = colorVlue;
    context.stroke();
  }
}

document
  .getElementById("generateCirclesBtn")
  .addEventListener("click", drawRandomCircles);
