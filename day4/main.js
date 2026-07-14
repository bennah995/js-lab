// TASK 1
// Grading function
function gradeFor(score){
  if(score >= 90) return "A";
  else if(score >= 80) return "B";
  else if(score >= 70) return "C";
  else if(score >= 60) return "D";
  else return "F";
}

console.log(gradeFor(91));
console.log(gradeFor(81));
console.log(gradeFor(71));
console.log(gradeFor(61));
console.log(gradeFor(59));

// Season check function
function seasonFor(month){
  if(month >= 4 && month <= 5 ) return "Long rains";
  else if(month >= 6 && month <= 10 ) return "Cool dry";
  else if(month >= 11 && month <= 12 ) return "Short rains";
  else if(month >= 1 && month <= 3 ) return "Hot dry";
  return "enter a valid month"
}

console.log(seasonFor(2));
console.log(seasonFor(4));
console.log(seasonFor(7));
console.log(seasonFor(12));

// can vote function
function canVote(age, citizenship){
  if(age >= 18 && citizenship === "Kenyan") return "True";
  return "False";
}

console.log(canVote(18, "Kenyan"));
console.log(canVote(17, "Kenyan"));
console.log(canVote(19, "Ugandan"));

// TASK 2
function dayOfWeek(num){
  // switch
  switch(num){
    case 1: return "Monday";
    case 2: return "Tuesday";
    case 3: return "Wednesday";
    case 4: return "Thursday";
    case 5: return "Friday";
    case 6: return "Saturday";
    case 7: return "Sunday";
    default: return "We only have 7 days";
  }

  // if statement
  // if(num === 1) return "Monday";
  // else if(num === 2) return "Tuesday";
  // else if(num === 3) return "Wednesday";
  // else if(num === 4) return "Thursday";
  // else if(num === 5) return "Friday";
  // else if(num === 6) return "Saturday";
  // else if(num === 7) return "Sunday";
  // else return "We only have 7 days";

  // I prefer the switch case for this one- It is easy to write and read, and it also has a clean layout
}
console.log(dayOfWeek(7));


// TASK 3: LOOP DRILLS
// 1
// for(i = 1; i <= 20; i++){
//   console.log(i)
// }

// 2: Use a while loop to count down from 10 to 1.
// let j = 10
// while(j >= 1){
//   console.log(j);
//   j--;
// }

// 3: Use a do...while loop that runs at least once even when its condition is false from the start.
// let k = 1
// do {
//  console.log(k);
//  k++;
// } while(false)


// 4: Use a for loop with break that stops at the first multiple of 7 between 1 and 100.
for(let m = 1; m <= 100; m++){
  if(m % 7 === 0){
    console.log(`first multiple of 7 is: ${m}`);
    break;
  }
}

//5: Use a for loop with continue that prints only odd numbers from 1 to 20.
// for(let n = 1; n <= 20; n++){
//   if(n % 2 === 0){
//     continue;
//   }
//   console.log(n);
// }

//6: FizzBuzz for 1 to 30: print "Fizz" for multiples of 3, "Buzz" for multiples of 5, "FizzBuzz" for multiples of both, and the number otherwise.
for(let p = 1; p <= 30; p++){
  if(p % 5 === 0 && p % 3 === 0){
    console.log(`${p}: FizzBuzz`);
  } else if (p % 3 === 0){
    console.log(`${p}: Fizz`)
  } else if (p % 5 === 0){
    console.log(`${p}: Buz`)
  } else {
    console.log(p);
  }
}