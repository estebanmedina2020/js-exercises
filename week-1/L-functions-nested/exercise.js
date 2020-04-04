/*
var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";
*/

let students = 15;
let mentors = 8;
let people = 23;
function studentPercentage(students, people) {
  return (students / people) * 100;
}
function roundedStudentPercentage(percentage) {
  return Math.round(percentage);
}
roundedStudentPercentage(studentPercentage(students, people));
console.log(
  "Percentage students: " +
    roundedStudentPercentage(studentPercentage(students, people))
);

function mentorsPercentage(mentors, people) {
  return (mentors / people) * 100;
}
function roundedMentorsPercentage(percentage) {
  return Math.round(percentage);
}
roundedMentorsPercentage(mentorsPercentage(mentors, people));
console.log(
  "Percentage mentors: " +
    roundedMentorsPercentage(mentorsPercentage(mentors, people))
);
