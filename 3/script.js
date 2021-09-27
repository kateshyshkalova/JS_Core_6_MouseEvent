'use strict';
let box = document.getElementsByClassName("box");
console.log(box);

function backImage() {
    if (event.target.className == 'box') {
        let link = prompt("Введіть url картинки");
        console.log(link);
        event.target.style.backgroundImage = `url('${link}')`;
        // event.target.style.backgroundImage.url = link;
    }
}
