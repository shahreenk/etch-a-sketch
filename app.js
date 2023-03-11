let container = document.querySelector('.container');
let btn = document.querySelector('button');

function createGrid(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size ** 2; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
}

createGrid(16);

container.addEventListener('mouseover', function(e){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    e.target.style.backgroundColor = `#${randomColor}`;
})

btn.addEventListener('click', function(){
    let size;
    do {
        size = prompt("Enter a dimension size (max 100) for the grid");
    }
    while (size > 100);
    container.innerHTML = '';
    createGrid(size);
})

