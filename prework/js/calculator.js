/* ----------- Initialize ----------- */
var number1;
var number2;
var number3;

var messages = [
  "Dime un número",
  "Dime otro número",
  "Dime la operación (+ - * /)",
  "¿Es correcto?"
];

var operation;
var result;

function getNumber(message) {
  var input;

  input = prompt(message);
  // (Validar)

  return input;
}

/* ----------- Main program ----------- */
// Pedir primer número
number1 = getNumber(messages[0]);

// Pedir segundo número
number2 = getNumber(messages[1]);

// Pedir la operación
number3 = getNumber(messages[2]);

// Montar la operación
// operation = ...

// Mostrar la salida
alert(result);

// Confirmar la salida
if (confirm(messages[3]) == true) {
  alert("Uno se alegra de ser útil");
} else {
  alert("Lo siento, lo haré mejor la próxima vez");
}

// -----------------------------------

console.log(messages.length);
console.log(messages[1]);

messages[1] = "otro mensaje";
console.log(messages[1]);

messages[messages.length] = 89;
messages.push("asdasdas");

var me = {
  name: "David",
  surname: "Carvajal",
  skills: ["html", "css", "js"],
  age: 37
};
console.log("Me llamo " + me.name);

me.bootcamp = "fullstack web dev";
console.log("e imparto " + me.bootcamp);
