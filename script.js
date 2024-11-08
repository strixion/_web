// Получаем элементы DOM
const container = document.querySelector(".fixed-container");
const firstText = document.querySelector(".first-text");
const secondText = document.querySelector(".second-text");
const maincontent = document.querySelector(".three-cards");
maincontent.classList.toggle("fixed", true);

let isScrolling = false;
let lastScrollTop = 0;
let checkpoint = false;
let isAnimating = false; // Флаг для отслеживания состояния анимации

// Функция для плавного скролла
function smoothScrollTo(targetPosition, duration) {
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
    else isAnimating = false; // Сброс флага после завершения анимации
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  isAnimating = true; // Установка флага перед началом анимации
  requestAnimationFrame(animation);
}

window.addEventListener("scroll", () => {
  if (isScrolling || isAnimating) return; // Если уже происходит скролл или анимация, не выполняем дополнительные действия

  isScrolling = true;

  const scrollPosition = window.scrollY || window.pageYOffset;
  const documentHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercentage = (scrollPosition / documentHeight) * 100;

  if (Math.floor(scrollPercentage) === 30) {
    smoothScrollTo(documentHeight * 0.31, 500); // Плавный скролл на 31%
  }

  if (
    scrollPosition >= documentHeight * 0.3 &&
    scrollPosition < documentHeight * 0.6
  ) {
    firstText.classList.remove("show");
    firstText.classList.add("hide");
    container.classList.toggle("gradient-size", false);
    secondText.classList.remove("hide");
    secondText.classList.add("show");
  } else if (scrollPosition < documentHeight * 0.3) {
    firstText.classList.remove("hide");
    firstText.classList.add("show");
    container.classList.toggle("gradient-size", true);
    secondText.classList.remove("show");
    secondText.classList.add("hide");
  }

  if (scrollPosition <= documentHeight * 0.6) {
    container.classList.toggle("fade-out", false);
    container.classList.toggle("fade-in", true);
    maincontent.classList.toggle("fixed", true);
  } else {
    if (!checkpoint) {
      smoothScrollTo(maincontent.offsetTop, 500); // Плавный скролл к maincontent
      checkpoint = true;
    }
    container.classList.toggle("fade-in", false);
    container.classList.toggle("fade-out", true);
    maincontent.classList.toggle("fixed", false);
  }

  setTimeout(() => {
    isScrolling = false;
  }, 100);
});

// Обработчик события wheel для плавного скролла
document.addEventListener(
  "wheel",
  function (event) {
    event.preventDefault();

    const deltaY = event.deltaY / 3;
    smoothScrollTo(window.scrollY + deltaY, 100); // Плавный скролл с замедлением
  },
  { passive: false }
);

window.onload = function () {
  window.scrollTo(0, 0);
};

document.body.onload = scrr();

window.onscroll = scrr();
setTimeout(function () {
  document.body.classList.add("body_visible");
}, 200);

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

function scrr() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  console.log(scrollTop);
}

// Функция для медленного скролла вниз
function changeBoxShadow() {
  const boxShadowDiv = document.getElementById("box-shadow-div");
  boxShadowDiv.style.boxShadow = "0 0 60px 60px rgba(210, 137, 208, 0.1)";
}

function resetBoxShadow() {
  const boxShadowDiv = document.getElementById("box-shadow-div");
  // Сбросим box-shadow до первоначального значения
  boxShadowDiv.style.boxShadow = ""; // Или любое другое начальное значение
}
