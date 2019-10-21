function creategrid() {
  var height = document.getElementById("grid").clientHeight;
  var width = document.getElementById("grid").clientWidth;
  var spotHeight = Math.floor((height - 26) / 25);
  var spotWidth = Math.floor(width / 75);
  var tableDiv = document.getElementById("grid");
  var table = document.createElement("table");
  var tbody = document.createElement("tbody");

  for (var row = 0; row < 25; row++) {
    var trow = document.createElement("tr");
    for (var column = 0; column < 75; column++) {
      var node = document.createElement("td");
      node.style.width = spotWidth + "px";
      node.style.height = spotHeight + "px";
      // node.className += row + "-" + column;
      node.setAttribute("id", row + "-" + column);
      trow.appendChild(node);
    }
    tbody.appendChild(trow);
  }
  table.appendChild(tbody);

  tableDiv.appendChild(table);
}

module.exports = creategrid;
