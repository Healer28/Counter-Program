let count = 0;
document.getElementById("Decrease").onclick = function () {
  --count;
  document.getElementById("number").textContent = count;
};
document.getElementById("Increase").onclick = function () {
  ++count;
  document.getElementById("number").textContent = count;
};
document.getElementById("reset").onclick = function () {
  count = 0;
  document.getElementById("number").textContent = count;
};
