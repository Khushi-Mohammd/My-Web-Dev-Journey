let fruits = ["mango", "apple", "banana", "litchi", "orange"];
fruits.push("pineapple");

// Iterate over the array using a for loop
// for (let i = 0; i < fruits.length; i += 2) {
//   console.log(i, fruits[i]);
// }

// Iterate over the array using a for loop in reverse order.
for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(i, fruits[i]);
}