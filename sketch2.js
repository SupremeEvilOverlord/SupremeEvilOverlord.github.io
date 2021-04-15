let feels = [{
  name: "happy",
  color: "yellow"
}, {
  name: "sad",
  color: "blue"
}, {
  name: "melancholey",
  color:"green"
}, {
  name: "surprise",
  color:"orange"
}, {
  name: "angry",
  color:"red"
}, {
  name: "loney",
  color:"black"
}];

let randomIndex;
let animating = false;
let counter = 0;

function setup() {
  createCanvas(600, 600);
  background(20);
  textSize(32);

  text("click to find your emotion", 50, 50);

}

function draw() {

 if(animating == true){
   square(random(width), random(height), random(0, 150), random(0, 50));
 }
}

function randomizer() {
  animating = false;
  if (feels[0]) {
    //this displays random name and splices it out of array
    background(random(feels.length));
    feels.splice(randomIndex, 1);
  } else {
    background(random(1, 255));
    text("none left to feel", 50, 50);
  }
}
function randomizer() {
  animating = false;
  if (feels[0]){
      background(random(200, 255));
      randomIndex = int(random(feels.length));
      text(`${feels[randomIndex].name}'s color is ${feels[randomIndex].color}`, 50, 50);
      feels.splice(randomIndex, 1);
  } else {
      background(random(200, 255));
      text("no emotion!", 50, 50);
  }
}

function mousePressed() {
  animating = true;
  setTimeout(randomizer, 2000);



}
