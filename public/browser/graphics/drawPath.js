const wall = require("./../graphics/wall");

function drawPath(start, end, visitedArray) {
  var backwardPath = [];

  backwardPath.push(end);
  console.log(end);

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
  console.log(forwardPath.length);
  for (var t = 0; t < forwardPath.length + visitedArray.length; t++) {
    if (t < visitedArray.length) {
      (function(t) {
        setTimeout(function() {
          wall.draw(visitedArray[vi].i + "-" + visitedArray[vi].j, "visited");
          vi++;
        }, 5 * t);
      })(t);
    } else {
      (function(i) {
        setTimeout(function() {
          wall.draw(forwardPath[pi].i + "-" + forwardPath[pi].j, "path");
          pi++;
        }, 5 * t);
      })(t);
    }
  }
  console.log(t);
}
module.exports = drawPath;
