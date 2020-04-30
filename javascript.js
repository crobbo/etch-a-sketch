const sketchArea = document.getElementById('sketch-area');

// const gridSqaure = document.createElement('div');
// // gridSqaure.setAttribute = ('id', 'grid-square');
// gridSqaure.classList.add = ('grid-square');
// sketchArea.appendChild(gridSqaure);


function makeRows(rows, cols) {
    sketchArea.style.setProperty('--grid-rows', rows);
    sketchArea.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows*cols); c++) {
        let cell = document.createElement('div');
        cell.innerText = (c + 1);
        sketchArea.appendChild(cell).className = "grid-item";
    };
};

makeRows(16, 16);
