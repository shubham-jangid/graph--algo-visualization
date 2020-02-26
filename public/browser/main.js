const board = require("./board.js");
const wall = require("./graphics/wall");
const spot = require("./node");
const bfs = require("./pathfindingAlgorithm/dfs");

board();

wall.createWalls();

const grid = require("./node");
// wall.draw("0-0");
// wall.draw("2-2");

var start = grid[0][0];
var end = grid[4][74];
bfs(grid, start, end);
