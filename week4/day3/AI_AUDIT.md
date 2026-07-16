<!-- My Original version: -->
function buildReceipt({name, phone}, taxRate = 0.16, ...items){
  let subTotal = 0;

  const itemLines = items.map(({item, price, qty}) => {
    const cost = price * qty;
    subTotal += cost;
    return `${qty} X ${item} @ KSH ${price} = KSH ${cost}`
  }).join("\n    ");

  const tax = subTotal * taxRate;
  const total = subTotal + tax;

  return `
    Receipt for ${name} (${phone})
    ------------------------------------
    ${itemLines}    
    ------------------------------------
    Sub-total: KSH ${subTotal}
    Tax: (${taxRate * 100}%): KSh ${tax}
    Total: KSh ${total}
  `
}

const customer = { name: "Wanjiru", phone: "+254712000000" };
const item1 = { item: "Notebook", price: 350, qty: 2 };
const item2 = { item: "Pen", price: 50, qty: 1 };
console.log(buildReceipt(customer, 0.16, item1, item2));

const customer2 = { name: "Kanja", phone: "+254712000000" };
const item3 = { item: "Bread", price: 60, qty: 1 };
const item4 = { item: "Milk", price:65, qty: 4 };
console.log(buildReceipt(customer2, 0.16, item3, item4));

const customer3 = { name: "Melvin", phone: "+254712000000" };
const item5 = { item: "Pen", price: 45, qty: 5 };
const item6 = { item: "Notebook", price: 350, qty: 4 };
console.log(buildReceipt(customer3, 0.16, item5, item6));

<!-- MY PROMPT: -->
This is my build receipt funtion, I want you to extend it with a discount feature: a customer-level discount percentage that reduces the subtotal before tax.
function buildReceipt({name, phone}, taxRate = 0.16, ...items){
  let subTotal = 0;

  const itemLines = items.map(({item, price, qty}) => {
    const cost = price * qty;
    subTotal += cost;
    return `${qty} X ${item} @ KSH ${price} = KSH ${cost}`
  }).join("\n    ");

  const tax = subTotal * taxRate;
  const total = subTotal + tax;

  return `
    Receipt for ${name} (${phone})
    ------------------------------------
    ${itemLines}    
    ------------------------------------
    Sub-total: KSH ${subTotal}
    Tax: (${taxRate * 100}%): KSh ${tax}
    Total: KSh ${total}
  `
}

const customer = { name: "Wanjiru", phone: "+254712000000" };
const item1 = { item: "Notebook", price: 350, qty: 2 };
const item2 = { item: "Pen", price: 50, qty: 1 };
console.log(buildReceipt(customer, 0.16, item1, item2));

const customer2 = { name: "Kanja", phone: "+254712000000" };
const item3 = { item: "Bread", price: 60, qty: 1 };
const item4 = { item: "Milk", price:65, qty: 4 };
console.log(buildReceipt(customer2, 0.16, item3, item4));

const customer3 = { name: "Melvin", phone: "+254712000000" };
const item5 = { item: "Pen", price: 45, qty: 5 };
const item6 = { item: "Notebook", price: 350, qty: 4 };
console.log(buildReceipt(customer3, 0.16, item5, item6));


<!-- AI BUILD -->
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