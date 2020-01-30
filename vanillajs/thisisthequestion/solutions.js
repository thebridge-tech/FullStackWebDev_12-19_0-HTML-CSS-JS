/***********************************************
 *
 *              Ejemplos de this
 *
 **********************************************/

/*
Leyenda:

D&A: Declarations y Assigments
Q&T: Questions y Testing
*/

/***
 *
 * 1) Invocación directa
 *
 ***/

// - D&A

function sayMessage(message) {
  console.log(message);
}

var whoAmI = function() {
  console.log(this);
};

// - Q&T

sayMessage("Hello World"); // "Hello World"
whoAmI(); // Window (wo/ "use strict")

/***
 *
 * 2) Objeto literal
 *
 ***/

// - D&A

const janeDoe = {
  message: "Hello World",

  whoAmI: function() {
    console.log(this);
  },

  sayMessage: function() {
    console.log(this.message);
  }
};

// - Q&T

janeDoe.whoAmI(); // Object (janeDoe)
janeDoe.sayMessage(); // "Hello World"

/***
 *
 * 3) Función constructora (new instance)
 *
 ***/

// - D&A

function PolitePerson() {
  this.message = "Hello World";

  this.whoAmI = function() {
    console.log(this);
  };

  this.sayMessage = function() {
    console.log(this.message);
  };
}

// - Q&T

var johnDoe = new PolitePerson();
johnDoe.whoAmI(); // Object (janeDoe)
johnDoe.sayMessage(); // "Hello World"

/***
 *
 * 4) call, apply, bind
 *
 ***/

// - D&A

function whoAmI() {
  console.log(this);
}

function sayMessage(message1, message2, message3) {
  console.log(message1.concat(" " + message2).concat(" " + message3));
}

const data = {
  message: "Hello World"
};

// - Q&T

whoAmI.call(data); // Object data { message: "Hello World" }
whoAmI.apply(data); // Object data { message: "Hello World" }

sayMessage.call(data, "Bye", "Bye", "Beatiful"); // "Bye Bye Beatiful"
sayMessage.apply(data, ["Bye", "Bye", "Beatiful"]); // "Bye Bye Beatiful"

const boundWhoAmI = whoAmI.bind(data);
boundWhoAmI(); // Object data { message: "Hello World" }

/***
 *
 * 5) Funciones flecha (alcance léxico)
 *
 ***/

// - D&A

const janeDoe = {
  message: "Hello World",

  whoAmI: () => {
    console.log(this);
  },

  sayMessage: () => {
    console.log(this.message);
  }
};

const johnDoe = {
  message: "Hello World",

  whoAmI: function() {
    return () => {
      console.log(this);
    };
  },

  sayMessage: function() {
    return () => {
      console.log(this.message);
    };
  }
};

// - Q&T

janeDoe.whoAmI(); // ???
janeDoe.sayMessage(); // ???

const arrowWhoAmI = johnDoe.whoAmI();
arrowWhoAmI(); // ???

const arrowSayMessage = johnDoe.sayMessage();
arrowSayMessage(); // ???
