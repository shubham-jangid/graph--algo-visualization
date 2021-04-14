// import { grid } from "./grid.js";

// import { nodes } from "./browser/nodes.js";
// console.log(nodes);
var setNode = function (current, next, nodeType) {
  var startIndexes = current.split("-");
  var i = startIndexes[0];
  var j = startIndexes[1];

  if (next == null) {
    if (nodeType == "start") {
      document.getElementById(current).classList.add("start");
      grid[i][j].start = true;
    } else if (nodeType == "target") {
      document.getElementById(current).classList.add("target");
      grid[i][j].target = true;
    }
  } else {
    if (nodeType == "start") {
      document.getElementById(current).classList.remove("start");
      grid[i][j].start = false;
      current = next;
      window.startNode.current = current;
      window.startNode.next = next;

      var startIndexes = current.split("-");
      i = startIndexes[0];
      j = startIndexes[1];
      grid[i][j].start = true;
      document.getElementById(current).classList.add("start");
    } else if (nodeType == "target") {
      document.getElementById(current).classList.remove("target");
      grid[i][j].target = false;
      current = next;
      window.targetNode.current = current;
      window.targetNode.next = next;

      var startIndexes = current.split("-");
      i = startIndexes[0];
      j = startIndexes[1];
      grid[i][j].target = true;
      document.getElementById(current).classList.add("target");
    }
  }
};

module.exports = setNode;
