
// ----------------------- Global variables -----------------------

var heroes = [];
var turn = 0;

// ----------------------- Global functions -----------------------

function createHero() {
	function getDamagePoints(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}

	// Creo mi objeto "plantilla"
	var myHero = {
		name: "",
		class: "",
		lifePoints: 0,
		magicPoints: 0,
		attack: function(target) {
			if(this.class == "Warrior") {
				target.lifePoints -= getDamagePoints(1,4); // Less life to OTHER
			}
			else
			if(this.class == "Mage") {
				if(this.magicPoints > 0) {
					target.lifePoints -= getDamagePoints(2,5); // Damages OTHER
					this.magicPoints--; // Less magic to ME
				}
				else {
					target.lifePoints--;
				}
			}
		}
	};

	// Asigno nombre y profesión
	myHero.name = prompt("Which is your name?");

	do {
		myHero.class = prompt("Which is your class (Warrior/Mage)?");

	} while (myHero.class != "Warrior" && myHero.class != "Mage");

	// Asigno valores iniciales según la profesión
	switch (myHero.class) {
		case "Warrior":
			myHero.lifePoints = 10;
			myHero.magicPoints = 0;
			break;
		case "Mage":
			myHero.lifePoints = 6;
			myHero.magicPoints = 4;
			break;
		default:
			break;
	}

	return myHero;
}

// ----------------------- Main program ----------------------- 

// Create my heroes
heroes.push(createHero());
heroes.push(createHero());

// Play
do {
	turn++;

	heroes[0].attack(heroes[1]);
	heroes[1].attack(heroes[0]);

	console.log("Round " + turn);
	console.log("Hero 1: " + heroes[0].lifePoints);
	console.log("Hero 2: " + heroes[1].lifePoints);
} while (heroes[0].lifePoints > 0 && heroes[1].lifePoints > 0);