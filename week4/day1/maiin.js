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

// function countVowelsAndConsonants(s) {
//   let vowels = 0;
//   let consonants = 0;

//   const vowelsList = ["a", "e", "i", "o", "u"];

//   for (const char of s.toLowerCase()) {
//     if (!/[a-z]/.test(char)) continue;

//     if (vowelsList.includes(char)) {
//       vowels++;
//     } else {
//       consonants++;
//     }
//   }

//   return { vowels, consonants };
// }
// console.log(countVowelsAndConsonants("My name is Benard"));
// console.log(countVowelsAndConsonants("Benard"));