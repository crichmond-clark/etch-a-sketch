const gridContainer = document.querySelector('.grid-container');
const resetButton = document.querySelector('.reset-button');
const gridContainerWidth = 960;
let gridNumber = 16;
let gridSize = gridNumber * gridNumber;
let elementHeight = gridContainerWidth / gridNumber;

createGrid(gridSize);
let gridElem = document.querySelectorAll('.grid-element');
addBlackClass();


function createGridPiece() {
  let gridElement = document.createElement('div');
  gridElement.className = "grid-element";
  gridContainer.append(gridElement);
};

function createGrid(numOfElements) {
  gridContainer.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
  gridContainer.style.gridAutoColumns = `${gridContainerWidth/gridNumber}px`;
  gridContainer.style.gridAutoRows =  `${gridContainerWidth/gridNumber}px`;               
  for (let i = 0; i < numOfElements; i++) {
    createGridPiece()

  }

}
function addBlackClass() {
  gridElem.forEach((element) => {
    element.addEventListener('mouseover', () => {
      element.classList.add('black-bg')
    });
  });
}

function removeElements() {
  gridElem.forEach((element) => {
    element.remove();
  });
}


resetButton.addEventListener('click', () => {

  let userAnswer = parseInt(prompt('How big a grid would you like?'));
  gridNumber = userAnswer;
  gridSize = gridNumber * gridNumber;
  elementHeight = gridContainerWidth / gridNumber;
  removeElements();

  createGrid(gridSize);
  gridElem = document.querySelectorAll('.grid-element');
  addBlackClass();
});





