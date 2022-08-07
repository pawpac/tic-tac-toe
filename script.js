let cellArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let playerNums = [];
let computerNums = [];
let playerSymbol = 'O';
let computerSymbol = 'O';

const startButton = document.getElementById('start');

const menu = document.getElementById('menu');
const grid = document.getElementById('grid');


const cells = document.querySelectorAll('.cell');

const btnBrainX = document.getElementById('brain-x');
const btnChipX = document.getElementById('chip-x');
const btnBrainO = document.getElementById('brain-o');
const btnChipO = document.getElementById('chip-o');

const reloadBtn = document.getElementById('reload');

btnBrainX.addEventListener('click', () => {
  assignPlayerSymbol();
  playerPick();
})

btnChipX.addEventListener('click', () => {
  assignComputerSymbol();
  computerChoice();
})

startButton.addEventListener('click', () => {
  menu.classList.add('hide');
  grid.classList.remove('hide');
});



//? PLAYER CHOICE

const playerPick = () => {

  cells.forEach(cell => {cell.addEventListener('click', function player() {

    if (cell.textContent === '') {
      cell.textContent = playerSymbol;
      let cellId = cell.id;
      let cellIdNumOnly = cellId.slice(-1);
      console.log(cellIdNumOnly);
      playerNums.push(parseInt(cellIdNumOnly));
      checkIfWin(playerNums, winningSequence);
      console.log(playerNums);
      let cellIndex = cellArray.indexOf(parseInt(cellIdNumOnly));

      if (cellIndex > -1) {
        cellArray.splice(cellIndex, 1);
      }
      
      if (gameFinished !== true) {
        setTimeout(computerChoice, 500);

        return cellArray;
      }
    }

  })});

  checkIfWin(playerNums, winningSequence);

  return cellArray;
}
//! COMPUTER CHOICE
function computerChoice() {
  let computerPick = Math.floor((Math.random() * 9) + 1);
  let chosenCell = document.getElementById('cell' + computerPick.toString());
  
  if (chosenCell.textContent === '') {
    chosenCell.textContent = computerSymbol;
    let cellId = chosenCell.id;
    let cellIdNumOnly = cellId.slice(-1);
    computerNums.push(parseInt(cellIdNumOnly));



    checkIfWin(computerNums, winningSequence);

    let cellIndex = cellArray.indexOf(parseInt(cellIdNumOnly));
    if (cellIndex > -1) {
      cellArray.splice(cellIndex, 1);
    }

    playerPick();

    return cellArray;

  } else if (cellArray.length > 0) {
    computerChoice();
  }
}



//! \/\/\/\/\/\/BRAINSTORM\/\/\/\/\/\/

// const winnerSequenceArr = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];

//! /\/\/\/\/\/\BRAINSTORM/\/\/\/\/\/\



let winningSequence = [[1, 2, 3], [4, 5, 6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];
let result = true;
let gameFinished = false;


function checkIfWin(contender, sequence) {
  for (let miniArr of sequence) {
    if (result = miniArr.every(value => {
      return contender.includes(value)
    })) {
      winningStripe(miniArr);
      gameFinished = true;
      setTimeout(showReloadBtn, 1000);
      return gameFinished;
    }
  }
}

function winningStripe(stripe) {
  console.log(stripe);
  for (num of stripe) {
    let box = document.getElementById('cell' + num.toString());
    box.classList.add('red');
  }
}

function assignPlayerSymbol() {
  playerSymbol = 'X';
  return playerSymbol;
}

function assignComputerSymbol() {
  computerSymbol = 'X';
  return computerSymbol;
}

function showReloadBtn() {
  reloadBtn.classList.remove('hide');
  cells.forEach(cell => cell.textContent = '');
}


//! NOTES
//fix timeOut for computer
//build assign symbol functions


  
  
