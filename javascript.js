const sketchArea = document.getElementById('sketch-area');

// draws sketch area

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


//Grid Reset
const btn = document.querySelector("#btn");
  btn.addEventListener('click', () => {
    resetGrid();
  })  

function resetGrid() {
  gridItem.forEach(gridItem => gridItem.style.backgroundColor = "#cfd1d0")
  let newColVal = document.querySelector('#newColVal').value;
  let newRowVal = document.querySelector('#newRowVal').value;
  makeRows(newRowVal, newColVal);
}

// color change

const randomBtn = document.getElementById('randomBtn');
const greenBtn = document.getElementById('greenBtn');
const pinkBtn = document.getElementById('pinkBtn');

randomBtn.addEventListener('click', () => {
  gridItem.forEach(gridItem => gridItem.addEventListener('mouseover', () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    event.target.style.backgroundColor = "#" + randomColor;
  }));
})

pinkBtn.addEventListener('click', () => {
  gridItem.forEach(gridItem => gridItem.addEventListener('mouseover', () => {
    event.target.style.backgroundColor = "#f52ca8";
  }));
})

greenBtn.addEventListener('click', () => {
  gridItem.forEach(gridItem => gridItem.addEventListener('mouseover', () => {
    event.target.style.backgroundColor = "green";
  }));
})





















