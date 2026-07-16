// TASK 1
function makeCounter() {
  let count = 0;
  return function() {
    count += 1;
    return count;
  };
}

const c1 = makeCounter();
const c2 = makeCounter();
console.log(c1()); // 1
console.log(c1()); // 2
console.log(c2()); // 1 -- independent
console.log(c1()); // 3

// TASK 2
function memoise(fn) {
  const cache = {};
  return function(arg) {
    if (cache[arg] !== undefined) return cache[arg];
    const result = fn(arg);
    cache[arg] = result;
    return result;
  };
}

const slowSquare = (n) => { console.log("computing"); return n * n; };
const fastSquare = memoise(slowSquare);

console.log(fastSquare(4)); // prints "computing", returns 16
console.log(fastSquare(4)); // does NOT print, returns 16 from cache
console.log(fastSquare(5)); // prints "computing", returns 25

// TASK 3
const globalVar = "I am global";

function outer() {
  const outerVar = "I am outer";
  function inner() {
    const innerVar = "I am inner";
    console.log(globalVar, outerVar, innerVar);
  }
  inner();
}
outer();