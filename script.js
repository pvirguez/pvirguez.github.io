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
