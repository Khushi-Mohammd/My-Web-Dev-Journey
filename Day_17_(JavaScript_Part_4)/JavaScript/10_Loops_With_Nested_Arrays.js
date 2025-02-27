// let heroes = [
//   ["ironman", "spiderman", "thor"],
//   ["superman", "wonder woman", "flash"]
// ]; // 2D array

// // Iterate over the 2D array using a for loop
// for (let i = 0; i < heroes.length; i++) {
//   console.log(i, heroes[i]);
//   for (let j = 0; j < heroes[i].length; j++) {
//     console.log(`j = ${j}, ${heroes[i][j]}`);
//   }
// }

// // Iterate over the 2D array using a for loop in reverse order.
let students = [["aman", 95], ["shradha", 94.4], ["karan", 100]];

// Iterate over the 2D array using a for loop
for (let i = 0; i < students.length; i++) {
  console.log(`info of student #${i+1}`);
  for (let j = 0; j < students[i].length; j++) {
    console.log(students[i][j]);
  }
}