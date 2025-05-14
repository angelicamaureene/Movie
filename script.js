const mazeLayout = [
  "####################",
  "#     #       #    #",
  "# ### # ##### # ## #",
  "#   #     #   # #  #",
  "### ##### # ### # ##",
  "#     #   #     #  #",
  "# ### # ##### ### ##",
  "# #   #   #     #  #",
  "# # ##### # ##### ##",
  "# #     # #     #  #",
  "##### # # ##### # ##",
  "#   # # #     # #  #",
  "# # ### ### ### ####",
  "# #     #     #    #",
  "# ####### ### #### #",
  "#       #   #    # #",
  "# ####### ##### ## #",
  "#         #      # #",
  "# ######### ######G#",
  "####################"
];

const maze = document.getElementById("maze");
let playerPos = { x: 1, y: 1 };

function drawMaze() {
  maze.innerHTML = "";
  for (let y = 0; y < mazeLayout.length; y++) {
    for (let x = 0; x < mazeLayout[y].length; x++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");

      const type = mazeLayout[y][x];
      if (type === "#") cell.classList.add("wall");
      if (type === "G") cell.classList.add("goal");
      if (playerPos.x === x && playerPos.y === y) cell.classList.add("player");

      maze.appendChild(cell);
    }
  }
}

function movePlayer(dx, dy) {
  const newX = playerPos.x + dx;
  const newY = playerPos.y + dy;
  const cell = mazeLayout[newY]?.[newX];

  if (cell && cell !== "#") {
    playerPos.x = newX;
    playerPos.y = newY;

    if (cell === "G") {
      window.location.href = "congrats.html";
    }
  }
  drawMaze();
}

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp": movePlayer(0, -1); break;
    case "ArrowDown": movePlayer(0, 1); break;
    case "ArrowLeft": movePlayer(-1, 0); break;
    case "ArrowRight": movePlayer(1, 0); break;
  }
});

drawMaze();


