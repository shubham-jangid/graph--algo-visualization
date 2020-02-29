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
const wall = require("./../graphics/wall");

function drawPath(start, end, visitedArray) {
  var backwardPath = [];

  backwardPath.push(end);
  console.log(end);

  var next = end.previous;
  while (next.previous != undefined) {
    backwardPath.push(next);
    next = next.previous;
  }
  backwardPath.push(start);

  var forwardPath = [];

  for (var i = backwardPath.length - 1; i >= 0; i--) {
    var j = 0;
    forwardPath.push(backwardPath[i]);
    j = j + 1;
  }

  var vi = 0,
    pi = 0;
  console.log(forwardPath.length);
  for (var t = 0; t < forwardPath.length + visitedArray.length; t++) {
    if (t < visitedArray.length) {
      (function(t) {
        setTimeout(function() {
          wall.draw(visitedArray[vi].i + "-" + visitedArray[vi].j, "visited");
          vi++;
        }, 5 * t);
      })(t);
    } else {
      (function(i) {
        setTimeout(function() {
          wall.draw(forwardPath[pi].i + "-" + forwardPath[pi].j, "path");
          pi++;
        }, 5 * t);
      })(t);
    }
  }
  console.log(t);
}
module.exports = drawPath;

},{"./../graphics/wall":3}],3:[function(require,module,exports){
const grid = require("./../node");

//  this function is used to change the color of the grid.

function draw(id, path) {
  if (path == "wall") {
    document.getElementById(id).classList.remove("visited", "path");
    if (document.getElementById(id).classList.contains(path)) {
      document.getElementById(id).classList.remove(path);
    } else {
      document.getElementById(id).classList.add(path);
    }
  } else if (path == "visited") {
    document
      .getElementById(id)
      .classList.remove("wall", "visited", "path", "instantvisited");
    document.getElementById(id).classList.add(path, "instantvisited");
  } else {
    document
      .getElementById(id)
      .classList.remove("wall", "visited", "path", "instantvisited");
    document.getElementById(id).classList.add(path);
  }
}

// below function is used to draw the walls by draging the mouse
// it only draw , it does not add wall to wall array;
function createWalls() {
  var gridUi = document.getElementById("grid");
  var down = false;
  var id = "";

  gridUi.addEventListener("mousedown", e => {
    down = true;
    id = e.target.id;
    console.log(id);
    draw(id, "wall");
    var arr = id.split("-");
    // console.log(grid[0][0].visited);
    if (grid[arr[0]][arr[1]].wall != true) {
      grid[arr[0]][arr[1]].wall = true;
    } else {
      grid[arr[0]][arr[1]].wall = false;
    }

    console.log(grid[arr[0]][arr[1]].wall);
  });
  gridUi.addEventListener("mouseup", () => {
    down = false;
  });
  gridUi.addEventListener("mouseover", e => {
    if (down) {
      id = e.target.id;
      draw(id, "wall");
      var arr = id.split("-");
      // console.log(grid[0][0].visited);
      if (grid[arr[0]][arr[1]].wall != true) {
        grid[arr[0]][arr[1]].wall = true;
      } else {
        grid[arr[0]][arr[1]].wall = false;
      }
    }
  });
}

exports.createWalls = createWalls;
exports.draw = draw;

},{"./../node":5}],4:[function(require,module,exports){
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

},{"./board.js":1,"./graphics/wall":3,"./node":5,"./pathfindingAlgorithm/dfs":6}],5:[function(require,module,exports){
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
  this.wall = false;

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
    // if (i > 0 && j > 0) {
    //   this.neighbors.push(grid[i - 1][j - 1]);
    // }
    // if (i < rows - 1 && j > 0) {
    //   this.neighbors.push(grid[i + 1][j - 1]);
    // }
    // if (i > 0 && j < columns - 1) {
    //   this.neighbors.push(grid[i - 1][j + 1]);
    // }
    // if (i < rows - 1 && j < columns - 1) {
    //   this.neighbors.push(grid[i + 1][j + 1]);
    // }
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

},{}],6:[function(require,module,exports){
const drawPath = require("./../graphics/drawPath");
const wall = require("./../graphics/wall");

function bfs(grid, start, end) {
  console.log(end);
  var queue = [];
  var visitedArray = [];
  pathAvailable = false;

  queue.push(start);
  start.visited = true;

  while (queue.length != 0) {
    var v = queue.shift();
    var neighbors = v.neighbors;

    if (v.i == end.i && v.j == end.j) {
      pathAvailable = true;

      break;
    }

    for (var i = 0; i < neighbors.length; i++) {
      var w = neighbors[i];

      if (w.visited != true && w.wall == false) {
        queue.push(w);
        w.previous = v;
        w.visited = true;
        visitedArray.push(w);

        // wall.draw(w.i + "-" + w.j, "visited");
      }
    }
  }

  if (pathAvailable == false) {
    window.alert("no path possible");
  } else {
    drawPath(start, end, visitedArray);
  }

  // function drawVisited(visitedArray) {
  //   console.log(visitedArray.length);
  //   for (var i = 0; i < visitedArray.length; i++) {
  //     (function(i) {
  //       setTimeout(function() {
  //         wall.draw(visitedArray[i].i + "-" + visitedArray[i].j, "visited");
  //       }, 50 * i);
  //     })(i);
  //   }
  // }
  // console.log(visitedArray);

  // drawVisited(visitedArray);
}

module.exports = bfs;

},{"./../graphics/drawPath":2,"./../graphics/wall":3}]},{},[4]);
