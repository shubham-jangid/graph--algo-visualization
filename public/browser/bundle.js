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
function animation(id, path) {
  if (path == "visited") {
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
module.exports = animation;

},{}],3:[function(require,module,exports){
const grid = require("./../node");

function createWalls() {
  var gridUi = document.getElementById("grid");
  var down = false;
  var id = "";

  gridUi.addEventListener("mouseup", () => {
    down = false;
  });

  gridUi.addEventListener("mousedown", e => {
    down = true;
    id = e.target.id;

    var arr = id.split("-");

    if (grid[arr[0]][arr[1]].start != true) {
      if (grid[arr[0]][arr[1]].wall != true) {
        grid[arr[0]][arr[1]].wall = true;
        document.getElementById(id).classList.add("wall");
      } else {
        grid[arr[0]][arr[1]].wall = false;
        document.getElementById(id).classList.remove("wall");
      }
    }
  });

  gridUi.addEventListener("mouseover", e => {
    if (down) {
      id = e.target.id;
      var arr = id.split("-");

      if (grid[arr[0]][arr[1]].start != true) {
        if (grid[arr[0]][arr[1]].wall != true) {
          grid[arr[0]][arr[1]].wall = true;
          document.getElementById(id).classList.add("wall");
        } else {
          grid[arr[0]][arr[1]].wall = false;
          document.getElementById(id).classList.remove("wall");
        }
      }
    }
  });
}

module.exports = createWalls;

},{"./../node":6}],4:[function(require,module,exports){
const animation = require("./animation");

function drawPath(start, end, visitedArray) {
  var backwardPath = [];

  backwardPath.push(end);

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
  for (var t = 0; t < forwardPath.length + visitedArray.length; t++) {
    if (t < visitedArray.length) {
      (function(t) {
        setTimeout(function() {
          animation(visitedArray[vi].i + "-" + visitedArray[vi].j, "visited");
          vi++;
        }, 5 * t);
      })(t);
    } else {
      (function(i) {
        setTimeout(function() {
          animation(forwardPath[pi].i + "-" + forwardPath[pi].j, "path");
          pi++;
        }, 5 * t);
      })(t);
    }
  }
}
module.exports = drawPath;

},{"./animation":2}],5:[function(require,module,exports){
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

// var algo = undefined;
// document.getElementById("algo")

document.getElementById("visualize-btn").addEventListener("mousedown", e => {
  console.log(start);
  bfs(grid, start, end);
});

},{"./board.js":1,"./graphics/createWall":3,"./node":6,"./pathfindingAlgorithm/dfs":7}],6:[function(require,module,exports){
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
  this.start = false;
  this.target = false;

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
  }
}

module.exports = grid;

},{}],7:[function(require,module,exports){
const drawPath = require("./../graphics/drawPath");

function bfs(grid, start, end) {
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
      }
    }
  }

  if (pathAvailable == false) {
    drawPath("", "", visitedArray);
    window.alert("no path possible");
  } else {
    drawPath(start, end, visitedArray);
  }
}

module.exports = bfs;

},{"./../graphics/drawPath":4}]},{},[5]);
