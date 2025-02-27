//=========================================== Array Destructuring ===========================================//

let names = ["tony", "bruce", "peter", "steve", "abc", "xyz", "pyq"];
// An array 'names' containing multiple string values.


// Traditional way to assign values (without destructuring):
// let winner = names[0]; // Assigns the first element
// let runnerup = names[1]; // Assigns the second element
// let secondRunnerup = names[2]; // Assigns the third element


// Using Array Destructuring:
let [winner, runnerup, secondRunnerup, ...others] = names;
// The first three elements of 'names' are assigned to 'winner', 'runnerup', and 'secondRunnerup'.
// The rest operator (...others) collects the remaining elements into an array called 'others'.

console.log(winner, runnerup, secondRunnerup, others);  
// Logs: "tony" "bruce" "peter" ["steve", "abc", "xyz", "pyq"]
// The first three elements are stored in separate variables,
// while the rest of the elements are grouped into the 'others' array.
