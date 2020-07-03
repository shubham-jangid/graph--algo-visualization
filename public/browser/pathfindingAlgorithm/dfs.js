const drawPath = require("../graphics/drawPath");

function dfs(grid, start, end) {
  var startIndexes = start.split("-");
  var start_i = startIndexes[0];
  var start_j = startIndexes[1];
  var start = grid[start_i][start_j];

  var endIndexes = end.split("-");
  var end_i = endIndexes[0];
  var end_j = endIndexes[1];
  var end = grid[end_i][end_j];

  var stack = new Array();
  var visitedArray = [];
  pathAvailable = false;

  stack.push(start);

  var x = 1;
  while (stack.length != 0) {
    var v = stack.pop();
    var neighbors = v.neighbors;
    console.log(v);
    console.log(neighbors);

    if (v.i == end.i && v.j == end.j) {
      pathAvailable = true;
      break;
    }

    if (v.visited != true && v.wall == false) {
      v.visited = true;
      visitedArray.push(v);
      for (var i = 0; i < neighbors.length; i++) {
        var w = neighbors[i];
        // if (w.visited != true && w.wall == false) {
        stack.push(w);
        w.previous = v;
        w.visited = true;
        visitedArray.push(w);
        // }
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

module.exports = dfs;
