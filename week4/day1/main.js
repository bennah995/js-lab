// TASK 1
// square(n) returns n squared
function square(n){
  return n * n;
}
console.log(square(4));
console.log(square(15));
console.log(square(999));

// greet(name) returns "Hello, NAME!"
function greet(name){
  return `Hello ${name}`;
}
console.log(greet("Benard"));
console.log(greet("Alicia"));

// isEven(n) returns true if n is even
function isEven(n){
  if(n % 2 === 0) return `true`;
}
console.log(isEven(2));
console.log(isEven(3));

// max(a, b) returns the larger of two numbers
function max(a, b){
  if(a > b){
    return a;
  } else {
    return b;
  }

  return
}
console.log(max(12, 15));
console.log(max(17, 15));

// sum(arr) takes an array of numbers and returns their sum
function sum(arr){
  let total = 0;
  for(let i = 0; i < arr.length; i++){
    total += arr[i];
  }

  return total;
}
console.log(sum([10, 15, 50, 5]));
console.log(sum([99, 45, 67, 6]));

// firstWord(sentence) returns the first word of a string
function firstWord(sentence){
  return sentence.trim().split(" ")[0];
}
console.log(firstWord("My name is Benard"));
console.log(firstWord("What is this?"));

// reverseString(s) returns the string reversed
function reverseString(s){
  return s.split("").reverse().join("");
}
console.log(reverseString("My name is Benard"));
console.log(reverseString("Benard"));

// countVowels(s) returns the count of vowels in a string
function countVowels(s){
  const vowelMatch = s.match(/[aeiou]/gi);
  return vowelMatch ? vowelMatch.length : 0;
}
console.log(countVowels("My name is Benard"));
console.log(countVowels("Benard"));

// range(start, end) returns an array of integers from start to end inclusive
function range(start, end){
  let result = [];
  for(let i = start; i<= end; i++){
    result.push(i);
  }
  return result;
}
console.log(range(10, 20));
console.log(range(15, 20));

// clamp(value, min, max) returns value bounded by min and max
function clamp(value, min, max){
  return Math.max(min, Math.min(value, max));
}
console.log(clamp(12, 1, 10));
console.log(clamp(100, 99, 10));

// TASK 2
// 1
// square(n) returns n squared
// function square(n){
//   return n * n;
// }
function squareDec(n) {return n * n} // funtion declaration
const squareExpres = function(n) {return n * n} // funtion expression
console.log(squareDec(4));
console.log(squareExpres(5));

// 2
// greet(name) returns "Hello, NAME!"
// function greet(name){
//   return `Hello ${name}`;
// }
// console.log(greet("Benard"));
// console.log(greet("Alicia"));
function greetDec(name) {return `Hello ${name}`;} // funtion declaration
const greetExpres = function(name) {return `Hello ${name}`} // funtion expression
console.log(greetDec("Benard"));
console.log(greetExpres("Alicia"));


// 3
// isEven(n) returns true if n is even
// function isEven(n){
//   if(n % 2 === 0) return `true`;
// }
// console.log(isEven(2));
// console.log(isEven(3));
function isEvenDec(n) { if(n % 2 === 0) return `True`;} // funtion declaration
const isEvenExpres = function(n) {if(n % 2 === 0) return `True`; } // funtion expression
console.log(isEvenDec(2));
console.log(isEvenDec(3));

console.log(isEvenExpres(4));
console.log(isEvenExpres(5));


// TASK 3
const title = document.getElementById("title");
const message = document.getElementById("message");
const shoutBtn = document.getElementById("btn-shout");
const resetBtn = document.getElementById("btn-reset");
const colorBtn = document.getElementById("btn-color");

// element.addEventListener("event", functionName);
shoutBtn.addEventListener(`click`, () => {
  message.textContent = "HELLO WORLD";
})

resetBtn.addEventListener(`click`, () => {
  message.textContent = "Welcome";
})

colorBtn.addEventListener(`click`, () => {
  title.classList.toggle("hihglight");
})

// TASK 4
const actions = document.querySelectorAll(".action");
actions.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    console.log(`Action button ${i + 1} clicked`);
  });
});

// TASK 5
// function countVowels(s){
//   const vowelMatch = s.match(/[aeiou]/gi);
//   return vowelMatch ? vowelMatch.length : 0;
// }
// console.log(countVowels("My name is Benard"));
// console.log(countVowels("Benard"));
function countVowelsandConsonats(s){
  // count starting for bot vowels and consonats
  let vowels = 0;
  let constants = 0;

  for(let i = 0; i < s.length; i++){
    if(['a', 'e', 'i', 'o', 'u'].includes(s[i].trim())){
      vowels++
    } else {
      constants++;
    }
  }
  return {vowels, constants}
}
console.log(countVowelsandConsonats("My name is Benard"));
console.log(countVowelsandConsonats("Benard"));
