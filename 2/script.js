'use strict';
let ask = document.getElementById('box');
document.querySelector('.box').addEventListener('mouseover', function () {
    event.target.style.backgroundColor = 'yellow';
    event.target.style.borderColor = 'green';
    event.target.textContent = 'Хочеш знати який?';
    event.target.style.color = 'blue';
})
document.querySelector('.box').addEventListener('mousedown', function () {
    event.target.style.backgroundColor = 'black';
    event.target.style.borderColor = 'yellow';
    event.target.textContent = 'А я тобі не скажу!';
    event.target.style.color = 'white';
})
document.querySelector('.box').addEventListener('mouseup', function () {
    event.target.style.backgroundColor = 'yellow';
    event.target.style.borderColor = 'green';
    event.target.textContent = 'Хочеш знати який?';
    event.target.style.color = 'blue';
})
document.querySelector('.box').addEventListener('mouseout', function () {
    event.target.style.backgroundColor = 'darkmagenta';
    event.target.style.borderColor = 'orange';
    event.target.textContent = 'У мене є секрет!';
    event.target.style.color = 'black';
})
