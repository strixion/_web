document.body.onload = scrr();

window.onscroll = scrr();
setTimeout(function () {
  document.body.classList.add("body_visible");
}, 200);
function scrr() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  console.log(scrollTop);
}
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
