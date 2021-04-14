// import { setNodeType } from "./setNodeType.js";

let nodes = new Array(window.rows);
console.log(window.rows);

let node = {
  i: null,
  j: null,
  start: false,
  target: false,
  neighbour: [],
  previous: null,
  visited: false,
  wall: false,
  neighbors: [],
  addNeighbour: function (i, j, rows, columns, board) {
    if (i < rows - 1) {
      this.neighbors.push(board[i + 1][j]);
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
  },
  // addWall: function () {
  //   this.wall = true;
  //   setNodeType(wall);
  // },
  // removeWall: function () {
  //   this.wall = false;
  //   setNodeType(Rwall);
  // },
};

for (var i = 0; i < window.rows; i++) {
  nodes[i] = [];
  for (var j = 0; j < window.columns; j++) {
    console.log("dfkdfdj");

    nodes[i][j] = Object.create(node);
  }
}

export { nodes };
