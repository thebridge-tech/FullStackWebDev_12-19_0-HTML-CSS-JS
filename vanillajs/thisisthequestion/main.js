//"use strict";

/* ------- Global scope (window) ------- */

// alert("Hola Mundo");

/* ------- Single function ------- */

//var alarm = function() {
function alarm() {
  let word = "Hello";
  this.alert(word);
}
//alarm();

/* ------- Function w/ subfunction ------- */
function alarmWithAlert() {
  function alert() {
    console.log("Rrrriiiiiiiiiiinggg!!");
  }

  this.alert();
}
//alarmWithAlert();

/* ------- (Object) Constructor function ------- */

function ClassicClock(h, m, s) {
  // Properties
  this.hour = h;
  this.minutes = m;
  this.seconds = s;

  // Methods
  this.alarm = function() {
    console.log("Rrrriiiiiiiiiiinggg");
  };
}

var myClassicClock = new ClassicClock(9, 53, 48);
//console.log(myClassicClock.minutes);
//myClassicClock.alarm();

/* ------- (Object) Class notation ------- */

class ModernClock {
  constructor(h, m, s) {
    this.hour = h;
    this.minutes = m;
    this.seconds = s;
  }

  alarm() {
    console.log("Rrrriiiiiiiiiiinggg");
  }
}

var myModernClock = new ModernClock(13, 16, 23);
//console.log(myModernClock.hour);
//myModernClock.alarm();

/* ------- (Object) Literal notation ------- */

var myLiteralClock = {
  hour: 9,
  minutes: 53,
  seconds: 48,
  alarm: function() {
    console.log("Rrrriiiiiiiiiiinggg");
  }
};

//myLiteralClock.alarm();

/* ------- bind / apply / call ------- */

function GoldFish(name) {
  this.name = name;

  this.swim = function(x, y, z, r) {
    console.log("I'm swimming!!");
  };

  this.sayName = function(x, y, z, r) {
    console.log(this.name);
  };
}

function ArrowBird(name) {
  this.name = name;

  this.fly = (x, y, z, r) => {
    console.log("I'm flying!!");
  };

  this.sayName = (x, y, z, r) => {
    console.log(this.name);
  };
}

let nemo = new GoldFish("Nemo");
let woody = new ArrowBird("Woody");

// - Nemo learns how to fly from Woody (forever)
nemo.fly = woody.fly;
//nemo.fly();

// - Woody learns how to swim from Nemo (forever)
woody.swim = nemo.swim.bind(woody);
//woody.swim();

// - Woody learns to swim from Nemo (once)
//nemo.swim.call(woody, 2, 4, -8, 10);
//nemo.swim.apply(woody, [2, 4, -8, 10]);

// - Nemo & Woody say their names (if they can)
//nemo.sayName();
//woody.sayName();
