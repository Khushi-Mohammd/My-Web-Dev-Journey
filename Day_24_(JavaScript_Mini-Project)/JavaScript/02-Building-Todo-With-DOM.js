// Select the input field where the user types the task
let inp = document.querySelector("input");

// Select the button with class "add" that will be used to add tasks
let btn = document.querySelector(".add");

// Select the unordered list (ul) where tasks will be added
let lis = document.querySelector("ul");

// Adding a click event listener to the "Add" button
btn.addEventListener("click", function (event) {
  // Create a new list item (li) to store the task
  let task = document.createElement("li");

  // Create a delete button to remove the task later
  let delBtn = document.createElement("button");

  // Add a class "delete" to the delete button for styling or future reference
  delBtn.classList.add("delete");

  // Set the text of the delete button
  delBtn.innerText = "Delete";

  // Set the text of the new task (li) as the input value followed by a space
  task.innerText = inp.value + " ";

  // Append the delete button to the task
  task.append(delBtn);

  // Append the task (li) to the unordered list (ul)
  lis.appendChild(task);

  // Clear the input field after adding the task
  inp.value = "";
});

// Adding an event listener to the unordered list to handle delete button clicks
lis.addEventListener("click", function (event) {
  // Check if the clicked element is a button
  if (event.target.nodeName === "BUTTON") {
    // Remove the parent element (li) of the clicked button
    event.target.parentElement.remove();
  }
});

/*
   Explanation of the Code:

   1. The user types a task in the input field and clicks the "Add" button.
   2. When the "Add" button is clicked:
      - A new list item (li) is created.
      - A delete button is created and added inside the list item.
      - The text from the input field is added to the list item.
      - The list item is appended to the unordered list (ul).
      - The input field is cleared after adding the task.
   3. When a delete button is clicked inside the list:
      - The event listener on the ul detects the click.
      - It checks if the clicked element is a button.
      - If true, it removes the parent list item (li), deleting the task.

   Key Concepts Used:

   - Event Delegation: Instead of adding a click event listener to each delete button separately,
     we add a single event listener to the ul. This is more efficient because new tasks are dynamically
     added, and event delegation ensures all delete buttons work without extra event listeners.
   - DOM Manipulation: Creating elements, appending them, and removing them dynamically.
   - Clearing Input Field: Resetting the input field after adding a task.
*/
