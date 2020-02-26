const board = require("./board.js");
const wall = require("./graphics/wall");
const spot = require("./node");
const bfs = require("./pathfindingAlgorithm/dfs");

board();

wall.createWalls();

const grid = require("./node");

var start = grid[0][0];
var end = grid[24][74];
// document.getElementsByClassName("start-btn").onclick = function() {
//   console.log("runjkd");
//   bfs(grid, start, end);
// };
var btn = document.getElementById("start-btn");
btn.addEventListener("mousedown", e => {
  console.log("runjkd");
  bfs(grid, start, end);
});
