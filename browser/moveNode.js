import { setNode } from "./setNode.js";
function moveNode() {
  var gridUi = document.getElementById("grid");
  var nodeType = "";
  var elist = [];
  var isMouseDown = false;

  gridUi.addEventListener("mouseup", () => {
    isMouseDown = false;
    elist.length = 0;
  });

  gridUi.addEventListener("mousedown", (e) => {
    var id = e.target.id;
    var cell = document.getElementById(id);
    console.log(cell.classList);
    nodeType = cell.classList.value;
    console.log(nodeType);

    if (nodeType == "start" || nodeType == "target") {
      isMouseDown = true;
      elist.push(id);
    }
  });

  gridUi.addEventListener("mouseover", (e) => {
    if (isMouseDown) {
      var id = e.target.id;
      elist.push(id);
      var current = elist.shift();
      var next = elist[0];
      console.log(isMouseDown);

      setNode(current, next, nodeType);

      // document.getElementById(startingNode).classList.remove("wall");
    }
  });
}

module.exports = moveNode;
