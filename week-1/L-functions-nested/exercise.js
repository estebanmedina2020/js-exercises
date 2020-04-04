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

let mentor1 = "Daniel";
let greeting = "Hello ";
function firstGreeting(mentor1, greeting) {
  return greeting + mentor1;
}
firstGreeting(mentor1, greeting);
console.log(firstGreeting(mentor1, greeting).toUpperCase());

let mentor2 = "Irina";
function secondGreeting(mentor2, greeting) {
  return greeting + mentor2;
}
secondGreeting(mentor2, greeting);
console.log(secondGreeting(mentor2, greeting).toUpperCase());

let mentor3 = "Mimi";
function thirdGreeting(mentor3, greeting) {
  return greeting + mentor3;
}
thirdGreeting(mentor3, greeting);
console.log(thirdGreeting(mentor3, greeting).toUpperCase());

let mentor4 = "Rob";
function fourthGreeting(mentor4, greeting) {
  return greeting + mentor4;
}
fourthGreeting(mentor4, greeting);
console.log(fourthGreeting(mentor4, greeting).toUpperCase());

let mentor5 = "Yohannes";
function fifthGreeting(mentor5, greeting) {
  return greeting + mentor5;
}
fifthGreeting(mentor5, greeting);
console.log(fifthGreeting(mentor5, greeting).toUpperCase());
