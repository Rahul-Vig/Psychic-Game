var letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

var guesses = [];

var randomLetter = letters[Math.floor(Math.random() * letters.length)];
console.log(randomLetter);

var guessesLeft = 9;
var wins = 0;
var losses = 0;
function gameRound(event) {
  if (guesses.includes(event.key)) {
    //do nothing
  } else {
    if (event.key === randomLetter) {
      wins++;
      document.getElementById("wins").textContent = "Wins: " + wins;
      guessesLeft = 9;
      document.getElementById("guesses").textContent =
        "Guesses Left: " + guessesLeft;
      randomLetter = letters[Math.floor(Math.random() * letters.length)];
      guesses = [];
    } else {
      guesses.push(event.key);
      guessesLeft--;
      document.getElementById("guesses").textContent =
        "Guesses Left: " + guessesLeft;
      document.getElementById("keysEntered").textContent =
        "Your Guesses so far: " + guesses.toString();
    }

    if (guessesLeft === 0) {
      losses++;
      document.getElementById("losses").textContent = "Losses: " + losses;
      guessesLeft = 9;
      document.getElementById("guesses").textContent =
        "Guesses Left: " + guessesLeft;
      randomLetter = letters[Math.floor(Math.random() * letters.length)];
      guesses = [];
      document.getElementById("keysEntered").textContent =
        "Your Guesses so far: " + guesses.toString();
    }
  }
}

document.addEventListener("keyup", gameRound);
