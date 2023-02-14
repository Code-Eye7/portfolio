var slide = document.getElementById('slide');
var upbtn = document.getElementById('uparrow');
var downbtn = document.getElementById('downarrow');

let x = 0;
upbtn.onclick = function () {
    if (x > "-600") {
        x = x - 300;
        slide.style.top = x + "px"
    }
}

downbtn.onclick = function () {
    if (x < 0) {
        x = x + 300;
        slide.style.top = x + "px"
    }
}