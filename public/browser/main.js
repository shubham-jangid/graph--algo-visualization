const board = require("./board.js");
const createWall = require("./graphics/createWall");
const bfs = require("./pathfindingAlgorithm/dfs");
// const startNode = require("./graphics/startAndEndNode");
// startNode();

board();

// startNode();
createWall();

const grid = require("./node");

var start = grid[2][2];
var end = grid[2][23];
document.getElementById("2-2").classList.add("start");
document.getElementById("2-23").classList.add("target");

document.getElementById("start-btn").addEventListener("mousedown", e => {
  console.log(start);
  bfs(grid, start, end);
});
