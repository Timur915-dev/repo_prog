const links = document.querySelectorAll(".nav_links a");

links.forEach(link => {
    link.addEventListener("mouseenter", function () {
        link.style.color = "#f5b7b1";
    })
    link.addEventListener("mouseleave", () => {
        link.style.color = "white";
    })
})


const discoveries = {
    about: "Wonder Tour is committed to bringing our clients the best in value and quality travel arrangements. We are passionate about travel and sharing the world's wonders with you.",
    advantages: "We are proud to offer excellent quality and value for money in our tours, which give you the chance to experience your chosen destination in an authentic and exciting way.",
    mission: "Our mission is to provide the ultimate travel planning experience while becoming a one-stop shop for every travel service available in the industry",
}

const allTitles = document.querySelectorAll(".discoveries_block__title");
allTitles.forEach(function (currentTitle) {
    currentTitle.addEventListener("click", function () {
        let descSuptitle = document.querySelector(".discoveries_block__info-suptitle");
        let dataValue = currentTitle.getAttribute('data-title');
        descSuptitle.innerHTML = discoveries[dataValue];
    })
})



// Об'єкти 
// ключ: значення

const userInfo = {
    "name": "Alex",
    "age": 36,
    "height": 176,
    weight: 78,
    "region area": "Ukraine",
}

console.log(userInfo);
// Звернення до значення (ключа)
console.log(userInfo.name);
console.log(userInfo.age);
console.log(userInfo.weight);
console.log(userInfo["region area"]);
console.log(userInfo["height"]);

// Додати новий запис у об'єкт
userInfo.proffesion = "designer";
console.log(userInfo);



// Заняття №31
const person = {
    name: "Jack",
    age: 20,
    height: 178,
    hobby: "formula 1",
    region: "UK",

    // методи
    greeting() {
        alert(`Вітаємо тебе, ${this.name}, з ${this.region}!`);
        alert("Вітаємо тебе," + " " + this.name + " " + this.region + " !");
    }
}


person.massa = 74;
delete person.massa; // видалення властивості
person.age = 21;
console.log(person);
// виклик методу
// console.log(person.greeting());


// Клас - це конструктор для об'єктів

class CreateNewReview {
    constructor(userName, userText) {
        this.name = userName,
        this.review = userText
    }

    showNewReview() {
        let reviewsBlock = document.querySelector('.user_reviews');
        let element = `
        <div class="user_reviews__review">
            <img class="user_reviews__review-photo" src="./images/team_images/peterson.jpg">
            <p class="user_reviews__review-text">${this.review}</p>
            <h2 class="user_reviews__review-author">${this.name}</h2>
        </div>
        `;
        reviewsBlock.insertAdjacentHTML("beforeend", element);
    }
}


const btn = document.querySelector(".add_user_review__button");
btn.addEventListener("click", function () {
    let userNameData = document.querySelector(".add_user_review-name").value;
    let userTextData = document.querySelector(".add_user_review-text").value;

    let newReview = new CreateNewReview(userNameData, userTextData);
    newReview.showNewReview();
});



console.clear();
// Date in JS
const date = new Date; // зробили об'єкт часу
console.log(date);
console.log(date.getDate());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getSeconds());
console.log(date.getTime()); 


function setTime () {
    let date = new Date;
    let hours = document.querySelector(".date_hours");
    let minutes = document.querySelector(".date_minutes");
    let seconds = document.querySelector(".date_seconds");

    hours.innerHTML = date.getHours(); 
    minutes.innerHTML = date.getMinutes(); 
    seconds.innerHTML = date.getSeconds();
}

setInterval(setTime, 1000);