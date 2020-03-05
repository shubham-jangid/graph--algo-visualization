const board = require("./board.js");
const createWall = require("./graphics/createWall");
const bfs = require("./pathfindingAlgorithm/dfs");
const startNode = require("./graphics/startAndEndNode");
// startNode();

board();

startNode();
createWall();

const grid = require("./node");
// for (var i = 0; i < 24; i++) {
//   for (var j = 0; j < 74; j++) {
//     if (grid[i][j].start == true) start = grid[i][j];
//   }
// }

var start = grid[2][2];
var end = grid[2][23];

document.getElementById("start-btn").addEventListener("mousedown", e => {
  console.log(start);
  bfs(grid, start, end);
});
