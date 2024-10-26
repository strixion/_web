document.body.onload = MembersApp();
document.body.onload = scrr();

window.onscroll = scrr();
setTimeout(function(){
	document.body.classList.add('body_visible');
}, 200);


function MembersApp() {
  //список челов= [ИМЯ ФАМИЛИЯ      ДОЛЖНОСТЬ          АДРЕС-КАРТИНКИ],
    var members = [
      ['Денис Астапенко', 'Фронтенд', "./images/member3.jpg"],
      ['Родион Бушуев', 'Тим-лид', "./images/member1.png"],
      ['Ксения Попкова', 'UX-UI дизайнер', "./images/member2.png"],
      ['Дмитрий Елькин', 'Маркетолог', "./images/member5.jpeg"],
      ['Руслан Маннанов', 'Бэкэнд', "./images/member4.png"]
                  ];
    
    var howmany_members = members.length;
    document.getElementById('people').style.width = (howmany_members * 300) + "px";
    console.log(document.getElementById('people').style.width);
    // пробегаем по каждому челу и делаем карточки на странице
    members.forEach((element) => addMember.apply(null, element));
}
function addMember(nme, imgg, rolee) 
{
    var div = document.createElement('div');
    div.setAttribute('class', 'team-member');
    div.setAttribute('data-name', nme);
    div.setAttribute('data-img', imgg);
    div.setAttribute('data-role', rolee);
    div.innerHTML = `
    <div class="card">
        <img src=${rolee} alt=${nme}/>
        <h3>${nme}</h3>
    </div>
    `;
    console.log(imgg);
    document.getElementById('people').appendChild(div);

}

const modal = document.getElementById('modal');
const closeModal = document.querySelector('.close');
const modalImage = document.getElementById('modal-image');
const modalName = document.getElementById('modal-name');
const modalRole = document.getElementById('modal-role');

function openModal(imageSrc, name, role) {
  modalImage.src = imageSrc;
  modalName.textContent = name;
  modalRole.textContent = role;
  modal.style.display = 'flex';
}
function closeModalFunction() {
    modal.style.display = 'none';
  }
  
  closeModal.addEventListener('click', closeModalFunction);
window.addEventListener('click', function(event) {
    if (event.target === modal) {
      closeModalFunction();
    }
  });

document.querySelectorAll('.team-member').forEach(member => {
    member.addEventListener('click', () => {
      const imageSrc = member.getAttribute('data-role');
      const name = member.getAttribute('data-name');
      const role = member.getAttribute('data-img');
      openModal(imageSrc, name, role);
    });
  });

  var bsDiv = document.getElementById("box-shadow-div");
  var x, y;
  window.addEventListener('mousemove', function(event){
    x = event.clientX;
    y = event.clientY;
    if ( typeof x !== 'undefined' ){
      bsDiv.style.left = x + "px";
      bsDiv.style.top = y + "px";
    }
  }, false);
function scrr() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  console.log(scrollTop);
}