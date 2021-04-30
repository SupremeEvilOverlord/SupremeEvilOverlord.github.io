let array = [];
let value = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  strokeWeight(5);
  stroke(255);


}

function draw() {

  if (mouseIsPressed) {
      background(value);
      fill(255);
      line(mouseX, mouseY, pmouseX, pmouseY);
      //backgroundColor-=2;
      array.push([mouseX, mouseY]);

  }

}
  function mouseMoved() {
    value = value + 5;
    if (value > 255) {
      value = 0;
    }
}

function keyTyped() {

  if (key === 'p') {
    //save this image
    saveCanvas('fileName', 'png');
  }

  if (key === 'j') {
    //save this image
    saveCanvas('fileName', 'jpeg');
  }

  if (key === 'c') {
    // clear the image
    clear();
  }
  if (key === 'y') {
    stroke(255, 205, 56); //Yellow
    fill(255, 56, 142); //pink
    //curved image
    beginShape();
    for(let i = 0; i < array.length; i++){
    curveVertex(array[i][0], array[i][1])
    }
    endShape();

  }
  if (key === 'b') {
    stroke(value); //black
    fill(0);
    //curved image
    beginShape();
    for(let i = 20; i < array.length; i++){
    curveVertex(array[i][0], array[i][1])
    }
    endShape();

  }
  if (key === 'v') {
    //line image
    beginShape();
    stroke(179, 56, 255); //violet
    noFill();
    for(let i = 0; i < array.length - 1; i++){
      line(array[0][0], array[i][1],array[i + 1][0], array[1][1]);
  }
  endShape();

  }
  if (key === 'g') {
    beginShape();
      for(let i = 4; i < array.length + 70; i++){
      stroke(66, 252, 63); //green
      line(array[3][3], array[i][2], array[i + 2][3], array[2][2]);
      line(array[4][0], array[i][0], array[i + 1][0], array[2][1]);

    }
    endShape();

  }
  return false;

}
