//DOM manipulation
let container = document.getElementById('container');
let paragraph = document.createElement('p');
paragraph.innerText = 'this is a new paragraph';
container.appendChild(paragraph);


let button = document.getElementById('btn');
button.addEventListener('click', () => {
    paragraph.innerText = 'another paragraph';
});

