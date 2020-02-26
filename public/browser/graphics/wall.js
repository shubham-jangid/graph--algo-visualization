const grid = require("./../node");

//  this function is used to change the color of the grid.

function draw(id, path) {
  if (document.getElementById(id).classList.contains(path)) {
    document.getElementById(id).classList.remove(path);
  } else {
    document.getElementById(id).classList.add(path);
  }
}

// below function is used to draw the walls by draging the mouse
// it only draw , it does not add wall to wall array;
function createWalls() {
  var gridUi = document.getElementById("grid");
  var down = false;
  var id = "";

  gridUi.addEventListener("mousedown", e => {
    down = true;
    id = e.target.id;
    console.log(id);
    draw(id, "wall");
    var arr = id.split("-");
    // console.log(grid[0][0].visited);
    if (grid[arr[0]][arr[1]].wall != true) {
      grid[arr[0]][arr[1]].wall = true;
    } else {
      grid[arr[0]][arr[1]].wall = false;
    }

    console.log(grid[arr[0]][arr[1]].wall);
  });
  gridUi.addEventListener("mouseup", () => {
    down = false;
  });
  gridUi.addEventListener("mouseover", e => {
    if (down) {
      id = e.target.id;
      draw(id, "wall");
      var arr = id.split("-");
      // console.log(grid[0][0].visited);
      if (grid[arr[0]][arr[1]].wall != true) {
        grid[arr[0]][arr[1]].wall = true;
      } else {
        grid[arr[0]][arr[1]].wall = false;
      }
    }
  });
}

exports.createWalls = createWalls;
exports.draw = draw;
