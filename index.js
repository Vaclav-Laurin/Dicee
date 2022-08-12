diceLeft = document.getElementById("leftDice");
diceRight = document.getElementById("rightDice");
winner = document.getElementById("winner");

let randomNumberLeft = Math.ceil(Math.random()*6);
let randomNumberRight = Math.ceil(Math.random()*6);

let sourceLeft = "images/dice" + randomNumberLeft + ".png";
let sourceRight = "images/dice" + randomNumberRight + ".png";

if (randomNumberLeft > randomNumberRight) {
  winner.textContent = "Player 1 Wins!";
}
else if (randomNumberLeft < randomNumberRight) {
  winner.textContent = "Player 2 Wins!";
}
else {
  winner.textContent = "Draw!";
}

diceLeft.setAttribute("src", sourceLeft);
diceRight.setAttribute("src", sourceRight);
