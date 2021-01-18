// Lấy danh sách tất cả các elements có class là "box"
let eleBoxes = document.getElementsByClassName("box");

// Tìm độ dài của danh sách
let arrLength = eleBoxes.length;

// Duyệt qua từng box
let maxHeight = 0;
for (let i = 0; i < arrLength; i++) {
    // clientHeight vs offsetHeight
    let height = eleBoxes[i].offsetHeight;
    if (height > maxHeight) {
        maxHeight = height;
    }
}

for (let i = 0; i < arrLength; i++) {
    eleBoxes[i].style.height = maxHeight + 'px';
    // let backgroundColor = '';
    // if (i % 2 == 0) {
    //     backgroundColor = 'gold';
    // } else {
    //     backgroundColor = 'red';
    // }
    let backgroundColor = 'red';
    if (i % 2 == 0) {
        backgroundColor = 'gold';
    }
    // background-color => backgroundColor
    eleBoxes[i].style.backgroundColor = backgroundColor;
}