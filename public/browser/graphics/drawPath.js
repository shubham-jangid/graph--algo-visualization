const animation = require("./animation");

function drawPath(start, end, visitedArray) {
  var backwardPath = [];

  backwardPath.push(end);

  console.log(end);
  var next = end.previous;
  console.log(next);
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
        }, 5 * t);
      })(t);
    } else {
      (function (i) {
        setTimeout(function () {
          animation(forwardPath[pi].i + "-" + forwardPath[pi].j, "path");
          pi++;
        }, 5 * t);
      })(t);
    }
  }
}
module.exports = drawPath;
