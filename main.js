"use strict";

const fruits = ['Banana', 'Apple', 'Orange', 'Lemon'];

let listTemplate = (item) => {

    if (item === 'Apple') {
        item = 'Only ' + item;
    }

    return `<li>${item}</li>`
}

let list = document.getElementById('array-list');
    list.innerHTML =  `
        ${fruits.map(listTemplate).join('')}
    `;
