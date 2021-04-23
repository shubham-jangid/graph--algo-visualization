import { drawboard } from "./browser/board.js";
import { nodes, createNodes } from "./browser/nodes.js";
import { setNode } from "./browser/setNode.js";
import { wallListener } from "./browser/wallListener.js";
import { moveNode } from "./browser/moveNode.js";
import { algoListner } from "./browser/AlgoListner.js";
import { removeWalls } from "./browser/removeWalls.js";
import { resetBoard } from "./browser/resetBoard.js";
window.rows = 0;
window.columns = 0;
window.speed = 5;

window.startNode = {
  current: "10-17",
  next: null,
};
window.targetNode = {
  current: "25-45",
  next: null,
};

drawboard();
createNodes();
setNode(window.startNode.current, window.startNode.next, "start");
setNode(window.targetNode.current, window.targetNode.next, "target");
// console.log(nodes);
moveNode();
wallListener();
algoListner();
removeWalls();
resetBoard();

console.log("jldkf");
