document.body.onload = randcol();
document.body.onload = ktrue();
document.body.onload = scrr();

window.onscroll = scrr();
setTimeout(function () {
  document.body.classList.add("body_visible");
}, 200);
function scrr() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  console.log(scrollTop);
}
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});
document.addEventListener("keydown", function (e) {
  if (e.ctrlKey && (e.key === "c" || e.key === "x")) {
    e.preventDefault();
  }
});

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

function randcol() {
  var_colors = [
    "#424242",
    "#626262",
    "525252",
    "#323232",
    "#727272",
    "#828282",
    "#474747",
  ];
  card1 = document.getElementById("card1").style.backgroundColor =
    var_colors[Math.floor(Math.random() * var_colors.length)];
  card2 = document.getElementById("card2").style.backgroundColor =
    var_colors[Math.floor(Math.random() * var_colors.length)];
  card3 = document.getElementById("card3").style.backgroundColor =
    var_colors[Math.floor(Math.random() * var_colors.length)];
  card4 = document.getElementById("card4").style.backgroundColor =
    var_colors[Math.floor(Math.random() * var_colors.length)];
  card5 = document.getElementById("card5").style.backgroundColor =
    var_colors[Math.floor(Math.random() * var_colors.length)];
}

function ktrue() {
  k = true;
}
function previewchart1(k) {
  console.log(k);
  thiscanvas = document.getElementById("canvas1");
  if (k == true) {
    thiscanvas.style = "transform: scale(2);";
    k == false;
  } else {
    thiscanvas.style = "transform: scale(1);";
    k == true;
  }
}
window.addEventListener("scroll", () => {
  const features = document.querySelectorAll(".feature");
  const screenPosition = window.innerHeight / 1.3;

  features.forEach((feature) => {
    const featurePosition = feature.getBoundingClientRect().top;
    if (featurePosition < screenPosition) {
      feature.classList.add("active");
    }
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const modal = document.getElementById("modal");
const closeModal = document.querySelector(".close");
const modalImage = document.getElementById("modal-image");
const modalName = document.getElementById("modal-name");
const modalRole = document.getElementById("modal-role");

function openModal(imageSrc, name, role) {
  modalImage.src = imageSrc;
  modalName.textContent = name;
  modalRole.textContent = role;
  modal.style.display = "flex";
}

function closeModalFunction() {
  modal.style.display = "none";
}

closeModal.addEventListener("click", closeModalFunction);

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    closeModalFunction();
  }
});

document.querySelectorAll(".team-member").forEach((member) => {
  member.addEventListener("click", () => {
    const imageSrc = member.getAttribute("data-img");
    const name = member.getAttribute("data-name");
    const role = member.getAttribute("data-role");
    openModal(imageSrc, name, role);
  });
});

const stats = document.querySelectorAll(".stat-number");
const speed = 200; // Скорость анимации

stats.forEach((stat) => {
  const updateCount = () => {
    const target = +stat.getAttribute("data-target");
    const count = +stat.innerText;

    const increment = target / speed;

    if (count < target) {
      stat.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 10);
    } else {
      stat.innerText = target;
    }
  };
  updateCount();
});

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  let lastScrollY = window.pageYOffset;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.pageYOffset;

    if (lastScrollY > currentScrollY) {
      // Скролл вверх
      header.classList.add("shrink");
    } else {
      // Скролл вниз
      header.classList.remove("shrink");
    }

    lastScrollY = currentScrollY;
  });
});

var item = document.querySelector("#bullet-cursor");

function You_are_here() {
  here = document.getElementById("here-man");
  here.innerText = "Уже здесь!";
}

block.onmousemove = function (e) {
  item.style.position = "fixed";
  item.style.left = e.clientX + -20 + "px";
  item.style.top = e.clientY + -20 + "px";
};
