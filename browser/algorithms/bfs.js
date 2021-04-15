// const drawPath = require("../graphics/drawPath");
import { nodes } from "../nodes.js";
import { drawPath } from "../drawPath.js";

function bfs() {
  var startIndexes = window.startNode.current.split("-");
  var startNode = nodes[startIndexes[0]][startIndexes[1]];

  var targetIndexes = window.targetNode.current.split("-");
  var targetNode = nodes[targetIndexes[0]][targetIndexes[1]];

  var queue = [];
  var visitedArray = [];
  var pathAvailable = false;

  queue.push(startNode);
  startNode.visited = true;

  while (queue.length != 0) {
    var v = queue.shift();
    var neighbours = v.neighbours;

    if (v.i == targetNode.i && v.j == targetNode.j) {
      pathAvailable = true;
      break;
    }

    for (var i = 0; i < neighbours.length; i++) {
      var neighbour = neighbours[i];

      if (neighbour.visited != true && neighbour.wall == false) {
        queue.push(neighbour);
        neighbour.previous = v;
        neighbour.visited = true;
        visitedArray.push(neighbour);
      }
    }
  }

  if (pathAvailable == false) {
    // drawPath("", "", visitedArray);
    window.alert("no path possible");
  } else {
    drawPath(startNode, targetNode, visitedArray);
    // window.alert(" path possible");
  }
}

export { bfs };
