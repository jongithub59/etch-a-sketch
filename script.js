let size = 16;
const container = document.getElementById('inner-container');
const eraseButton = document.getElementById('erase-button');
const normalButton = document.getElementById('normal-button');
const largeButton = document.getElementById('large-button');
eraseButton.addEventListener('click', clearGrid);

function createGrid(size) {
    container.innerHTML = "";
    const gridWidth = parseInt(getComputedStyle(container).width); //gets width of the grid from css, may make option for increasing grid sizien in the future
    const currentSize = gridWidth / size; //formula for calculating grid element size to fit grid
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.style.width = `${currentSize}px`; //grid element size is added
        square.style.height = `${currentSize}px`;
        // adds curve only to squares at corners
        if (i == 0) {
            square.style.borderTopLeftRadius = "10px";
        } else if (i == size - 1) {
            square.style.borderTopRightRadius = "10px";
        } else if (i == size * size - size) {
            square.style.borderBottomLeftRadius = "10px";
        } else if (i == size * size - 1) {
            square.style.borderBottomRightRadius = "10px";
        }
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
    const squares = document.querySelectorAll('#inner-container > div');
    squares.forEach((item) => {
        const square = item;
        square.classList.remove('greySquare');
    });

}


var gridSize = document.getElementById('grid-size');
var slider = document.getElementById('slider');
gridSize.innerHTML = slider.value + 'x' + slider.value; //makes the span with id gridSize display the slider's currnet value

slider.oninput = function() {
    gridSize.innerHTML = this.value; //updates the span with the current slider value using this
    const size = this.value;
    createGrid(size);
}

createGrid(size);
