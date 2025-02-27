// Select the first div element from the document  
let div = document.querySelector("div");  

// Select the first ul element from the document  
let ul = document.querySelector("ul");  

// Select all li elements inside the ul  
let lis = document.querySelectorAll("li");  

// Adding a click event listener to the div  
div.addEventListener("click", function () {  
  console.log("div was clicked");  
});  

// Adding a click event listener to the ul  
// event.stopPropagation() is used here to prevent event bubbling  
// Without this, clicking on ul would also trigger the div's click event  
ul.addEventListener("click", function (event) {  
  event.stopPropagation(); // Stops the event from propagating to parent elements  
  console.log("ul was clicked");  
});  

// Looping through each li element and adding a click event listener  
// event.stopPropagation() prevents the event from bubbling up to ul and div  
for (li of lis) {  
  li.addEventListener("click", function (event) {  
    event.stopPropagation(); // Stops the event from propagating to parent elements  
    console.log("li was clicked");  
  });  
}  

/*
   Explanation of Event Bubbling  

   Event bubbling is a process in the DOM where an event triggered on a child element 
   first runs its handler and then propagates to its parent elements, continuing 
   until it reaches the root document.  

   In this code, if you click on an li element, normally the event would also 
   trigger the ul and div click events. If you click on ul, the event would normally 
   also trigger the div click event.  

   Purpose of event.stopPropagation()  

   event.stopPropagation() prevents the event from bubbling up to parent elements.  

   This means clicking an li only logs "li was clicked" and does not log "ul was clicked" 
   or "div was clicked". Clicking the ul only logs "ul was clicked" and does not log "div was clicked".  

   Without event.stopPropagation()  

   Clicking an li would log:  
   1. "li was clicked"  
   2. "ul was clicked"  
   3. "div was clicked"  

   Clicking the ul would log:  
   1. "ul was clicked"  
   2. "div was clicked"  

   Clicking the div would log only:  
   1. "div was clicked"  
*/
