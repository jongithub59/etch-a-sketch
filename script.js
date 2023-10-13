let size = 16;
const container = document.getElementById('container');
const eraseButton = document.getElementById('erase-button');
const normalButton = document.getElementById('normal-button');
const largeButton = document.getElementById('large-button');
eraseButton.addEventListener('click', clearGrid);
normalButton.addEventListener('click', normalSize);
largeButton.addEventListener('click', largeSize);

function createGrid(size) {
    container.innerHTML = "";
    const gridWidth = parseInt(getComputedStyle(container).width); //gets width of the grid from css, may make option for increasing grid sizien in the future
    const currentSize = gridWidth / size; //formula for calculating grid element size to fit grid
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.style.width = `${currentSize}px`; //grid element size is added
        square.style.height = `${currentSize}px`;
        square.classList.add('square');
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
