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

  aLoop: while (stack.length != 0) {
    var v = stack.pop();

    v.visited = true;
    visitedArray.push(v);

    for (var i = 0; i < v.neighbours.length; i++) {
      var neighbour = v.neighbours[i];
      if (neighbour.visited != true && neighbour.wall == false) {
        stack.push(neighbour);
        neighbour.previous = v;
        if (neighbour.i == targetNode.i && neighbour.j == targetNode.j) {
          pathAvailable = true;
          break aLoop;
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
