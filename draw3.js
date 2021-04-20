
let noiseOffset = 0.0;
let strokeWidth = 5;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(32, 252, 3);



}

function draw() {

      background(32, 252, 3, 20);
      strokeWeight(strokeWidth);

      noiseOffset += 0.05;
      strokeWidth = noise(noiseOffset) * 100;


      stroke(map(mouseX, 0, 600, 0, 255, true))
      line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
      line(mouseX, mouseY, pmouseX, pmouseY);


  }


function keyTyped() {

  if (key === 'p') {
    //save this image
    saveCanvas('fileName', 'png');
  } else if (key === 'c') {
    // clear the image
    clear();

  }


  return false;
}
