let array = [];


function setup() {
  createCanvas(700, 700);
  background(220);

  strokeWeight(5);

}

function draw() {

  if (mouseIsPressed) {
  //  line(mouseX, mouseY, pmouseX, pmouseY);
    array.push([mouseX, mouseY]);
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
  } else if (key === 'd') {
    //display image


    beginShape();
    for(let i = 0; i < array.length; i++){
    curveVertex(array[i][0], array[i][1])
    }
    endShape();

  } else if (key === 'b') {
    for(let i = 0; i < array.length - 1; i++){
      line(array[0][0], array[i][1],array[i + 1][0], array[1][1]);
  }
}
  return false;
}
