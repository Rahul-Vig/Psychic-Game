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
]; //Create an array of all letter possibilities

var guesses = []; //create empty array that will store each of our key presses without repetition.

var randomLetter = letters[Math.floor(Math.random() * letters.length)]; //generate the first random letter

var guessesLeft = 9; //start with 9 guesses
var wins = 0; //start with 0 wins
var losses = 0; //start with 0 losses

function gameRound(event) {
  if (guesses.includes(event.key)) {
    //if we press a key that has already been guessed do nothing.
  } else {
    if (event.key === randomLetter) {
      //if the key you entered is equal to the random letter
      wins++; //increment your wins
      document.getElementById("wins").textContent = "Wins: " + wins; //update the html text to reflect the win.
      guessesLeft = 9; //reinitialize guesses to 9 for a new round
      document.getElementById("guesses").textContent =
        "Guesses Left: " + guessesLeft; //update the html text to reflect guesses left
      randomLetter = letters[Math.floor(Math.random() * letters.length)]; //generate another random letter
      guesses = []; //reinitialize the guesses array to empty.
      //Now the game can be played again.
    } else {
      guesses.push(event.key); //if the key pressed does not equal the randomly generated letter, push that key into the guess array
      guessesLeft--; //decrement the number of guesses
      document.getElementById("guesses").textContent =
        "Guesses Left: " + guessesLeft; //update the html to reflect the new number of guesses.
      document.getElementById("keysEntered").textContent =
        "Your Guesses so far: " + guesses.toString(); //update html to reflect all the keys entered as guesses but were not correct matches.
    }

    if (guessesLeft === 0) {
      //when we reach 0 guesses left and have not guessed the letter, there is a loss.
      losses++; //increment the loss counter.
      document.getElementById("losses").textContent = "Losses: " + losses; //update html to reflect losses.
      guessesLeft = 9; //reintialize the number of guesses left for a new round.
      document.getElementById("guesses").textContent =
        "Guesses Left: " + guessesLeft; //update the html to reflect the new number of guesses left
      randomLetter = letters[Math.floor(Math.random() * letters.length)]; //randomly generate a new letter for a new round.
      guesses = []; //re intialize the guesses array to empty
      document.getElementById("keysEntered").textContent =
        "Your Guesses so far: " + guesses.toString(); //update html to reflect a clean slate for guesses so far.
    }
  }
}

document.addEventListener("keyup", gameRound); //this event listener is what invokes the function gameRound we defined above.
