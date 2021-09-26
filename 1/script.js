'use strict';
let i = 3;
document.querySelector('.box').addEventListener('mouseover', function () {
    if ((i % 3) === 0) { event.target.style.backgroundColor = 'red'; }
    else if ((i % 3) === 1) { event.target.style.backgroundColor = 'yellow'; }
    else if ((i % 3) === 2) { event.target.style.backgroundColor = 'green'; }
    console.log(`mouseover i=${i}, ${i} % 2= ${(i % 2)}`);
    i++;
})
document.querySelector('.box').addEventListener('mouseout', function () {
    event.target.style.backgroundColor = 'darkmagenta';
    console.log(`mouseout i=${i}, ${i} % 2= ${(i % 2)}`);
})
