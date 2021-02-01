let snake = [
  {x: 200, y: 200},
  {x: 190, y: 200},
  {x: 180, y: 200},
  {x: 170, y: 200},
  {x: 160, y: 200}
]

const snakeboard = document.getElementById("snakeboard");
const snakeboard_ctx = snakeboard.getContext("2d");
main();
function main() {
    clearCanvas();
    drawSnake();
}

function clearCanvas() {
  snakeboard_ctx.fillStyle = "yellowgreen";
  snakeboard_ctx.strokestyle = 'black';
  snakeboard_ctx.fillRect(0, 0, snakeboard.width, snakeboard.height);
  snakeboard_ctx.strokeRect(0, 0, snakeboard.width, snakeboard.height);
}
function drawSnake() {
  snake.forEach(drawSnakePart)
}

function drawSnakePart(snakePart) {
  snakeboard_ctx.fillStyle = 'darkgreen';
  snakeboard_ctx.strokestyle = "black";
  snakeboard_ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
  snakeboard_ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}