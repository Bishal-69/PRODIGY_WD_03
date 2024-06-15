let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let newbtn = document.getElementsByClassName('new')[0];
let win = document.getElementById("win");

let playerX = true;

const winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (playerX) {
      box.innerText = "X";
      playerX = false;
    } else {
      box.innerHTML = "O";
      playerX = true;
    }

    box.disabled = true; // Disable the box after a turn

    winner(); // Check for the winner
    boxesfull() // if full then reset
  });
});

function winner() {
  for (let pattern of winpattern) {
    let pos1value = boxes[pattern[0]].innerText;
    let pos2value = boxes[pattern[1]].innerText;
    let pos3value = boxes[pattern[2]].innerText;

    if (pos1value != "" && pos2value != "" && pos3value != "") {
      if (pos1value === pos2value && pos2value === pos3value) {
        showWinner(pos1value);
      }
    }
  }
}

const showWinner = (winner) => {
  win.innerText = "Congratulations, Winner is Player " + winner;
  disabledBoxes();
};

function disabledBoxes() {
  boxes.forEach((box) => {
    box.disabled = true;
  });
}

function enableBoxes() {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = ""; // Clear the box content
  });
}

function resetGame() {
  playerX = true;
  enableBoxes();
  win.innerText = "";
}

resetbtn.addEventListener("click", resetGame);

function boxesfull() {       // this function is added in boxes.forEach((box)
  let isfull = true;

         boxes.forEach((box) => {
             if(box.innerText===""){
                isfull=false;
    }
});
   if(isfull){
         setTimeout(resetGame(),3000);  /** reset after 3 sec */
    } 
  }