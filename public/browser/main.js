const createGrid = require("./grid.js");

createGrid();

var wall = new Array();
console.log(wall);

(function wallArray() {
  var grid = document.getElementById("grid");
  var down = false;

  grid.addEventListener("mousedown", e => {
    down = true;
    console.log(down);
    console.log(e.target);
  });

  grid.addEventListener("mouseup", () => {
    down = false;
    console.log(down);
  });
  grid.addEventListener("mouseover", e => {
    if (down) {
      console.log(down);
      console.log(e.target);
    }
  });
})();
