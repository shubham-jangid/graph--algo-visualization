(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function createGrid() {
  var height = document.getElementById("grid").clientHeight;
  var width = document.getElementById("grid").clientWidth;
  var spotHeight = Math.floor((height - 26) / 25);
  var spotWidth = Math.floor(width / 75);
  console.log(height, width);
  var tableDiv = document.getElementById("grid");
  var table = document.createElement("table");
  var tbody = document.createElement("tbody");

  for (var row = 0; row < 25; row++) {
    var trow = document.createElement("tr");
    for (var column = 0; column < 75; column++) {
      var tcolm = document.createElement("td");
      tcolm.style.width = spotWidth + "px";
      tcolm.style.height = spotHeight + "px";
      tcolm.className += row + "-" + column;
      trow.appendChild(tcolm);
    }
    tbody.appendChild(trow);
  }
  table.appendChild(tbody);

  tableDiv.appendChild(table);
})();

console.log("fl;skdajf");

},{}]},{},[1]);
