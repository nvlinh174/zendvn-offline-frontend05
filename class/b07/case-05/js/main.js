// let eleImages = document.getElementsByTagName('img');
// let eleImages = document.getElementsByClassName('img');

// for (let i = 0; i < eleImages.length; i++) {
//     console.log(eleImages[i].getAttribute('src'));
//     if (eleImages[i].getAttribute('src') == '') {
//         eleImages[i].setAttribute('src', 'images/default.jpg');
//     }
// }

// let eleImageNull = document.querySelectorAll('img[src=""]');

// for (let i = 0; i < eleImageNull.length; i++) {
//     eleImageNull[i].setAttribute('src', 'images/default.jpg');
// }

eleImageNull.forEach(function (item, index) {
    item.setAttribute('src', 'images/default.jpg');
});

eleImageNull.forEach((element, index) => {
    
});