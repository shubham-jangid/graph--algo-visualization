(function createGrid() {
  var height = document.getElementById("grid").clientHeight;
  var width = document.getElementById("grid").clientWidth;
  var spotHeight = Math.floor((height - 26) / 25)
  var spotWidth = Math.floor(width / 75)
  console.log(height, width);
  var tableDiv = document.getElementById("grid")
  var table = document.createElement("table")
  var tbody = document.createElement("tbody")


  for (var row = 0; row < 25; row++) {
    var trow = document.createElement("tr");
    for (var column = 0; column < 75; column++) {
      var tcolm = document.createElement("td");
      tcolm.style.width = spotWidth + "px"
      tcolm.style.height = spotHeight + "px"
      tcolm.className += row + "-" + column;
      trow.appendChild(tcolm)

    }
    tbody.appendChild(trow)
  }
  table.appendChild(tbody);

  tableDiv.appendChild(table)
}());

