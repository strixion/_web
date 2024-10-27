var bsDiv = document.getElementById("box-shadow-div");
var x, y;
window.addEventListener(
  "mousemove",
  function (event) {
    x = event.clientX;
    y = event.clientY;
    if (typeof x !== "undefined") {
      bsDiv.style.left = x + "px";
      bsDiv.style.top = y + "px";
    }
  },
  false
);
