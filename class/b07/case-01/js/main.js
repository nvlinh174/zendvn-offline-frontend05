let height = 5;
let space = '+';

// 0+1+2+3+4+5
// 1+2+3+4+5
// 2+3+4+5
// 3+4+5
// 4+5
// 5

let result = '';
for (let i = 0; i <= height; i++) {
    for (let j = i; j <= height; j++) {
        if (j == height) {
            result += j;
        } else {
            result += (j + space);
        }
    }
    result += '<br>';
}

 






document.write(result);
