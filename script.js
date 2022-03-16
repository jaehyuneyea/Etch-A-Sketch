let gridSize = 10;
const MAX_WIDTH = 640;
const container = document.querySelector('.container');
container.style.height = `${MAX_WIDTH}px`;
container.style.width = `${MAX_WIDTH}px`;

for(let i=0; i < gridSize; i++) {
  let row = document.createElement('div');
  row.id = "row" + i;

  container.appendChild(row);
  let currRow = document.getElementById('row' + i);

  for(let j=0; j < gridSize; j++) {
    let box = document.createElement('div');
    box.id = 'col' + j;
    box.className = 'grid';
    box.style.height = `${MAX_WIDTH / gridSize}px`;
    box.style.width = `${MAX_WIDTH / gridSize}px`;
    box.style.border = '1px solid black';
    currRow.append(box);
  }
}

let grids = document.querySelectorAll('.grid');
Array.from(grids).forEach(grid => grid.addEventListener('mouseover', () => {
  grid.classList.add('coloured');
}));