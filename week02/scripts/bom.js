// declare three (3) variables that hold references to the input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#chapList');

// Create a click event listener for the Add Chapter button using an addEventListener.
button.addEventListener('click', function() {
    if (input.value.trim() !== '') {                 //using an if block, otherwise provide a message or at least do nothing and return the .focus() to the input field.
        const li = document.createElement('li');    // Create a li element that will hold each entries chapter title and an associated delete button
        li.textContent = input.value;               //Populate the li element variable's textContent or innerHTML with the input value.
        
        //create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❎';           //Populate the button textContent with a ❌
        li.append(deleteButton);                   // Append the li element variable with the delete button
        list.appendChild(li);                        //Append the li element variable to the unordered list in your HTML.

        deleteButton.addEventListener('click', function () {        //Add an event listener to the delete button
            list.removeChild(li);                                   // Remove the <li> when clicked.
        });

        input.value = '';  //Change the input value to nothing or the empty string to clean up the interface for the use
        input.focus();     //Regardless if a list item was created or not, the focus (active cursor) should be sent to the input element
    } else {
        alert('Please enter a chapter name!');  //// If the input is empty, provide a message
        input.focus();
    }
});
