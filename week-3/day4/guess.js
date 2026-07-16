const target = Math.floor(Math.random() * 100) + 1;

let attempts = 0;
let input = prompt(`Guess a number between 1 and 100`);
let guess = Number(input);
attempts++; 

while(true){
  if (Number.isNaN(guess) || guess < 1 || guess > 100) {
    alert('Please enter a valid number between 1 and 100.');
    continue;
  }
  if (guess === target) {
    alert(`Correct! You guessed it in ${attempts} attempts.`);
    break; // Exit the loop because the game is won!
  } else if (guess < target) {
    alert('Too low! Try again.');
  } else {
    // If it's not strictly equal, and it's not too low, it MUST be too high.
    alert('Too high! Try again.');
  }

  input = prompt("Guess another number between 1 and 100");
  guess = Number(input);
  attempts++;
}