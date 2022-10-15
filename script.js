'use srtict';

// Accessing HTML Class
const button = document.querySelector('.click');
const headin1 = document.querySelector('.heading');
const resetButton = document.getElementById('reset');


const details = (numbers)=>{
    const str = numbers + '';
    const text = str.slice(-4);
    return text.padStart(str.length, '*');
}

function displayNumber(){
    const ks = details(document.querySelector('.value').value);
    document.querySelector('.heading').textContent = ks;
    document.querySelector('body').style.backgroundColor = '#fff';
    document.querySelector('h1').style.color = 'black';
}

const resetFunct = () =>{
    document.querySelector('.value').value = ' ';
    document.querySelector('.heading').textContent = 'Enter your card number!';
    document.querySelector('body').style.backgroundColor = 'brown';
    document.querySelector('h1').style.color = '#fff';
}

// Submit button
button.addEventListener('click', function(){
   displayNumber();
})

// Reset button
resetButton.addEventListener('click', function(){ 
    resetFunct();
})
