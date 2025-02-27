let todo = [];

// Prompt the user to enter a request
let req = prompt("please enter your request");

// This while loop will keep running until the user types "quit".
while (true) {
  if (req === "quit") {
    console.log("quiting todo");
    break;
  }
  
// If the user types "list", the program will print all the tasks in the todo list.
// If the user types "add", the program will prompt the user to enter a task and add it to the todo list.
// If the user types "delete", the program will prompt the user to enter the index of the task they want to delete and remove it from the todo list.
  if (req === "list") {
    console.log("----------");
    for (let i = 0; i < todo.length; i++) {
      console.log(i, todo[i]);
    }

    console.log("----------");

  } else if (req === "add") {
    let task = prompt("please enter your task");
    todo.push(task);
  } else if (req === "delete") {
    let idx = prompt("enter index of task that you want to delete");

    todo.splice(idx, 1);
  } else {
    console.log("wrong request");
  }

  req = prompt("please enter your request");
  
}