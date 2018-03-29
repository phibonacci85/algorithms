// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let histogram = {};
  let max = 0;
  let maxChar = '';
  for(let i = 0; i < str.length; i++) {
    let x = str.charAt(i);
    if(histogram.hasOwnProperty()) {
      histogram[x]++;
    } else {
      histogram[x] = 1;
    }
    if(histogram[x] > max) {
      maxChar = x;
    }
  }
  return maxChar;
}

module.exports = maxChar;
