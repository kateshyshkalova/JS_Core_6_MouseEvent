'use strict';

let li = document.getElementsByClassName('color');
for (let i = 0; i < li.length; i++) {
    li[i].onclick = function (j) {
        return function () {
            li[j].style.color = li[j].textContent;
        }
    }(i);
}
