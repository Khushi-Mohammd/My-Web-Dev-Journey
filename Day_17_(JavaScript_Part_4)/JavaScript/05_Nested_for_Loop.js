// This is the nested for loop. The outer loop runs 3 times and the inner loop runs 3 times for each iteration of the outer loop.
for (let i = 1; i <= 3; i++) {
  console.log(`Outer loop ${i}`);
  for (let j = 1; j <= 3; j++) {
    console.log(j);
  }
}