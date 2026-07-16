// TASK 1
// square(n) returns n squared
const square = (n) => n * n;
console.log(square(4));
console.log(square(15));
console.log(square(999));

// // greet(name) returns "Hello, NAME!"
const greet = (name) => `Hello ${name}`
console.log(greet("Benard"));
console.log(greet("Alicia"));

// // isEven(n) returns true if n is even
const isEven = (n) => n % 2 === 0;
console.log(isEven(2));
console.log(isEven(3));

// // max(a, b) returns the larger of two numbers
const max = (a, b) => {
  if(a > b){return a}
  else return b
};
console.log(max(12, 15));
console.log(max(17, 15));

// // sum(arr) takes an array of numbers and returns their sum
const sum = (arr) => arr.reduce((total, num) => total + num, 0);
console.log(sum([10, 15, 50, 5]));
console.log(sum([99, 45, 67, 6]));

// // firstWord(sentence) returns the first word of a string
const firstWord = (sentence) => sentence.trim().split(" ")[0];
console.log(firstWord("My name is Benard"));
console.log(firstWord("What is this?"));

// // reverseString(s) returns the string reversed
const reverseString = (s) => s.split("").reverse().join("");
console.log(reverseString("My name is Benard"));
console.log(reverseString("Benard"));

// // countVowels(s) returns the count of vowels in a string
const countVowels = (s) => s.match(/[aeiou]/gi)?.length ?? 0;
console.log(countVowels("My name is Benard"));
console.log(countVowels("Benard"));

// // range(start, end) returns an array of integers from start to end inclusive

const range = (start, end) => Array.from({length: end - start + 1}, (_, i) => start + i);
console.log(range(10, 20));
console.log(range(15, 20));

// // clamp(value, min, max) returns value bounded by min and max
const clamp = (value, min, max) => Math.max(min, Math.min(value, max));
console.log(clamp(12, 1, 10));
console.log(clamp(100, 99, 10));

// TASK 2
const products = [
  { name: "Notebook", price_cents: 35000 },
  { name: "Pen", price_cents: 5000 },
  { name: "Laptop Stand", price_cents: 120000 },
];

// array of just the names
const names = products.map(product => product.name);
console.log(names);

// array of just the prices in shillings
const priceInSh = products.map(product => product.price_cents / 100);
console.log(priceInSh);

// 3. An array of new objects with an added priceFormatted property
const formattedProducts = products.map(product => ({
  ...products,
  priceFormatted: `Ksh ${product.price_cents / 100}`
}));
console.log(formattedProducts);

// TASK 3
// Products that cost less than KSh 1000 (price_cents < 100000)
const cheapProducts = products.filter(product => product.price_cents < 100000);
console.log(cheapProducts);

// Products whose name has more than 5 characters
const longNameProducts = products.filter(product => product.name.length > 5);
console.log(longNameProducts);

// TASK 4
// The total price of all products in cents
const totalCents = products.reduce((total, product) => total + product.price_cents, 0);
console.log(totalCents); 

// A single object mapping product name to price
const productMap = products.reduce((map, product) => {
  map[product.name] = product.price_cents;
  return map;
}, {});
console.log(productMap);