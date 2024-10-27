document.body.onload = MembersApp();
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

function MembersApp() {
  //список челов= [ИМЯ ФАМИЛИЯ      ДОЛЖНОСТЬ          АДРЕС-КАРТИНКИ],
  var members = [
    ["Родион Бушуев", "Teamlead, Fullstack", "./images/member1.png"],
    ["Денис Астапенко", "Frontend", "./images/member3.jpg"],
    ["Руслан Маннанов", "Backend", "./images/member4.png"],
    ["Ксения Попкова", "UX-UI designer", "./images/member2.png"],
    ["Дмитрий Елькин", "Marketer", "./images/member5.jpeg"],
  ];

  var howmany_members = members.length;
  document.getElementById("people").style.width = howmany_members * 300 + "px";
  console.log(document.getElementById("people").style.width);
  // пробегаем по каждому челу и делаем карточки на странице
  members.forEach((element) => addMember.apply(null, element));
}
function addMember(nme, imgg, rolee) {
  var div = document.createElement("div");
  div.setAttribute("class", "team-member");
  div.setAttribute("data-name", nme);
  div.setAttribute("data-img", imgg);
  div.setAttribute("data-role", rolee);
  div.innerHTML = `
      <div class="card">
          <img src=${rolee} alt=${nme}/>
          <h3>${nme}</h3>
      </div>
      `;
  console.log(imgg);
  document.getElementById("people").appendChild(div);
}

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
    const imageSrc = member.getAttribute("data-role");
    const name = member.getAttribute("data-name");
    const role = member.getAttribute("data-img");
    openModal(imageSrc, name, role);
  });
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
