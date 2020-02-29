const board = require("./board.js");
const wall = require("./graphics/wall");
const spot = require("./node");
const bfs = require("./pathfindingAlgorithm/dfs");

board();

wall.createWalls();

const grid = require("./node");

var start = grid[2][5];
var end = grid[2][23];

var btn = document.getElementById("start-btn");
btn.addEventListener("mousedown", e => {
  console.log("runjkd");
  bfs(grid, start, end);
});
