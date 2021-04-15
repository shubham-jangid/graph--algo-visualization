function drawboard() {
  let navbarHeight = document.getElementById("navbar").clientHeight;
  let width = window.innerWidth;
  let height = window.innerHeight - navbarHeight - 20;
  window.rows = Math.floor(height / 21);
  window.columns = Math.floor(width / 21);
  let tableDiv = document.getElementById("grid");
  let table = document.createElement("table");
  let tbody = document.createElement("tbody");
  // drawing the board cellss
  for (let row = 0; row < rows; row++) {
    let trow = document.createElement("tr");
    for (let column = 0; column < columns; column++) {
      let Uinode = document.createElement("td");
      Uinode.style.width = 20 + "px";
      Uinode.style.height = 20 + "px";
      Uinode.setAttribute("id", row + "-" + column);
      trow.appendChild(Uinode);
    }
    tbody.appendChild(trow);
  }
  table.appendChild(tbody);
  tableDiv.appendChild(table);
}

export { drawboard };
