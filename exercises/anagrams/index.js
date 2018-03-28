// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function histogram(string) {
  let histogram = {};
  for(let char of string) {
    if(histogram.hasOwnProperty(char)) {
      histogram[char]++;
    } else {
      histogram[char] = 1;
    }
  }
  return histogram;
}

function charactersOnly(string) {
  return string.replace(/[^a-zA-Z]/g, '');
}

function anagrams(stringA, stringB) {
  let charactersA = stringA.replace(/[^a-zA-Z]/g, '').split('').sort().join('');
  let charactersB = stringB.replace(/[^a-zA-Z]/g, '').split('').sort().join('');

  return charactersA === charactersB;
  /*
  let histogramA = histogram(charactersA.toLowerCase());
  let histogramB = histogram(charactersB.toLowerCase());


  for(let char in histogramA) {
    if(!(histogramB.hasOwnProperty(char) && histogramB[char] === histogramA[char])) {
      return false
    }
  }
  for(let char in histogramB) {
    if(!(histogramA.hasOwnProperty(char) && histogramA[char] === histogramB[char])) {
      return false
    }
  }
  return true;
  */

}

module.exports = anagrams;
