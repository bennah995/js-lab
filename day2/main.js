const name = "Benard Mutuku";
const age = 21;
const jsComfort = true;
let futureStore;
const languages = ["Kiswahili", "Chinese", "Japanese"]
const location = {
  city: "Nairobi",
  country: "Kenya"
};
console.log(`My name is ${name}, I am from ${location.city}`);
console.log(typeof name);
console.log(typeof age);
console.log(typeof jsComfort);

console.log(futureStore);
futureStore = "This is a reassignment";
console.log(futureStore);

// name = "David";
// The error when trying to reassign a const variable is: Uncaught TypeError: Assignment to constant variable
// This means that it caught us tryin to reassign a alreaady assigned const variable

console.log(typeof null);

// Task 3
function buildProfile(name1, age1, city1, languages1){
  return `
  Name: ${name1}
  Age: ${age1}
  City: ${city1}
  Languages: ${languages1.join(", ")}
  `
}

console.log(buildProfile("Ben", 22, "Nairobi", ["English", "Kiswahili", "Javascript"]));