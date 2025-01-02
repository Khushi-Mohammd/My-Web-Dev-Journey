let names = ["tony", "bruce", "peter", "steve", "abc", "xyz", "pyq"];

// let winner = names[0];
// let runnerup = names[1];
// let secondRunnerup = names[2];

let [winner, runnerup, secondRunnerup, ...others] = names; // Same as upper three lines
console.log(winner, runnerup, secondRunnerup, others);