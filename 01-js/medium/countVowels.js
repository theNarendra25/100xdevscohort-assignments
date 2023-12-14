/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let vowelCount = 0;
    let cleanString = str.replace(/\s/g,'').toLowerCase();
    for(let i=0;i<cleanString.length;i++){
      if(cleanString[i]==='a'||cleanString[i]==='e'||cleanString[i]==='i'||cleanString[i]==='o'||cleanString[i]==='u'){
        vowelCount++;
      }
    }
    return vowelCount;
}

module.exports = countVowels;