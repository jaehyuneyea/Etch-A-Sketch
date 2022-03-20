let gridSize = 16;
const MAX_WIDTH = 640;
const container = document.querySelector('.main-grid');
container.style.height = `${MAX_WIDTH}px`;
container.style.width = `${MAX_WIDTH}px`;

function createGrid(size) {
  for(let i=0; i < size; i++) {
    let row = document.createElement('div');
    row.id = "row" + i;
  
    container.appendChild(row);
    let currRow = document.getElementById('row' + i);
  
    for(let j=0; j < size; j++) {
      let box = document.createElement('div');
      box.id = 'col' + j;
      box.className = 'grid';
      box.style.height = `${MAX_WIDTH / size}px`;
      box.style.width = `${MAX_WIDTH / size}px`;
      box.style.border = '1px solid black';
      box.style.backgroundColor = 'white';
      currRow.append(box);
    }
  }
  let grids = document.querySelectorAll('.grid');
  grids.forEach(grid => grid.addEventListener('mouseover', () => {
    grid.style.backgroundColor = 'black';
  }));
}

function removeGrid() {
  let container = document.querySelector('.main-grid');
  container.innerHTML = '';
}

function random_RGB() {
  return Math.floor(Math.random() * 256);
}

createGrid(gridSize);


let reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
  document.querySelectorAll('.grid').forEach(grid => grid.classList.remove('coloured'));
  let newGrid = prompt('Enter the size of the new grid (less than 100)');
  if (newGrid > 100) {
    alert('create a smaller grid!');
  } else if (typeof newGrid != 'number') {
    alert('Enter a valid number!');
  } else {
    removeGrid();
    createGrid(newGrid);
  }
});

let black = document.querySelector('#black');
black.addEventListener('click', () => {
  let grids = document.querySelectorAll('.grid');
  grids.forEach(grid => grid.addEventListener('mouseover', () => {
    grid.style.backgroundColor = 'black';
  }))
})

let rgbButton = document.querySelector('#rgb');
rgbButton.addEventListener('click', () => {
  let grids = document.querySelectorAll('.grid');
  grids.forEach(grid => grid.addEventListener('mouseover', () => {
    let r = random_RGB();
    let g = random_RGB();
    let b = random_RGB();
    grid.style.backgroundColor = `rgb(${r},${g},${b})`;
  }))
})


