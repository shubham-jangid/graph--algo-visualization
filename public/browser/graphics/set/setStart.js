const grid = require("../../grid");
var start = require("../../global_start");

var setStart = function (current, next) {
  var startIndexes = current.split("-");
  var i = startIndexes[0];
  var j = startIndexes[1];

  if (next == null) {
    document.getElementById(current).classList.add("start");
    grid[i][j].start = true;
  } else {
    document.getElementById(current).classList.remove("start");
    grid[i][j].start = false;
    current = next;
    start.current = current;
    start.next = next;

    var startIndexes = current.split("-");
    i = startIndexes[0];
    j = startIndexes[1];
    grid[i][j].start = true;
    document.getElementById(current).classList.add("start");
  }
};

module.exports = setStart;
