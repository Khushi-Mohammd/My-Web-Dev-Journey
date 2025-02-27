let n = prompt("Please enter a number");
n = parseInt(n);

// This for loop prints the multiplication table of the given number.
for (let i = n; i <= n*10; i = i + n) {
  console.log(i);
}