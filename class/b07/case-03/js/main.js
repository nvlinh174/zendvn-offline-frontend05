let browser = window.navigator.userAgent;
// console.log(browser);

// if (browser.includes("Chrome")) {
//     document.body.style.backgroundColor = 'red';
// } else if (browser.includes("Firefox")) {
//     document.body.style.backgroundColor = 'green';
// }

let color = '';

if (is.chrome()) {
    color = 'red';
}

if (is.firefox()) {
    color = 'green';
}

document.body.style.backgroundColor = color;