const secret = Math.floor(Math.random() * 100) + 1;

let guessNumber = Number(prompt("Guess a number: "));
let guesscount = 0;

while(guessNumber !== secret){
  if(guessNumber > secret){
    console.log("Too high");
  } else{
    console.log("Too low");
  }

  guesscount++;
  console.log(guessNumber);
  console.log(guesscount);
  guessNumber = Number(prompt("Guess another number: "));
}

console.log("Correct");