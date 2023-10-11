
function createGrid() {
    for (let i = 0; i < 256; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover', (e) => {
            // color chage is done by changing it to a class with a grey style 
            e.target.classList.remove('square');
            e.target.classList.add('greySquare');
        });
        container.appendChild(square);
    }
}

const container = document.getElementById('container');

createGrid();