let inputs = document.querySelectorAll('input');
let btnClear = document.querySelector('button');


document.addEventListener('keydown', function(event) {
    // Check if the Enter key was pressed
    if (event.keyCode === 32) {
        inputs.forEach(input => input.value = "");
    }
  });
  

