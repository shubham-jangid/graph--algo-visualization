import { bfs } from "./algorithms/bfs.js";
import { dfs } from "./algorithms/dfs.js";

var algorithm = undefined;

const algoListner = function () {
  document
    .getElementById("visualize-btn")
    .addEventListener("mousedown", (e) => {
      var selectedOption, st;
      selectedOption = document.getElementById("Algorithms").selectedIndex;

      algorithm = document.getElementById("Algorithms").options[selectedOption]
        .value;

      if (algorithm === "undefined") {
        window.alert("chooes the algorithm");
      } else {
        switch (algorithm) {
          case "Breadth-first":
            bfs();
            break;
          case "Depth-first":
            dfs();
            break;
        }
      }
    });
};
export { algoListner };
