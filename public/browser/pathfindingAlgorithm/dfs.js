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
