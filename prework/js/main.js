/* ---------- Declaring variables ---------- */
var message;
message = 'Hello David\'s "Happy" World, today is... ';

var today;
today = 10;

var yesterday;
yesterday = 3;

var toMonth;
toMonth = 12;

var toYear;
toYear = 2019;

var result;
result = today + yesterday;

var alive = true; // Boolean

/* ---------- Output ---------- */
console.log(message + today);
console.log(typeof message);
console.log(result);

if (today == 25 && toMonth == 12) {
  console.log("Hoy es Navidad");
} else {
  console.log("Hoy NO es Navidad");
}

if (today == 25) {
  if (toMonth == 12) {
    console.log("Hoy es Navidad");
  } else {
    console.log("Hoy NO es diciembre");
  }
} else {
  console.log("Hoy NO es 25");
}

// --------------------------------

var tries = 0;

while (tries < 3) {
  console.log("Connecting..." + tries + " time");

  tries++;
}
