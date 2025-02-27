let fruits = ["Mangos", "Apples", "Litchies"];
console.log(fruits);

fruits[0] = "Bananas";
console.log(fruits); // Value of array's 0th index has changed because arrays are Mutable.

fruits[1] = "Pineapple";
console.log(fruits); // Value of array's 1st index has changed because arrays are Mutable.

fruits[10] = "Papaya";
console.log(fruits); // Value "Papaya" has stored at 10th index in "fruits" array, and indexes from 3 to 9 are empty.
