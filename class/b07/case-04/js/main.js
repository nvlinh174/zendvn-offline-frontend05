// <h1 id="box">Lập trình frontend tại ZendVN hướng dẫn frontend từ a đến z. frontend không khó để học!</h1>
// - Lấy được thẻ h1
// - Lấy nội dung của thẻ h1
// - Thay thế 'frontend' thành '<span class="hightlight">frontend</span>'
// - Cập nhật lại nội dung thẻ h1

let keyword = 'frontend';
// insensitive
let pattern = /frontend/ig;

let box = document.getElementById('box');
let str = box.textContent;

console.log(str);

// str = str.replaceAll(pattern, `<span class="hightlight">${keyword}</span>`);

// arrow function
str = str.replaceAll(pattern, (searchResult) => {
    return `<span class="hightlight">${searchResult}</span>`;
});

box.innerHTML = str;
