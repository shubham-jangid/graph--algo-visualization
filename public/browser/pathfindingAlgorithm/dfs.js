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
