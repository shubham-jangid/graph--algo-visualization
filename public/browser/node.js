function Node(i, j) {
  this.i = i;
  this.y = j;

  this.show = function() {
    document.getElementById(i + "-" + j).node.className += "wall";
  };
}

module.exports = Node;
