// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Not ideal solution but would give something to talk about with interviewer
// Takes advantage of an advanced array helper - but does double the work than you need
function palindrome(str) {
  return str.split("").every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

module.exports = palindrome;

// Solution
// function palindrome(str) {
//     const reversed = str.split("").reverse().join("");
//     return str === reversed;
//   }
