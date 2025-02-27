let cars = ["Audi", "BMW", "Aston Martin", "Lemborgini", "Rolls Royce"];
console.log(cars);

console.log(cars.indexOf("Aston Martin")); // indexOf() method returns the index of the first occurrence of the specified element in the array.
console.log(cars.indexOf("aston martin")); // indexOf() method returns -1 if the specified element is not found in the array.
console.log(cars.indexOf("BMW"));

console.log(cars.includes("Rolls Royce")); // includes() method returns true if the specified element is found in the array, otherwise it returns false.
console.log(cars.includes("Audi"));
console.log(cars.includes("audi")); // includes() method returns false if the specified element is not found in the array.