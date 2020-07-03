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

// // code to get the selected algorithm
// var algorithm = undefined;

// var elements = document.getElementsByClassName("dropdownlist");
// console.log(elements);
// var myFunction = function () {
//   algorithm = this.getAttribute("name");
// };

document.getElementById("visualize-btn").addEventListener("mousedown", (e) => {
  // if (algorithm == undefined) {
  //   window.alert("chooes the algorithm");
  // } else {
  //   switch (algorithm) {
  //     case Dijkstras:
  //       console.log(algorithm);
  //       bfs(grid, start.current, target.current);
  //       break;
  //     case y:
  //       // code block
  //       break;
  //     default:
  //     // code block
  //   }
  // }
  // console.log(algorithm);
  console.log(start.current);
  bfs(grid, start.current, target.current);
});
