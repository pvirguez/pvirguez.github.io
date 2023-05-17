// Modal Script

// get references to the modal elements
const modal = document.getElementById('modal');
const imageButton = document.getElementById('image-button');
const close = document.getElementsByClassName('close')[0];

// add a click event listener to the image button
imageButton.addEventListener('click', function() {
  // display the modal
  modal.style.display = 'block';
});

// add a click event listener to the close button
close.addEventListener('click', function() {
  // hide the modal
  modal.style.display = 'none';
});

// add a click event listener to the modal
window.addEventListener('click', function(event) {
  if (event.target == modal) {
    // hide the modal
    modal.style.display = 'none';
  }
});


// Pico & PLaca Script

function checkRestriction() {
  // Get the input value
  const input = document.getElementById("input").value;
  
  // Get the current date
  const today = new Date();
  const dayOfMonth = today.getDate();
  
  // Determine if the vehicle can circulate today
  let canCirculate = false;
  if (dayOfMonth % 2 == 0 && (input == 6 || input == 7 || input == 8 || input == 9 || input == 0)) {
      canCirculate = true;
  } else if (dayOfMonth % 2 == 1 && (input == 1 || input == 2 || input == 3 || input == 4 || input == 5)) {
      canCirculate = true;
  }
  
  // Display the result
  if (canCirculate) {
      document.getElementById("result").innerHTML = "Salga con confianza 🏎️";
  } else {
      document.getElementById("result").innerHTML = "Pilo con los tombos 🚔";
  }
}
