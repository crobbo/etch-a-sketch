const sketchArea = document.getElementById('sketch-area');

// draws sketch area

function makeRows(rows, cols) {
    sketchArea.style.setProperty('--grid-rows', rows);
    sketchArea.style.setProperty('--grid-cols', cols);
    sketchArea.style.backgroundColor = "lightgray";
    for (c = 0; c < (rows*cols); c++) {
        let cell = document.createElement('div');
        // cell.innerText = (c + 1);
        sketchArea.appendChild(cell).className = "grid-item";
    };

};
makeRows(100, 100);
makeRows(20, 20);

const gridItem = document.querySelectorAll('.grid-item');

gridItem.forEach(gridItem => gridItem.addEventListener('mouseover', () => {
  event.target.style.backgroundColor = "#727372";
  let darkerTen = Number(event.target.style.opacity) + 0.2;
  // event.target.style.opacity = `${darkerTen + 0.1}`;   // alterntive solution to darkering the drawing each mouseover
  event.target.style.opacity = (darkerTen += 0.1);
         
}));


//Grid Reset
const btn = document.querySelector("#btn");
  btn.addEventListener('click', () => {
    resetGrid();
  })  

function resetGrid() {
  gridItem.forEach(gridItem => gridItem.style.backgroundColor = "#lightgray")
  gridItem.forEach(gridItem => gridItem.style.opacity = 0);
  let newColVal = document.querySelector('#newColVal').value;
  let newRowVal = document.querySelector('#newRowVal').value;
  if (newColVal > 0 && newRowVal > 0){
    makeRows(newRowVal, newColVal);
  } else {
    alert("Please enter values greater than 0");
  }
  
}

// color change

const randomBtn = document.getElementById('randomBtn');
const greenBtn = document.getElementById('greenBtn');
const pinkBtn = document.getElementById('pinkBtn');

randomBtn.addEventListener('click', () => {
    pinkBtn.style.backgroundColor = "white";
    greenBtn.style.backgroundColor = "white";
    pinkBtn.style.color = "black";
    greenBtn.style.color = "black";
    randomBtn.style.backgroundColor = "#03a9fc";
    randomBtn.style.color = "white";
  gridItem.forEach(gridItem => gridItem.addEventListener('mouseover', () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    event.target.style.backgroundColor = "#" + randomColor;
    
  }));
})

pinkBtn.addEventListener('click', () => {
    randomBtn.style.backgroundColor = "white";
    greenBtn.style.backgroundColor = "white";
    randomBtn.style.color = "black";
    greenBtn.style.color = "black";
    pinkBtn.style.backgroundColor = "#03a9fc";
    pinkBtn.style.color = "white";
  gridItem.forEach(gridItem => gridItem.addEventListener('mouseover', () => {
    event.target.style.backgroundColor = "#f52ca8";
  }));
})

greenBtn.addEventListener('click', () => {
    pinkBtn.style.backgroundColor = "white";
    randomBtn.style.backgroundColor = "white";
    pinkBtn.style.color = "black";
    randomBtn.style.color = "black";
    greenBtn.style.backgroundColor = "#03a9fc";
    greenBtn.style.color = "white";
  gridItem.forEach(gridItem => gridItem.addEventListener('mouseover', () => {
    event.target.style.backgroundColor = "green";
  }));
})





















