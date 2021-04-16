// const drawPath = require("../graphics/drawPath");
import { nodes } from "../nodes.js";
import { drawPath } from "../drawPath.js";

function dfs() {
  var startIndexes = window.startNode.current.split("-");
  var startNode = nodes[startIndexes[0]][startIndexes[1]];

  var targetIndexes = window.targetNode.current.split("-");
  var targetNode = nodes[targetIndexes[0]][targetIndexes[1]];

  var stack = [];
  var visitedArray = [];
  var pathAvailable = false;

  stack.push(startNode);
  startNode.visited = true;

  while (stack.length != 0) {
    var v = stack.pop();

    if (v.i == targetNode.i && v.j == targetNode.j) {
      pathAvailable = true;
      break;
    }
    if (!v.visited) {
      v.visited = true;
      for (var i = 0; i < v.neighbours.length; i++) {
        var neighbour = v.neighbours[i];

        if (neighbour.visited != true && neighbour.wall == false) {
          stack.push(neighbour);
          neighbour.previous = v;
          visitedArray.push(neighbour);
        }
      }
    }
  }

  if (pathAvailable == false) {
    window.alert("no path possible");
  } else {
    drawPath(startNode, targetNode, visitedArray);
  }
}

export { dfs };
