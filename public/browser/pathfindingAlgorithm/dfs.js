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
