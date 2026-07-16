PSEUDOCODE:

initialize vowel and consonat at 0
Loop through each character in provided string
If it is a vowel, increase vowel count by 1
Else if it is a consonant, increase consonant count by 1
Return the total number of vowels and consonants

My manual working version: 
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


AI PROMPT
This is my version of a function that counts vowels and consonants, is there a way I can make it better 

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


AI VERSION
function countVowelsAndConsonants(s) {
  let vowels = 0;
  let consonants = 0;

  const vowelsList = ["a", "e", "i", "o", "u"];

  for (const char of s.toLowerCase()) {
    if (!/[a-z]/.test(char)) continue;

    if (vowelsList.includes(char)) {
      vowels++;
    } else {
      consonants++;
    }
  }

  return { vowels, consonants };
}

I decided to go with my version as it looks more good and 