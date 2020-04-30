const sketchArea = document.getElementById('sketch-area');

function makeRows(rows, cols) {
    sketchArea.style.setProperty('--grid-rows', rows);
    sketchArea.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows*cols); c++) {
        let cell = document.createElement('div');
        // cell.innerText = (c + 1);
        sketchArea.appendChild(cell).className = "grid-item";
    };

};

makeRows(50, 50);

const gridItem = document.querySelectorAll('.grid-item');

gridItem.forEach(gridItem => gridItem.addEventListener('mouseover', () => {
  event.target.style.backgroundColor = "#727372"
}));