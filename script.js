// Получаем элементы DOM
const container = document.querySelector(".fixed-container");
const firstText = document.querySelector(".first-text");
const secondText = document.querySelector(".second-text");
const maincontent = document.querySelector(".content");
maincontent.classList.toggle("fixed", true);

let lastScrollTop = 0; // Переменная для хранения предыдущей позиции скролла

let checkpoint = false;
// Функция для отслеживания положения скролла
window.addEventListener("scroll", () => {
  // Определяем текущую позицию скролла
  const scrollPosition = window.scrollY || window.pageYOffset;

  // Высота документа минус высота окна браузера
  const documentHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  // Рассчитываем процент прокрутки
  const scrollPercentage = (scrollPosition / documentHeight) * 100;

  // Проверяем, достигли ли мы 33%
  if (Math.floor(scrollPercentage) === 20) {
    // Плавно прокручиваемся на 34%
    window.scrollTo({
      top: documentHeight * 0.201,
      behavior: "smooth",
    });
  }

  // Проверяем, достигли ли мы 66%

  // Остальная логика остается без изменений
  if (
    scrollPosition >= documentHeight * 0.2 &&
    scrollPosition < documentHeight * 0.4
  ) {
    // Скрыть первый текст и показать второй
    firstText.classList.remove("show");
    firstText.classList.add("hide");
    container.classList.toggle("gradient-size", false);
    secondText.classList.remove("hide");
    secondText.classList.add("show");
  } else if (scrollPosition < documentHeight * 0.2) {
    // Показать первый текст и скрыть второй
    firstText.classList.remove("hide");
    firstText.classList.add("show");
    container.classList.toggle("gradient-size", true);
    secondText.classList.remove("show");
    secondText.classList.add("hide");
  }
  if (scrollPosition <= documentHeight * 0.4) {
    container.classList.toggle("fade-out", false);
    container.classList.toggle("fade-in", true);
    maincontent.classList.toggle("fixed", true);
  } else {
    container.classList.toggle("fade-in", false);
    container.classList.toggle("fade-out", true);
    maincontent.classList.toggle("fixed", false);
  }
});

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
