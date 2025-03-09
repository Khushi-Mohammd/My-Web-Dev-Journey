// Creating an array arr1 and arr2 with the same elements
// However, they are separate instances in memory
arr1 = [1, 2, 3]; // arr1 is an array object
arr2 = [1, 2, 3]; // arr2 is another independent array object

// Modifying the prototype (__proto__) of arr1
arr1.__proto__.push = (a) => {
  // Defining a custom push method on arr1's prototype
  console.log("pushing to arr1", a); // Logs when push is called on arr1
};

// Adding a method 'sayHello' to arr1 directly
arr1.sayHello = () => {
  console.log("hello"); // This method logs "hello" when called
};

// Adding the same method 'sayHello' to arr2 directly
arr2.sayHello = () => {
  console.log("hello");
};

// Comparing the sayHello methods of arr1 and arr2
console.log(arr1.sayHello === arr2.sayHello);
// false -> Since sayHello is defined separately for each array, they are different function instances

// Comparing the toUpperCase method of two string literals
console.log("abc".toUpperCase === "xyz".toUpperCase);
// true -> Because toUpperCase is inherited from String.prototype, and all string instances share the same function reference
