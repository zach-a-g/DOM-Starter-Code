'use strict';

const make = document.querySelector(`#make`);
const model = document.querySelector(`#model`);
const city = document.querySelector(`#city`);
const number = document.querySelector(`#number`);
const makeAnswer = document.querySelector(`#makeAnswer`);
const modelAnswer = document.querySelector(`#modelAnswer`);
const cityAnswer = document.querySelector(`#cityAnswer`);
const numberAnswer = document.querySelector(`#numberAnswer`);
const submitButton = document.querySelector(`#submitButton`);
const newArray = []


// Update one value at a time or everything at once
submitButton.addEventListener ('click', function() {
    makeAnswer.innerText = make.value;
})

submitButton.addEventListener ('click', function() {
    modelAnswer.innerText = model.value;
})

submitButton.addEventListener ('click', function() {
    cityAnswer.innerText = city.value;
})

submitButton.addEventListener ('click', function() {
    numberAnswer.innerText = number.value;
})




    
// Update all values at the same time

// submitButton.addEventListener('click', function() {
//     let input = document.querySelectorAll('input');
//     let placeholders = document.querySelectorAll('span');
//     input.forEach(function(input) {
//      newArray.push(input.value);   
//     })
//     placeholders.forEach(function(placeholder, index) {
//         placeholder.innerHTML = newArray[index];
//     })            
// })

