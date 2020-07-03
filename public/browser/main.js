const gridUI = require("./board.js");
const createWall = require("./graphics/createWall");
const bfs = require("./pathfindingAlgorithm/dfs");
const moveStart = require("./graphics/moveStart");
const moveTarget = require("./graphics/moveTarget");
const setTarget = require("./graphics/set/setTarget");
const setStart = require("./graphics/set/setStart");
const grid = require("./grid");
var start = require("./global_start");
var target = require("./golbal_target");

gridUI();
moveStart();
moveTarget();

createWall();

setStart(start.current, start.next);
setTarget(target.current, target.next);

var algorithm = undefined;

function getListValue() {
  var selectedOption, st;
  selectedOption = document.getElementById("Algorithms").selectedIndex;

  algorithm = document.getElementById("Algorithms").options[selectedOption]
    .value;
  console.log(algorithm);
}

document.getElementById("visualize-btn").addEventListener("mousedown", (e) => {
  getListValue();
  console.log(algorithm);

  if (algorithm === "undefined") {
    window.alert("chooes the algorithm");
  } else {
    switch (algorithm) {
      case "Dijkstras":
        bfs(grid, start.current, target.current);
        break;
    }
  }
});
