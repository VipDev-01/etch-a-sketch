const container = document.querySelector('.container');
const range = document.querySelector('#select');
const output = document.querySelector('output');

output.textContent = range.value;

range.addEventListener('input',() => {output.textContent = range.value});
range.addEventListener('input', function makeGrid() {start(this.value)});

function start(y) {
    reset();
    const gridWidth = gridAxis(y) + '%';
    document.documentElement.style.setProperty('--basis', gridWidth);
    createGrid(y*y);
}

function createGrid(n) {
    for (let x = 0; x < n; x++) {
        const grid = document.createElement('div');
        grid.classList.add('div');
        container.appendChild(grid);  
}
    addEvent()
}

function addEvent() {
    const gridItems = document.querySelectorAll('.div');
    gridItems.forEach(item => item.addEventListener('mouseenter', function style() {this.classList.add('color')}))
}


function reset() {
    const grids = document.querySelectorAll('.div');
    grids.forEach(grid => container.removeChild(grid));
}


const gridAxis = (n) => ((500/n) / 500) * 100;

start(2)