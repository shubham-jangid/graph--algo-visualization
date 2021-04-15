let nodes = [];

let node = function () {
  this.i = null;
  this.j = null;
  this.start = false;
  this.target = false;
  this.previous = null;
  this.visited = false;
  this.wall = false;
  this.neighbours = [];

  this.addNeighbours = function (i, j, rows, columns, nodes) {
    this.i = i;
    this.j = j;
    if (i < rows - 1) {
      this.neighbours.push(nodes[i + 1][j]);
    }
    if (i > 0) {
      this.neighbours.push(nodes[i - 1][j]);
    }
    if (j < columns - 1) {
      this.neighbours.push(nodes[i][j + 1]);
    }
    if (j > 0) {
      this.neighbours.push(nodes[i][j - 1]);
    }
  };
};

function createNodes() {
  for (var i = 0; i < window.rows; i++) {
    nodes[i] = [];
    for (var j = 0; j < window.columns; j++) {
      nodes[i][j] = new node();
    }
  }

  for (var i = 0; i < window.rows; i++) {
    for (var j = 0; j < window.columns; j++) {
      nodes[i][j].addNeighbours(i, j, window.rows, window.columns, nodes);
    }
  }
}
export { nodes, createNodes };
