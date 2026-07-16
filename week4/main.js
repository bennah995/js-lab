// TASK 1
// 1
function greet(name = "friend"){
  return `Hello ${name}`;
}
console.log(greet());
console.log(greet("Mamba"));

// 2
function raiseToPower(base, exponent = 2){
  return base ** exponent;
}
console.log(raiseToPower(2));
console.log(raiseToPower(2, 5));

// 3
function formatPrice(amount, currency = "KSh"){
  return `${currency} ${amount}`;
}
console.log(formatPrice(1500));
console.log(formatPrice(1500, "USD"));

// 4
function joinWords(words, separator = ", "){
  return words.join(separator);
}
console.log(joinWords(["orange", "banana", "mango"]));

// 5
function makeUser(name, { age = 18, city = "Nairobi" } = {}){
  return {name, age, city};
}
console.log(makeUser("Ken"))
console.log(makeUser("Hassan", {age: 21, city:"Mombasa"}))


// TASK 2
// 1
function sumAll(...numbers){
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sumAll(10, 10, 1, 4));

// 2
function concat(...strings){
  return strings.join(", ");
}
console.log(concat("One", "two", "three", "four", "five"));

// 3
function maxOf(...values){
  return Math.max(...values);
}
console.log(maxOf(12, 45, 99, 2));

// TASK 3
// 1
const [red, green, blue] = [255, 128, 64];
console.log(`Red: ${red}, Green: ${green}, Blue: ${blue}`);

// 2
function personDestructure(person){
  const {name, age , city} = person;
  return `Name: ${name} | Age: ${age} | City: ${city}`;
}

// 3
const person = { name: "Ali Hassan", age: 25, city: "Mandera" };
console.log(personDestructure(person));

// 4
const preferences = { theme: "dark" }; 
const { theme = "light", notifications = true, language = "en" } = preferences || {};
console.log(theme);


// TASK 4
// function buildReceipt({name, phone}, taxRate = 0.16, ...items){
//   let subTotal = 0;

//   const itemLines = items.map(({item, price, qty}) => {
//     const cost = price * qty;
//     subTotal += cost;
//     return `${qty} X ${item} @ KSH ${price} = KSH ${cost}`
//   }).join("\n    ");

//   const tax = subTotal * taxRate;
//   const total = subTotal + tax;

//   return `
//     Receipt for ${name} (${phone})
//     ------------------------------------
//     ${itemLines}    
//     ------------------------------------
//     Sub-total: KSH ${subTotal}
//     Tax: (${taxRate * 100}%): KSh ${tax}
//     Total: KSh ${total}
//   `
// }

// const customer = { name: "Wanjiru", phone: "+254712000000" };
// const item1 = { item: "Notebook", price: 350, qty: 2 };
// const item2 = { item: "Pen", price: 50, qty: 1 };
// console.log(buildReceipt(customer, 0.16, item1, item2));

// const customer2 = { name: "Kanja", phone: "+254712000000" };
// const item3 = { item: "Bread", price: 60, qty: 1 };
// const item4 = { item: "Milk", price:65, qty: 4 };
// console.log(buildReceipt(customer2, 0.16, item3, item4));

// const customer3 = { name: "Melvin", phone: "+254712000000" };
// const item5 = { item: "Pen", price: 45, qty: 5 };
// const item6 = { item: "Notebook", price: 350, qty: 4 };
// console.log(buildReceipt(customer3, 0.16, item5, item6));

// AI BULD
function buildReceipt({ name, phone }, taxRate = 0.16, discountRate = 0, ...items) {
  let subTotal = 0;

  const itemLines = items
    .map(({ item, price, qty }) => {
      const cost = price * qty;
      subTotal += cost;
      return `${qty} X ${item} @ KSH ${price} = KSH ${cost}`;
    })
    .join("\n    ");

  const discount = subTotal * discountRate;
  const discountedSubtotal = subTotal - discount;

  const tax = discountedSubtotal * taxRate;
  const total = discountedSubtotal + tax;

  return `
Receipt for ${name} (${phone})
------------------------------------
${itemLines}
------------------------------------
Sub-total:           KSH ${subTotal}
Discount (${discountRate * 100}%): -KSH ${discount}
Taxable Amount:      KSH ${discountedSubtotal}
Tax (${taxRate * 100}%):      KSH ${tax}
------------------------------------
Total:               KSH ${total}
`;
}

const customer = { name: "Wanjiru", phone: "+254712000000" };
const item1 = { item: "Notebook", price: 350, qty: 2 };
const item2 = { item: "Pen", price: 50, qty: 1 };

console.log(buildReceipt(customer, 0.16, 0.10, item1, item2));