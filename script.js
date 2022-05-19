'use scrict'
function checker() {
let check = confirm('Would you like a cookie?') 

if(check === false) {
    
    alert('Please close the browser, thank you for visiting code:cookies')
} 
}


function userInput() {
let cookie = prompt('What is your favorite ice-creame between vanilla, chocolate and strawberry')

let names = prompt('What is your name?');

if (cookie == 'vanilla') {
    document.write(`Hello, ${names}. Your bag full of ${cookie} cookies is on it's way.`)
} else if (cookie == 'chocolate') {
    document.write(`Hello, ${names}. Your bag full of ${cookie} cookies is on it's way.`)
} else if (cookie == 'strawberry' || cookie == 'strawberries') {
    document.write(`Hello, ${names}. Your bag full of ${cookie} cookies is on it's way.`)
} else {
    document.write(`Cookie monster is coming to get you!! Muhahaha`)
}
}
