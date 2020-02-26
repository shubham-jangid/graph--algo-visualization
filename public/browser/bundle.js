(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function board() {
  var height = document.getElementById("grid").clientHeight;
  var width = document.getElementById("grid").clientWidth;
  var spotHeight = Math.floor((height - 26) / 25);
  var spotWidth = Math.floor(width / 75);
  var tableDiv = document.getElementById("grid");
  var table = document.createElement("table");
  var tbody = document.createElement("tbody");

  for (var row = 0; row < 25; row++) {
    var trow = document.createElement("tr");
    for (var column = 0; column < 75; column++) {
      var node = document.createElement("td");
      node.style.width = spotWidth + "px";
      node.style.height = spotHeight + "px";
      // node.className += row + "-" + column;
      node.setAttribute("id", row + "-" + column);
      trow.appendChild(node);
    }
    tbody.appendChild(trow);
  }
  table.appendChild(tbody);

  tableDiv.appendChild(table);
}

module.exports = board;

},{}],2:[function(require,module,exports){
//  this function is used to change the color of the grid.

function draw(id, path) {
  document.getElementById(id).className += path;
}

// below function is used to draw the walls by draging the mouse
// it only draw , it does not add wall to wall array;
function createWalls() {
  // var grid = document.getElementById("grid");
  // var down = false;
  // var id = "";
  // function split(str) {
  //   return str.split("-");
  // }
  // grid.addEventListener("mousedown", e => {
  //   down = true;
  //   id = e.target.id;
  //   show(id);
  // });
  // grid.addEventListener("mouseup", () => {
  //   down = false;
  // });
  // grid.addEventListener("mouseover", e => {
  //   if (down) {
  //     id = e.target.id;
  //     show(id);
  //   }
  // });
}

exports.createWalls = createWalls;
exports.draw = draw;

},{}],3:[function(require,module,exports){
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

},{"./board.js":1,"./graphics/wall":2,"./node":4,"./pathfindingAlgorithm/dfs":5}],4:[function(require,module,exports){
var rows = 25;
var columns = 75;

// making 2-d grid
var grid = new Array(rows);
for (var i = 0; i < rows; i++) {
  grid[i] = new Array(columns);
}

function spot(i, j) {
  this.i = i;
  this.j = j;

  this.neighbors = [];
  this.previous = undefined;
  this.visited = false;

  this.addNeighbors = function(grid) {
    var i = this.i;
    var j = this.j;
    if (i < rows - 1) {
      this.neighbors.push(grid[i + 1][j]);
    }
    if (i > 0) {
      this.neighbors.push(grid[i - 1][j]);
    }
    if (j < columns - 1) {
      this.neighbors.push(grid[i][j + 1]);
    }
    if (j > 0) {
      this.neighbors.push(grid[i][j - 1]);
    }
    if (i > 0 && j > 0) {
      this.neighbors.push(grid[i - 1][j - 1]);
    }
    if (i < rows - 1 && j > 0) {
      this.neighbors.push(grid[i + 1][j - 1]);
    }
    if (i > 0 && j < columns - 1) {
      this.neighbors.push(grid[i - 1][j + 1]);
    }
    if (i < rows - 1 && j < columns - 1) {
      this.neighbors.push(grid[i + 1][j + 1]);
    }
  };
}

for (var i = 0; i < rows; i++) {
  for (var j = 0; j < columns; j++) {
    grid[i][j] = new spot(i, j);
  }
}

for (var i = 0; i < rows; i++) {
  for (var j = 0; j < columns; j++) {
    grid[i][j].addNeighbors(grid);
    // console.log(grid[i][j]);
  }
}

// exports.spot = spot;
// exports.grid = grid;
// module.exports = spot;
// console.log(grid);
module.exports = grid;

},{}],5:[function(require,module,exports){
const wall = require("./../graphics/wall");

function bfs(grid, start, end) {
  var queue = [];
  //   path.push(end);
  ends = end;

  queue.push(start);
  start.visited = true;

  while (queue.length != 0) {
    var v = queue.shift();
    var neighbors = v.neighbors;

    if (v.i == end.i && v.j == end.j) {
      // console.log("reached");
      drawPath(start, end);
      break;
    }
    for (var i = 0; i < neighbors.length; i++) {
      var w = neighbors[i];

      if (w.visited != true) {
        queue.push(w);
        w.previous = v;
        w.visited = true;
        // console.log(w);
      }
    }
  }

  //   path.push(end);
}
function drawPath(start, end) {
  var path = [];
  var next = end.previous;
  while (next.previous != undefined) {
    path.push(next);
    next = next.previous;
  }
  //   console.log(path);
  console.log(end);

  wall.draw(start.i + "-" + start.j, "path");
  //   console.log(start.i, start.j);
  wall.draw(end.i + "-" + end.j, "path");

  for (var i = 0; i < path.length; i++) {
    wall.draw(path[i].i + "-" + path[i].j, "path");
  }
}

module.exports = bfs;

},{"./../graphics/wall":2}]},{},[3]);
