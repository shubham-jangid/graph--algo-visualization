const grid = require("./../node");

function startNode() {
  var gridUi = document.getElementById("grid");
  var gridUi = document.getElementById("grid");
  var downy = false;
  var id = "";
  var start;
  start = grid[10][20];
  start.start = true;
  document.getElementById(start.i + "-" + start.j).classList.add("start");

  var elist = [];
  var downy = false;

  // var startingNode = "10-20";

  gridUi.addEventListener("mouseup", () => {
    downy = false;
    elist.length = 0;
  });

  gridUi.addEventListener("mousedown", e => {
    var id = e.target.id;
    var cell = document.getElementById(id);
    if (cell.classList.contains("start")) {
      console.log("skldjf");
      downy = true;
      elist.push(id);
    }
  });

  gridUi.addEventListener("mouseover", e => {
    if (downy) {
      var id = e.target.id;
      elist.push(id);
      var previousStart = elist.shift();
      startingNode = elist[0];
      document.getElementById(previousStart).classList.remove("start");
      var arr1 = previousStart.split("-");
      grid[arr1[0]][arr1[1]].start = false;
      document.getElementById(startingNode).classList.remove("wall");
      document.getElementById(startingNode).classList.add("start");
      var arr2 = startingNode.split("-");
      grid[arr2[0]][arr2[1]].start = true;
      console.log(grid[arr2[0]][arr2[1]].start);
    }
  });
}

module.exports = startNode;
