const num = [12, 45, 78, 23, 89, 34, 67, 90];
console.log(num);

let check = num.every( (el) => (el % 2 == 0)); // It will return "true" only if the condition is "true" for all
console.log(check);                            // the elements in an array. otherwise if will return "false".

let check2 = num.every( (el) => el < 100); // It will return "true" only if the condition is "true" for all
console.log(check2);                       // the elements in an array. otherwise if will return "false".

let checkSome = num.some( (el) => (el % 2 == 0)); // "some" function will return "true" if some elements of
console.log(checkSome);                            // array return "true". Otherwise it will return "false".

let checkSome2 = num.some( (el) => el < 20); // "some" function will return "true" if some elements of
console.log(checkSome2);                       // array return "true". Otherwise it will return "false".

let checkSome3 = num.some( (el) => el > 100); // "some" function will return "true" if some elements of
console.log(checkSome3);                       // array return "true". Otherwise it will return "false".