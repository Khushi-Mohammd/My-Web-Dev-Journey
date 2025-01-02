let colors = ["Red", "Yellow", "Blue", "Orange", "Pink", "White"];
console.log(colors);

colors.splice(5);
console.log(colors);

colors.splice(0, 1);  // Here first argument(0) is index from we want to start or want to access and second argument(1) is not index, it is the count of number of values we want to remove from an array.
console.log(colors);

colors.push("White");
colors.push("Violet");
console.log(colors);

colors.splice(1, 2);  // Here first argument(1) is index from we want to start or want to access and second argument(2) is not index, it is the count of number of values we want to remove from an array.
console.log(colors);

colors.splice(0, 0, "Green", "Blue", "Orange");
console.log(colors);

colors.splice(1, 0, "Purple");
console.log(colors);

colors.splice(1, 0, "Indigo");  // Here first argument(1) is index from we want to start or want to access and second argument(0) is not index, it is the count of number of values we want to remove from an array.
console.log(colors);