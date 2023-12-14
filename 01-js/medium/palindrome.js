/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let cleanString = str.replace(/[^a-zA-Z]/g,'').toLowerCase();
  let n = cleanString.length;
  n-=1;
  let i = 0;
  while(i<=n){
     if(cleanString[i]===cleanString[n]){
         i++;
         n--;
     }
     else return false;
  }
  return true;
}

module.exports = isPalindrome;
