let cellArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let randomNumRange = cellArray.length;

// Select start button to switch from menu to boardgame

const startButton = document.getElementById('start');

// Select menu and boardgame (grid)

const menu = document.getElementById('menu');
const grid = document.getElementById('grid');

//? Select all cells for player choice

const cells = document.querySelectorAll('.cell');

// Add event listener to start button to apply 'hide' to menu and remove 'hide' from boardgame

startButton.addEventListener('click', () => {
  menu.classList.add('hide');
  grid.classList.remove('hide');
});



//? PLAYER CHOICE

//? Add event listener to all cells

cells.forEach(cell => {cell.addEventListener('click', () => {
  //? Fill cell with X
  cell.textContent = 'X';

  //? Cell id

  let cellId = cell.id;
  console.log(cellId);

  //? Cell ID number only

  let cellIdNumOnly = cellId.slice(-1);
  console.log('cell id number only is ' + cellIdNumOnly);

  //? create index

  let cellIndex = cellArray.indexOf(parseInt(cellIdNumOnly));
  console.log(cellIndex);

  //? Remove from array by using cellIndex only if index is found

  if (cellIndex > -1) {
    cellArray.splice(cellIndex, 1);

    console.log(cellArray);
  }


  //? Return cell :)
  return cellArray;

  // Check player pick NumRange and cellArray
  // console.log('player choice is ' + cell.id.slice(-1))
  // console.log('array: ' + cellArray);
})});

function printArray() {
  console.log(cellArray);
}






function computerChoice() {

//! COMPUTER CHOICE

// Number range and cellArray needs to decrease after each move from both player and computer

// let randomNumRange = 9;
// let cellArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//! Generate random number between 1 and 9

let computerPick = Math.floor((Math.random() * randomNumRange) + 1);

//! Concatante number from computerPick to cell in order to target cell element by Id

let chosenCell = document.getElementById('cell' + computerPick.toString());

//! Fill the cell chosen by computer

chosenCell.textContent = 'comp'

// TODO Remove event listenr from the cell chosen by the computer

// TODO ######CODE######CODE######
// TODO \/ \/ \/ \/ \/ \/ \/ \/ \/
// let singleCell = document.getElementById('cell' + computerPick.toString());
// singleCell.removeEventListener('click', playerChoice);
// TODO /\ /\ /\ /\ /\ /\ /\ /\ /\

//! Decrease number range

// randomNumRange -= 1;

//! Remove chosen cell from cellArray

cellArray.splice(computerPick - 1, 1);

}




// Check computerPick randomNumRange and cellArray

// console.log('computerPick is ' + computerPick);
// console.log('number range is ' + numberRange());
// console.log('array: ' + cellArray);


// FUNCTIONS


// Length of array
function numberRange() {
  return cellArray.length;
}


  
  
