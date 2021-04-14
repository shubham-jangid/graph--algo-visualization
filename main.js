import { board } from "./browser/board.js";
import { nodes } from "./browser/nodes.js";
console.log(nodes);

window.startNode = {
  current: "2-3",
  next: null,
};
window.targetNode = {
  current: "4-15",
  next: null,
};

board();
