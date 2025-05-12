const guess = document.getElementById("guess");
const message = document.getElementById("message");
const submit = document.getElementById("submit");
const playAgain = document.getElementById("button");

let correctNumber = Math.floor(Math.random() * 10) + 1;

// clears guess on refresh
guess.value = "";

const isInInterval = (guess) => {
  return guess >= 1 && guess <= 10;
};

const isCorrect = (guess) => {
  return num == number;
};

submit.onclick = function () {
  const userGuess = Number(guess.value);
  if (!isInInterval(userGuess)) {
    message.textContent = "Please pick a number between 1-10!";
  } else if (userGuess != correctNumber) {
    message.textContent = "Incorrect! Try again";
  } else if (userGuess == correctNumber) {
    message.textContent = `CORRECT! the number was ${correctNumber}.`;
    playAgain.style.display = "inline";
  }
};

playAgain.onclick = function () {
  playAgain.style.display = "none";
  message.textContent = "";
  guess.value = "";
  number = Math.floor(Math.random() * 10) + 1;
};
