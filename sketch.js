let feel = ["memories", "hearing", "breathing", "listening", "speaking" ]
function setup() {
  createCanvas(400, 400);
  background(200);
  
  console.log("inital array is")
  console.log(feel);
  
  console.log("array after pop")
  feel.pop();
  console.log(feel);
  
  feel.push();
  console.log(feel);
  
  feel.push("memories");
  console.log("array after push")
  feel.pop();
}

function draw() {
}