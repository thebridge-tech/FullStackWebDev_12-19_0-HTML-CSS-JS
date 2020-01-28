// Global variables
var buttons = document.getElementsByClassName("btn");

// From first to last...
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", play);
}

// Global functions
function getRandom() {
  return Math.random();
}

// Handler functions
function play() {
  var jugada = getRandom();

  console.log("holiiii");

  // Game logic
  // ...
}
