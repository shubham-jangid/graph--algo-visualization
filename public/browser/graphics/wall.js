//  this function is used to change the color of the grid.

function draw(id, path) {
  document.getElementById(id).className += path;
}

// below function is used to draw the walls by draging the mouse
// it only draw , it does not add wall to wall array;
function createWalls() {
  // var grid = document.getElementById("grid");
  // var down = false;
  // var id = "";
  // function split(str) {
  //   return str.split("-");
  // }
  // grid.addEventListener("mousedown", e => {
  //   down = true;
  //   id = e.target.id;
  //   show(id);
  // });
  // grid.addEventListener("mouseup", () => {
  //   down = false;
  // });
  // grid.addEventListener("mouseover", e => {
  //   if (down) {
  //     id = e.target.id;
  //     show(id);
  //   }
  // });
}

exports.createWalls = createWalls;
exports.draw = draw;
