// const grid = require("../grid");

const setStart = require("./set/setStart");

function moveStart() {
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
    if (cell.classList.contains("start")) {
      downy = true;
      elist.push(id);
    }
  });

  gridUi.addEventListener("mouseover", (e) => {
    // console.log(start.current);
    if (downy) {
      var id = e.target.id;
      elist.push(id);
      var current = elist.shift();
      var next = elist[0];

      setStart(current, next);

      // document.getElementById(startingNode).classList.remove("wall");
    }
  });
}

module.exports = moveStart;
