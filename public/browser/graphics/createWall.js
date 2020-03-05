const grid = require("./../node");

function createWalls() {
  var gridUi = document.getElementById("grid");
  var down = false;
  var id = "";

  gridUi.addEventListener("mouseup", () => {
    down = false;
  });

  gridUi.addEventListener("mousedown", e => {
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

  gridUi.addEventListener("mouseover", e => {
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
