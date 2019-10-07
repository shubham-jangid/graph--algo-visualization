show = function(event) {
  event.className += " wall";
};

function wallArray() {
  var grid = document.getElementById("grid");
  var down = false;

  function split(str) {
    return str.split("-");
  }

  grid.addEventListener("mousedown", e => {
    down = true;
    show(e.target);
  });

  grid.addEventListener("mouseup", () => {
    down = false;
  });
  grid.addEventListener("mouseover", e => {
    if (down) {
      show(e.target);
    }
  });
}

module.exports = wallArray;
