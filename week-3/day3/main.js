// TASK 1
const price = 7500;
const quantity =24;
const taxRate = 0.16;

const subtotal = price * quantity;
const tax = subtotal * taxRate;
const total = subtotal + tax;

console.log(`Subtotal: KSh ${subtotal}`);
console.log(`Tax: KSh ${tax}`);
console.log(`Total: KSh ${total.toFixed(2)}`);

// TASK 2
// const values = [0, 1, "", "hello", null, undefined, NaN, [], {}, false, true];
// values.forEach((v) => {
//   console.log(`${JSON.stringify(v)} is ${Boolean(v) ? "truthy" : "falsy"}`);
// });


// TASK 3
console.log(0 == false); // TRUE since 0 is coarces
console.log(0 === false); // false - operator checks whether left side is strictly equal to 0
console.log(5 > 6); // checks whether 5 is greater than 6- false
console.log(5 >= 5); // checks whether 5 is greater than or equal to 5 true
console.log(5 < 6); // checks whether 5 is less than true - true


// TASK 4
let username = "";
let displayName = username || "Anonymous";
console.log(`Hello, ${displayName}`);

username = "Ben";
displayName = username || "Anonymous";
console.log(`Hello, ${displayName}`);
// For the above 2 phases we use Anonymous as the username if no username is provided but fall back to the username if provided

const isLoggedIn = true; // when changed to false no message is displayed as no one is logged in
isLoggedIn && console.log("Welcome back!");

// TASK 5
// Fix 1: This should compute 25% of 200 but it does not
const discount = 200 * 0.25;

// Fix 2: This should print "You are an adult" for age 18
const age = 18;
if (age >= 18) console.log("You are an adult");


// Fix 3: This should concatenate but it adds as numbers
const a = "5";
const b = 3;
console.log(`${a} + ${b}`);