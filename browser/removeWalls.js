import { nodes } from "./nodes.js";

const removeWalls = function () {
  document.getElementById("removeWalls").addEventListener("mousedown", () => {
    console.log("removeWalls");
    for (var i = 0; i < window.rows; i++) {
      for (var j = 0; j < window.columns; j++) {
        if (nodes[i][j].wall) {
          var id = i + "-" + j;
          document.getElementById(id).classList.remove("wall");
        }

        nodes[i][j].wall = false;
      }
    }
  });
};

export { removeWalls };
