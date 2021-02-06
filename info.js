let areaContent = document.querySelector("#textarena");

let data = {
    sentences:0,
    words:0,
    alphabets:0,
    consonants:0,
    vowels:0,
    uppercase:0,
    lowercase:0,
    digits:0,
    spaces:0,
    stars:0,
};

let text = null;
const findLength = (item) => (item == null? 0 : item.length);

const setText = () => {
    text = areaContent.value;

    if(text != null) {
        data.sentences = findLength(text.match(/\056/gi));
        data.words = findLength(text.match(/[a-z]+/gi));
        data.alphabets = findLength(text.match(/[A-Z]/gi));
        data.consonants = findLength(text.match(/[bcdfghjklmnpqrstvwxyz]/gi));
        data.vowels = findLength(text.match(/[aeiou]/gi));
        data.uppercase = findLength(text.match(/[A-Z]/g));
        data.lowercase = findLength(text.match(/[a-z]/g));
        data.digits = findLength(text.match(/\d/g));
        data.spaces = findLength(text.match(/\s/g));
        data.stars = findLength(text.match(/\052/gi));
    }
    localStorage.setItem("data", JSON.stringify(data));
    window.location = "stats.html";
}

const getData = () => {
    return JSON.parse(localStorage.getItem("data"));
}

const showData = () => {
    let data = getData();
    let htmlContent = "";

    for(item in data) {
        htmlContent += `<div class="main">
            <p class="para1">${data[item]}</p>
            <p class="para2">${item}</p>
        </div>`;
    }
    document.querySelector(".containers").innerHTML = htmlContent;
}