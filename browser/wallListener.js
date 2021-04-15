import { nodes } from "./nodes.js";

function wallListener() {
  var gridUI = document.getElementById("grid");
  var isMouseDown = false;
  var id = "";

  gridUI.addEventListener("mouseup", () => {
    isMouseDown = false;
  });

  gridUI.addEventListener("mousedown", (e) => {
    isMouseDown = true;
    id = e.target.id;

    var arr = id.split("-");

    if (
      nodes[arr[0]][arr[1]].start != true &&
      nodes[arr[0]][arr[1]].target != true
    ) {
      if (nodes[arr[0]][arr[1]].wall != true) {
        nodes[arr[0]][arr[1]].wall = true;
        document.getElementById(id).classList.add("wall");
      } else {
        nodes[arr[0]][arr[1]].wall = false;
        document.getElementById(id).classList.remove("wall");
      }
    }
  });

  gridUI.addEventListener("mouseover", (e) => {
    if (isMouseDown) {
      id = e.target.id;
      var arr = id.split("-");

      if (
        nodes[arr[0]][arr[1]].start != true &&
        nodes[arr[0]][arr[1]].target != true
      ) {
        if (nodes[arr[0]][arr[1]].wall != true) {
          nodes[arr[0]][arr[1]].wall = true;
          document.getElementById(id).classList.add("wall");
        } else {
          nodes[arr[0]][arr[1]].wall = false;
          document.getElementById(id).classList.remove("wall");
        }
      }
    }
  });
}

export { wallListener };
