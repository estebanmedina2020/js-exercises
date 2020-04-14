// Update the variable `sortedLetters`.
// It should contain the values of `letters` and `letters2` in ascending order

let letters = ["a", "n", "c", "e", "z", "f"];
let letters2 = ["w", "b", "v", "g", "l", "o"];
let sortedLetters = sortedLetters.sort(letters + letters2); // ONLY EDIT THIS LINE

console.log(sortedLetters);

/* 
  EXPECTED RESULT
  ---------------
  [ 'a', 'b', 'c', 'e', 'f', 'g', 'l','n', 'o', 'v', 'w', 'z' ]
*/

var letters = ["a", "n", "c", "e", "z", "f"];
var letters2 = ["w", "b", "v", "g", "l", "o"];
var sortedLetters = sort(function (letters, letters2) {
  return letters[""] + letters2[""];
}); // ONLY EDIT THIS LINE

console.log(sortedLetters);
