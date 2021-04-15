function animation(id, path) {
  if (path == "visited") {
    document
      .getElementById(id)
      .classList.remove("wall", "visited", "path", "instantvisited");
    document.getElementById(id).classList.add(path, "instantvisited");
  } else {
    document
      .getElementById(id)
      .classList.remove("wall", "visited", "path", "instantvisited");
    document.getElementById(id).classList.add(path);
  }
}
export { animation };
