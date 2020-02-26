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
