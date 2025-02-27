let color = "green";

// switch statement.

switch (color) {
  case "red": // if color is red then this block will execute.
    console.log("stop");
    break; // break statement to exit the switch statement.
  case "yellow": // if color is yellow then this block will execute.
    console.log("slow down");
    break; // break statement to exit the switch statement.
  case "green": // if color is green then this block will execute.
    console.log("go");
    break; // break statement to exit the switch statement.
  default: // if color is not red, yellow or green then this block will execute.
    console.log("light is broken");
}
