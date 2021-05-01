let feels = [{
  name: "happy",
  color: "yellow",
  red: 255,
  green: 251,
  blue: 0
}, {
  name: "sad",
  color: "blue",
  red: 0,
  green: 255,
  blue: 251
}, {
  name: "melancholey",
  color:"green",
  red: 59,
  green: 522,
  blue: 38
}, {
  name: "surprise",
  color:"orange",
  red: 255,
  green: 156,
  blue: 43
}, {
  name: "angry",
  color:"red",
  red: 191,
  green: 0,
  blue: 0
}, {
  name: "lonely",
  color:"gray",
  red: 148,
  green: 148,
  blue: 148
}];

let randomIndex;
let animating = false;
let counter = 0;

function setup() {
  createCanvas(600, 600);
  background(85, 250, 209);
  textSize(32);
  text("click to find your emotion", 50, 50);
}

function draw() {
 if(animating == true){
   console.log('randomIndex ' + randomIndex);
   if(randomIndex === undefined) {
     randomIndex = 0;
   }
   console.log('feels.length ' + feels.length);
   if(feels.length > 0) {

     fill(feels[randomIndex].red, feels[randomIndex].green,
       feels[randomIndex].blue);
 stroke(0);
 strokeWeight(3);
     text(`${feels[randomIndex].name}'s color is ${feels[randomIndex].color}`, 50, 50);

   } else {
     fill(0,0,0);
   }
noStroke();
  square(random(width), random(height), random(0, 150), random(0, 50));
 }
}

function randomizer() {
  animating = false;
  if (feels.length > 0){
    randomIndex = int(random(feels.length-1));
    //delete an item from the array
    feels.splice(randomIndex, 1);
  } else {
    background(random(200, 255));
    text("no emotion!", 50, 50);
  }
}

function mousePressed() {
  animating = true;
  background(0,0,0);
  setTimeout(randomizer, 2000);
}
