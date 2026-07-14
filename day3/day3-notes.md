Value 1:
Input was: 

price = 1500;
quantity = 3;
taxRate = 0.16;

Result:
Input:

Subtotal: KSh 18000
Tax: KSh 2880
Total: KSh 20880.00


Value 2: 
Input: 

price = 4500;
quantity = 4;
taxRate = 0.16;

result:
Subtotal: KSh 18000
Tax: KSh 2880
Total: KSh 20880.00

Value 3
Input:

price = 4500;
quantity = 4;
taxRate = 0.16;

Result:
Subtotal: KSh 180000
Tax: KSh 28800
Total: KSh 208800.00


TASK 2:

I was surprised with how for each looped over and went through everything in my array.
-an empty array and object were truthy | I expected them to be falsy since they contain no data

-strings that have 0 as value return truthy | 


// TASK 5
// Fix 1: I did with 0.25 since it is the representation of 25%
const discount = 200 * 0.25;

// Fix 2: I added the equal sign in the condition so it checks whether the age is greater than or equal to 18
const age = 18;
if (age >= 18) console.log("You are an adult");


// Fix 3: I used template literals to concatenate in the console log line
const a = "5";
const b = 3;
console.log(`${a} + ${b}`);