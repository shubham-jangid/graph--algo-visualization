const grid = require("../grid");

function createWalls() {
  var gridUI = document.getElementById("grid");
  var down = false;
  var id = "";

  gridUI.addEventListener("mouseup", () => {
    down = false;
  });

  gridUI.addEventListener("mousedown", (e) => {
    down = true;
    id = e.target.id;

    var arr = id.split("-");

    if (grid[arr[0]][arr[1]].start != true) {
      if (grid[arr[0]][arr[1]].wall != true) {
        grid[arr[0]][arr[1]].wall = true;
        document.getElementById(id).classList.add("wall");
      } else {
        grid[arr[0]][arr[1]].wall = false;
        document.getElementById(id).classList.remove("wall");
      }
    }
  });

  gridUI.addEventListener("mouseover", (e) => {
    if (down) {
      id = e.target.id;
      var arr = id.split("-");

      if (grid[arr[0]][arr[1]].start != true) {
        if (grid[arr[0]][arr[1]].wall != true) {
          grid[arr[0]][arr[1]].wall = true;
          document.getElementById(id).classList.add("wall");
        } else {
          grid[arr[0]][arr[1]].wall = false;
          document.getElementById(id).classList.remove("wall");
        }
      }
    }
  });
}

module.exports = createWalls;
