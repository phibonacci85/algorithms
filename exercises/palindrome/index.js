// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    let n = str.charAt(i);
    let x = str.charAt(str.length - 1 - i);
    if (n !== x) return false;
  }
  return true;
}

module.exports = palindrome;
