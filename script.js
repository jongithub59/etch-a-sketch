
function createGrid() {
    for (let i = 0; i < 256; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover', (e) => {
            // color change is done by changing it to a class with a grey style 
            e.target.classList.remove('square');
            e.target.classList.add('greySquare');
        });
        container.appendChild(square);
    }
}

const container = document.getElementById('container');
var gridSize = document.getElementById('grid-size');
var slider = document.getElementById('slider');
gridSize.innerHTML = slider.value; //makes the span with id gridSize display the slider's currnet value

slider.oninput = function() {
    console.log(this);
    gridSize.innerHTML = this.value; //updates the span with the current slider value using this
}


createGrid();