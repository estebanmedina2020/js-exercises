// An array of mentor names has been provided to you, as well as a function to tidy up strings.
// Declare a  new array (`mentorsTidy`) containing:
// - every item from `mentors` run through the `tidyUpString` function
// TIP: Use the .map() method

function tidyUpString(str) {
  return str.trim().toLowerCase().replace("/", "");
}

let mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];
let mentorsTidy = mentors.map(function tidyUpString(str) {
  return str.trim().toLowerCase().replace("/", "");
}); // ONLY EDIT THIS LINE

console.log(mentorsTidy);

/* 
  EXPECTED RESULT
  ---------------
  ["daniel", "irina", "gordon", "ashleigh"]
*/
