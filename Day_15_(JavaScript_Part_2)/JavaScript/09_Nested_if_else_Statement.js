let age = 25;
let hasLicense = true;

// Nested if else statement.

if (age >= 18) { // if age is greater than or equal to 18 then this block will execute.
  if (hasLicense) { // if hasLicense is true then this block will execute.
    console.log("You are eligible to drive.");
  } else { // if hasLicense is false then this block will execute.
    console.log("You need a driving license to drive.");
  }
} else { // if age is less than 18 then this block will execute.
  console.log("You are too young to drive.");
}