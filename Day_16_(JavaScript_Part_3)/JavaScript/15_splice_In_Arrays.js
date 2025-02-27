let colors = ["Red", "Yellow", "Blue", "Orange", "Pink", "White"];
console.log(colors);

// If only one argument is passed, it removes all elements starting from the given index and returns the removed elements.
colors.splice(5); 
console.log(colors);

// The first argument (0) is the starting index, and the second argument (1) is the number of elements to remove.
colors.splice(0, 1);
console.log(colors);

colors.push("White");
colors.push("Violet");
console.log(colors);

// The first argument (1) is the starting index, and the second argument (2) is the number of elements to remove.
colors.splice(1, 2);
console.log(colors);

// These values will be added at the index specified by the first argument (0), without removing any elements.
colors.splice(0, 0, "Green", "Blue", "Orange");
console.log(colors);

// "Purple" will be inserted at index 1 without removing any elements.
colors.splice(1, 0, "Purple");
console.log(colors);

// "Indigo" will replace the element at index 1, as one element is being removed before insertion.
colors.splice(1, 1, "Indigo");
console.log(colors);
