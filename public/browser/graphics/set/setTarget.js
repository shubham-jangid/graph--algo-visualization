const grid = require("../../grid");
var target = require("../../golbal_target");

var setTarget = function (current, next) {
  var startIndexes = current.split("-");
  var i = startIndexes[0];
  var j = startIndexes[1];

  if (next == null) {
    document.getElementById(current).classList.add("target");
    grid[i][j].start = true;
  } else {
    document.getElementById(current).classList.remove("target");
    grid[i][j].start = false;
    current = next;
    target.current = current;
    target.next = next;

    var startIndexes = current.split("-");
    i = startIndexes[0];
    j = startIndexes[1];
    grid[i][j].start = true;
    document.getElementById(current).classList.add("target");
  }
};

module.exports = setTarget;
