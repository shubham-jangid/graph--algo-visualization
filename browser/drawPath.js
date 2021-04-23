import { animation } from "./animation.js";

function drawPath(start, end, visitedArray) {
  var backwardPath = [];

  backwardPath.push(end);

  var next = end.previous;

  while (next.previous != undefined) {
    backwardPath.push(next);
    next = next.previous;
  }
  backwardPath.push(start);

  var forwardPath = [];

  for (var i = backwardPath.length - 1; i >= 0; i--) {
    var j = 0;
    forwardPath.push(backwardPath[i]);
    j = j + 1;
  }

  var vi = 0,
    pi = 0;
  for (var t = 0; t < forwardPath.length + visitedArray.length; t++) {
    if (t < visitedArray.length) {
      (function (t) {
        setTimeout(function () {
          animation(visitedArray[vi].i + "-" + visitedArray[vi].j, "visited");
          vi++;
        }, window.speed * t);
      })(t);
    } else {
      (function (i) {
        setTimeout(function () {
          animation(forwardPath[pi].i + "-" + forwardPath[pi].j, "path");
          pi++;
        }, window.speed * t);
      })(t);
    }
  }
}
export { drawPath };
