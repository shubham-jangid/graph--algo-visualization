// const grid = require("../grid");
const setTarget = require("./set/setTarget");

function moveTarget() {
  var gridUi = document.getElementById("grid");

  var downy = false;
  var id = "";

  var elist = [];
  var downy = false;

  gridUi.addEventListener("mouseup", () => {
    downy = false;
    elist.length = 0;
  });

  gridUi.addEventListener("mousedown", (e) => {
    var id = e.target.id;
    var cell = document.getElementById(id);
    if (cell.classList.contains("target")) {
      downy = true;
      elist.push(id);
    }
  });

  gridUi.addEventListener("mouseover", (e) => {
    if (downy) {
      var id = e.target.id;
      elist.push(id);
      var current = elist.shift();
      var next = elist[0];

      setTarget(current, next);

      // document.getElementById(startingNode).classList.remove("wall");
    }
  });
}

module.exports = moveTarget;
