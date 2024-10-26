// список = [имя, Аватарка, Текст отзыва]
reviews = ['Даниил Коваленко', '../images/reviews/numero-uno-man-wtf-pinkman.png', 'Благодарю за написание скрипта! Теперь выполняю рутинные задачи не своими руками. Сделал быстро, просто, правки были приняты и услышаны. Рекомендую к сотрудничеству)'];

function review_card_gen(reviews) {
    reviews.forEach => 
}

function addreview(fullname, pfp, reviewcontent) 
{
    var div = document.createElement('div');
    div.setAttribute('class', 'review');
    div.innerHTML = `
        <div id="avatar">
            <img src="${pfp}" alt="Аватарка пользователя ${fullname}">
        </div>
        
        <a id=review-text>${reviewcontent}</a>
    `
}