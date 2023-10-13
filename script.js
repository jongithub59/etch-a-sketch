let size = 16; //default size for grid 16x16 
const container = document.getElementById('container');
const eraseButton = document.getElementById('erase-button');
const normalButton = document.getElementById('normal-button');
const largeButton = document.getElementById('large-button');
eraseButton.addEventListener('click', clearGrid);
normalButton.addEventListener('click', normalSize);
largeButton.addEventListener('click', largeSize);

function createGrid(size) {
    container.innerHTML = "";
    for (let i = 0; i < size * size; i++) { // size is multiplied to get the actual amount os squares to fil the grid
        const square = document.createElement('div');
        square.classList.add('square');
        if (size == 32) {
            square.style.width = square.style.height = `12.5px`; //makes grid elements smaller if more squares are made
        }
        square.addEventListener('mouseover', (e) => {
            // color change is done by changing it to a class with a grey style 
            e.target.classList.remove('square');
            e.target.classList.add('greySquare');
        });
        container.appendChild(square);
    }
}
   
function clearGrid() {
    container.innerHTML = "";
    createGrid(size);
}

function normalSize() {
    let size = 16;
    clearGrid(size);
}

function largeSize() {
    let size = 32;
    createGrid(size);
}

createGrid(size);
