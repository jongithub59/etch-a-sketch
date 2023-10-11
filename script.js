function createGrid() {
    for (let i = 0; i < 256; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('hover', colorSquare);
        container.appendChild(square);
    }
}

function colorSquare() {
    
}

const container = document.getElementById('container');

createGrid();