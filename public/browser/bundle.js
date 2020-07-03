(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// this function creat the grid UI
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
var start = {
  current: "2-3",
  next: null,
};

module.exports = start;

},{}],3:[function(require,module,exports){
var target = {
  current: "12-23",
  next: null,
};

module.exports = target;

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
const grid = require("../grid");

function createWalls() {
  var gridUI = document.getElementById("grid");
  var down = false;
  var id = "";

  gridUI.addEventListener("mouseup", () => {
    down = false;
  });

  gridUI.addEventListener("mousedown", (e) => {
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

  gridUI.addEventListener("mouseover", (e) => {
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

},{"../grid":11}],6:[function(require,module,exports){
const animation = require("./animation");

function drawPath(start, end, visitedArray) {
  var backwardPath = [];

  backwardPath.push(end);

  console.log(end);
  var next = end.previous;
  console.log(next);
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
      (function (t) {
        setTimeout(function () {
          animation(visitedArray[vi].i + "-" + visitedArray[vi].j, "visited");
          vi++;
        }, 5 * t);
      })(t);
    } else {
      (function (i) {
        setTimeout(function () {
          animation(forwardPath[pi].i + "-" + forwardPath[pi].j, "path");
          pi++;
        }, 5 * t);
      })(t);
    }
  }
}
module.exports = drawPath;

},{"./animation":4}],7:[function(require,module,exports){
// const grid = require("../grid");

const setStart = require("./set/setStart");

function moveStart() {
  var gridUi = document.getElementById("grid");

  var downy = false;
  var id = "";

  var elist = [];
  var downy = false;

  gridUi.addEventListener("mouseup", () => {
    downy = false;
    elist.length = 0;
  });

  gridUi.addEventListener("mousedown", (e) => {
    var id = e.target.id;
    var cell = document.getElementById(id);
    if (cell.classList.contains("start")) {
      downy = true;
      elist.push(id);
    }
  });

  gridUi.addEventListener("mouseover", (e) => {
    // console.log(start.current);
    if (downy) {
      var id = e.target.id;
      elist.push(id);
      var current = elist.shift();
      var next = elist[0];

      setStart(current, next);

      // document.getElementById(startingNode).classList.remove("wall");
    }
  });
}

module.exports = moveStart;

},{"./set/setStart":9}],8:[function(require,module,exports){
// const grid = require("../grid");
const setTarget = require("./set/setTarget");

function moveTarget() {
  var gridUi = document.getElementById("grid");

  var downy = false;
  var id = "";

  var elist = [];
  var downy = false;

  gridUi.addEventListener("mouseup", () => {
    downy = false;
    elist.length = 0;
  });

  gridUi.addEventListener("mousedown", (e) => {
    var id = e.target.id;
    var cell = document.getElementById(id);
    if (cell.classList.contains("target")) {
      downy = true;
      elist.push(id);
    }
  });

  gridUi.addEventListener("mouseover", (e) => {
    if (downy) {
      var id = e.target.id;
      elist.push(id);
      var current = elist.shift();
      var next = elist[0];

      setTarget(current, next);

      // document.getElementById(startingNode).classList.remove("wall");
    }
  });
}

module.exports = moveTarget;

},{"./set/setTarget":10}],9:[function(require,module,exports){
const grid = require("../../grid");
var start = require("../../global_start");

var setStart = function (current, next) {
  var startIndexes = current.split("-");
  var i = startIndexes[0];
  var j = startIndexes[1];

  if (next == null) {
    document.getElementById(current).classList.add("start");
    grid[i][j].start = true;
  } else {
    document.getElementById(current).classList.remove("start");
    grid[i][j].start = false;
    current = next;
    start.current = current;
    start.next = next;

    var startIndexes = current.split("-");
    i = startIndexes[0];
    j = startIndexes[1];
    grid[i][j].start = true;
    document.getElementById(current).classList.add("start");
  }
};

module.exports = setStart;

},{"../../global_start":2,"../../grid":11}],10:[function(require,module,exports){
const grid = require("../../grid");
var target = require("../../golbal_target");

var setTarget = function (current, next) {
  var startIndexes = current.split("-");
  var i = startIndexes[0];
  var j = startIndexes[1];

  if (next == null) {
    document.getElementById(current).classList.add("target");
    grid[i][j].start = true;
  } else {
    document.getElementById(current).classList.remove("target");
    grid[i][j].start = false;
    current = next;
    target.current = current;
    target.next = next;

    var startIndexes = current.split("-");
    i = startIndexes[0];
    j = startIndexes[1];
    grid[i][j].start = true;
    document.getElementById(current).classList.add("target");
  }
};

module.exports = setTarget;

},{"../../golbal_target":3,"../../grid":11}],11:[function(require,module,exports){
// this file is for programming
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

  this.addNeighbors = function (grid) {
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

},{}],12:[function(require,module,exports){
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

},{"./board.js":1,"./global_start":2,"./golbal_target":3,"./graphics/createWall":5,"./graphics/moveStart":7,"./graphics/moveTarget":8,"./graphics/set/setStart":9,"./graphics/set/setTarget":10,"./grid":11,"./pathfindingAlgorithm/dfs":13}],13:[function(require,module,exports){
const drawPath = require("./../graphics/drawPath");

function bfs(grid, start, end) {
  var startIndexes = start.split("-");
  var start_i = startIndexes[0];
  var start_j = startIndexes[1];
  var start = grid[start_i][start_j];
  console.log(start_i, start_j);

  var endIndexes = end.split("-");
  var end_i = endIndexes[0];
  var end_j = endIndexes[1];
  var end = grid[end_i][end_j];

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
    // drawPath("", "", visitedArray);
    window.alert("no path possible");
  } else {
    drawPath(start, end, visitedArray);
  }
}

module.exports = bfs;

},{"./../graphics/drawPath":6}]},{},[12]);
