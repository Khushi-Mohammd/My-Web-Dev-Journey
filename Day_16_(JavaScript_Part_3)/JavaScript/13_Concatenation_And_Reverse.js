let primary = ["Red", "Yellow", "Blue"];
console.log(primary);

let secondary = ["Orange", "Green", "Violet"];
console.log(secondary);

console.log(primary.concat(secondary));

let allColors = primary.concat(secondary);  // "concat" Method does not changes the original array, it temprarily creates a new array with the concat value.

console.log(allColors);
console.log(primary);

allColors = secondary.concat(primary);

console.log(allColors);
console.log(secondary);

let cars = ["Audi", "BMW", "Aston Martin", "Lemborgini", "Rolls Royce"];
console.log(cars);

cars.reverse();  // "reverse Method changes the orignal value of array"
console.log(cars);