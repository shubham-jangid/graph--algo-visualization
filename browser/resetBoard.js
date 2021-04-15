import { nodes } from "./nodes.js";

const resetBoard = function () {
  document.getElementById("resetBoard").addEventListener("mousedown", () => {
    for (var i = 0; i < window.rows; i++) {
      for (var j = 0; j < window.columns; j++) {
        var id = i + "-" + j;
        document
          .getElementById(id)
          .classList.remove("wall", "visited", "path", "instantvisited");
        nodes[i][j].wall = false;
        nodes[i][j].visited = false;
      }
    }
  });
};

export { resetBoard };
