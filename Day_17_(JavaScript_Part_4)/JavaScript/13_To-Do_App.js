let todo = [];

let req = prompt("please enter your request");

while (true) {
  if (req === "quit") {
    console.log("quiting todo");
    break;
  }

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