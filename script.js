const mazeLayout = [
  "##########",
  "#        #",
  "# ###### #",
  "# #    # #",
  "# # ## # #",
  "# # ## # #",
  "# #    # #",
  "# ###### #",
  "#        #",
  "########G#"
];

const maze = document.getElementById("maze");
let playerPos = { x: 1, y: 1 };

function drawMaze() {
  maze.innerHTML = "";
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");

      if (mazeLayout[y][x] === "#") {
        cell.classList.add("wall");
      } else if (mazeLayout[y][x] === "G") {
        cell.classList.add("goal");
      }

      if (playerPos.x === x && playerPos.y === y) {
        cell.classList.add("player");
      }

      maze.appendChild(cell);
    }
  }
}

function movePlayer(dx, dy) {
  const newX = playerPos.x + dx;
  const newY = playerPos.y + dy;

  const cell = mazeLayout[newY][newX];
  if (cell !== "#") {
    playerPos.x = newX;
    playerPos.y = newY;

    if (cell === "G") {
      window.location.href = "congrats.html";
    }
  }
  drawMaze();
}

document.addEventListener("keydown", e => {
  switch (e.key) {
    case "ArrowUp": movePlayer(0, -1); break;
    case "ArrowDown": movePlayer(0, 1); break;
    case "ArrowLeft": movePlayer(-1, 0); break;
    case "ArrowRight": movePlayer(1, 0); break;
  }
});

drawMaze();

