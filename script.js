"use strict";
// const marks = [75.25, 65, 80, 35.45, 99.5];
const Name = prompt(`What is Your Name`);
const inputMarks = [
  prompt("What is Your mark in F-101"),
  prompt("What is Your mark in F-102"),
  prompt("What is Your mark in F-103"),
  prompt("What is Your mark in F-104"),
  prompt("What is Your mark in F-105"),
];
const marks = inputMarks.map((num) => {
  return Number(num);
});

/*Using Loop method
let sum = 0;
for (let i = 0; i < marks.length; i++) {
  sum += marks[i];
}
const average = (sum / marks.length).toFixed(2);
console.log(average);
*/

/*For Each Method
let sum = 0;
marks.forEach((num) => {
  sum += num;
});
const average = (sum / marks.length).toFixed(2);
console.log(average);
*/
//Reduce Method

const sum = marks.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
const average = (sum / marks.length).toFixed(2);
document.getElementById(
  "name"
).innerHTML = `Congratulations 🔥🔥 , Mr. ${Name}`;
document.getElementById(
  "demo"
).innerHTML = `Your have got : ${average} Marks in Average`;
