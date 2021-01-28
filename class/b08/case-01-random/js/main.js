const QUOTES = ['HTML CSS', 'Javascript', 'NodeJs', 'PHP', 'Python'];
const TIME_REPLAY = 1000;

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function showQuote() {
    let quote = QUOTES[getRandom(0, QUOTES.length - 1)];
    document.querySelector('.quote').textContent = quote;
}

showQuote();

setInterval(function() {
    showQuote();
}, TIME_REPLAY);





