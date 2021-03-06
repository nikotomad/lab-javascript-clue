  // Suspect objects
  var mrGreen = {
      firstName: "Jacob",
      lastName: "Green",
      occupation: "Scientist",
      age: 45,
      image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
      description: "He has a lot of connections and is always willing to help people out -- for a price",
      color: "green"
    };
  var msOrchid = {
    firstName: "Doctor",
    lastName: "Orchid",
    occupation: "Biologist",
    age: 26,
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    description: "She is the adopted daugther of Mr. Boddy, a biologist with a PhD in plant toxicology. She was privately educated in Switzerland until her expulsion after an incident involving daffodils resulted in a near-fatal poisoning",
    color: "white"
  };
  var mrPlum = {
    firstName: "Victor",
    lastName: "Plum",
    occupation: "Videogame Designer",
    age: 22,
    image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    description: "He is a billionaire video game designer who is embracing his new popularity",
    color: "purple"
  };
  var mrScarlet = {
    firstName: "Kasandra",
    lastName: "Scarlet",
    occupation: "Movie star",
    age: 22,
    image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    description: "She is an A-list movie star whose past haunts her.",
    color: "red"
  };
  var msPeacock = {
    firstName: "Eleanor",
    lastName: "Peacock",
    occupation: "Famous Wealthy Person",
    age: 33,
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    color: "blue"
  };
  var mrMustard = {
    firstName: "Jack",
    lastName: "Mustard",
    occupation: "Former Football Player",
    age: 45,
    image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    description: "He is a former football player who tries to get by on his former glory.",
    color: "yellow"
  };

  // Weapon objects
  var rope = {
    name : "rope",
    weight: 1,
    damage: 3
  };
  var knife = {
    name : "knife",
    weight: 2,
    damage: 3
  };
  var candlestick = {
    name : "candlestick",
    weight: 20,
    damage: 2
  };
  var dumbbell = {
    name : "dumbbell",
    weight: 10,
    damage: 3
  };
  var poison = {
    name : "poison",
    weight: 3,
    damage: 1
  };
  var axe = {
    name : "axe",
    weight: 2,
    damage: 15
  };
  var bat = {
    name : "bat",
    weight: 11,
    damage: 8
  };
  var trophy = {
    name : "trophy",
    weight: 9,
    damage: 6
  };
  var pistol = {
    name : "pistol",
    weight: 1,
    damage: 4
  };

  // Room objects
  var diningroom = {
    size: 6
  };
  var conservatory = {
    size: 12
  };
  var kitchen = {
    size: 61
  };
  var study = {
    size: 65
  };
  var library = {
    size: 66
  };
  var billiard = {
    size: 6
  };
  var lounge = {
    size: 61
  };
  var ballroom = {
    size: 11
  };
  var hall = {
    size: 2
  };
  var spa = {
    size: 4
  };
  var livingroom = {
    size: 55
  };
  var observatory = {
    size: 65
  };
  var theatre = {
    size: 78
  };
  var guesthouse = {
    size: 12
  };
  var patio = {
    size: 25
  };

// Suspects array
var suspects = [];
suspects.push(mrGreen, msOrchid, mrPlum, mrScarlet, msPeacock, mrMustard);

// Weapon array
var weapons = [];
weapons.push(rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol);

// Rooms array
var rooms = [];
rooms.push(diningroom, conservatory, kitchen, study, library, billiard, lounge, ballroom, hall, spa, livingroom, observatory, theatre, guesthouse, patio);

//Iteration 2 - 1
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Get one random element from card stack (any stack can be used)
function extract(deck){
  var r = getRandom (0, deck.length);
  return deck[r];
}

extract(suspects);

// Iteration 2 - 2
var caseFile = [];

function pickCards (){
  caseFile = [];
  var a = extract(suspects);
  var b = extract(weapons);
  var c = extract(rooms);
  caseFile.push(a, b ,c);
  return "Random cards are picked. Now you just need to revealMystery() or pick new cards!";
}

function revealMistery(){
  return caseFile;
}

console.log("Available functions are extract(deck), pickCards(), revealMistery()");
pickCards();
revealMistery();
