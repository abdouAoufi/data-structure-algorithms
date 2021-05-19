const students = [
  { name: "Abdou", score: 8 },
  { name: "Yacine", score: 12 },
  { name: "Adel", score: 11 },
  { name: "Belaid", score: 13 },
  { name: "Dounia", score: 12 },
  { name: "Amira", score: 8 },
  { name: "Amine", score: 10 },
  { name: "Wassim", score: 10 },
];

const sortedArray = students
  .sort(function (studentA, studentB) {
    return studentA.score - studentB.score;
  })
  .reverse();

console.log(sortedArray);

const sortedByNames = students.sort(function (studentA, studentB) {
  var nameA = studentA.name.toUpperCase(); // ignore upper and lowercase
  var nameB = studentB.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});

console.log(sortedByNames)