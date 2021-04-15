import { nodes } from "./nodes.js";
var setNode = function (current, next, nodeType) {
  var startIndexes = current.split("-");
  var i = startIndexes[0];
  var j = startIndexes[1];

  if (next == null) {
    if (nodeType == "start") {
      document.getElementById(current).classList.add("start");
      nodes[i][j].start = true;
    } else if (nodeType == "target") {
      document.getElementById(current).classList.add("target");
      nodes[i][j].target = true;
    }
  } else {
    if (nodeType == "start") {
      document.getElementById(current).classList.remove("start");
      nodes[i][j].start = false;
      current = next;
      window.startNode.current = current;
      window.startNode.next = next;

      var startIndexes = current.split("-");
      i = startIndexes[0];
      j = startIndexes[1];
      nodes[i][j].start = true;
      document.getElementById(current).classList.add("start");
    } else if (nodeType == "target") {
      document.getElementById(current).classList.remove("target");
      nodes[i][j].target = false;
      current = next;
      window.targetNode.current = current;
      window.targetNode.next = next;

      var startIndexes = current.split("-");
      i = startIndexes[0];
      j = startIndexes[1];
      nodes[i][j].target = true;
      document.getElementById(current).classList.add("target");
    }
  }
};

export { setNode };
