const gridContainer = document.querySelector('.grid-container');
const resetButton = document.querySelector('.reset-button');
const gridContainerWidth = 960;

let gridNumber = 16*16;
let elementHeight = gridNumber / gridContainerWidth;




function createGridPiece() {

  let gridElement = document.createElement('div');
  gridElement.className = "grid-element";
  gridContainer.append(gridElement);


};

function createGrid(numOfElements) {
  for (let i = 0; i < numOfElements; i++) {
    createGridPiece()

  }
}


createGrid(gridNumber);

const gridElem = document.querySelectorAll('.grid-element');

gridElem.forEach((element) => {
  element.addEventListener('mouseover', () => {
    element.classList.add('black-bg')
  });
});

resetButton.addEventListener('click', () => {

  let userAnswer = parseInt(prompt('How big a grid would you like?'));
  let gridNumber = userAnswer * userAnswer;

  gridElem.forEach((element) => {
    element.remove();
  });
});




