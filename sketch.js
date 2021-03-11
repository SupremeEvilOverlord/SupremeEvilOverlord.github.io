let mic;
let value = 0;
let xpos = 200;
let ypos = 200;
//let avatar1;
//let avatar2;

function setup() {
  createCanvas(400, 400);
  background(255);

  mic = new p5.AudioIn();
  mic.start();
  
 // avatar1 = new Avatar(246, 255, 0, 20, 20);
  //avatar2 = new Avatar(246, 255, 0, 80, 80);

  
  noStroke();
  createAvatar(0);
  
  colBG = color(0);
  colFill = color(255);
}

function draw() {
  //console.log("mic level: " + mic.getLevel());
  var volume = mic.getLevel();
  
  //mouse over changes background color
  let mapHeight = map(volume, 0, 1, height-135, 0);
  //console.log('map height: ' + mapHeight);
  let x = map(mouseX, 0, width, 0, 255);
  let y = map(0, mouseY, 0, height, 255);
  clear();
  background(y,x,255);

  drawPlanets();
  
  //avatar1.drawAvatar();
 //avatar2.drawAvatar();
    
  //console.log('mouseX: ' + mouseX);
  //console.log('mouseY: ' + mouseY);
  
  if (((mouseX >= 0)
      && (mouseX <= 60))
      && ((mouseY >= 0)
      && (mouseY <= 60))
     ) {
    //console.log('mouseOn: ' + true);
    createAvatar(volume, -20);
  } else if (((mouseX >= (width - 60))
      && (mouseX <= width))
      && ((mouseY >= (height - 60))
      && (mouseY <= height))
     ) {
    //console.log('mouseOn: ' + true);
    createAvatar(volume, 20);
  } else {
    //console.log('mouseOn: ' + false);
    createAvatar(volume, 0);
  }
  
}
 

function drawSides() {
  fill(value);
  rectMode(CENTER)
  translate(width / 2, height / 2);
  translate(p5.Vector.fromAngle(millis() / 1000, 240));
  rect(65, 95, 30, 10);
  rect(65, 95, 10, 30);
  rotate(PI / 1.0);
  rect(30, 05, 10, 10);
}

function drawEye(volumeHeight) {
  stroke(4); 
  fill(255);
  const X = width * .57;
  const Y = height * .65;
  circle(X, Y - volumeHeight, width * .15); //eye
  fill(1);
  stroke(0);
  if (mouseIsPressed) {
   fill(30, 255, 0);
   // fill(mouseY/28,mouseX,3);
    circle(X, Y - volumeHeight, width * .15);
  } else {
    fill(1);
    const PUPIL_WDTH = (width * .05) + (mic.getLevel() * 100);
    const PUPIL_HGHT = (height * .05) + (mic.getLevel() * 100);
    ellipse(X, Y - volumeHeight, PUPIL_WDTH, PUPIL_HGHT);
  }
}

function drawBody(volumeHeight, move) {
  fill(30 * move, 255 + move, 0);
  //fill(30, 255, 0);
  
  const LF_RT_HE = (height * .90) - volumeHeight;
  const MID_HE = (height * .42) - volumeHeight;
  beginShape(); //body
  vertex((width * .20) + move, LF_RT_HE);
  vertex((width * .62) + move, MID_HE);
  vertex((width * .83) + move, LF_RT_HE);
  endShape();
  fill(mouseY/28,mouseX,3);
  beginShape();
  vertex((width * .83) + move, LF_RT_HE);
  vertex((width * .62) + move, MID_HE);
  vertex((width * .76) + move, LF_RT_HE);
  endShape();

}

function drawShade(
    leftWi, leftHe, 
    middleWi, middleHe,
    rightWi, rightHe
  ) {
//  fill(50, 168, 82);
  fill(mouseY/28,mouseX,3);
  beginShape();
  vertex(leftWi, leftHe);
  vertex(middleWi, middleHe);
  vertex(rightWi, rightHe);
  endShape();
}

function drawLegs(
    leftWidth, leftHeight, 
    middleWidth, middleHeight, 
    rightWidth, rightHeight,
  ) {
   fill(30, 255, 0);
  
  beginShape(); //left
  vertex(leftWidth, leftHeight ,);
  vertex(middleWidth, middleHeight);
  vertex(rightWidth, rightHeight);
  endShape();
}

function createAvatar(volume, move) {
  const VOL_HGHT = volume * 1000;
  //console.log('volume height: ' + VOL_HGHT);
  
  drawBody(VOL_HGHT, move);
  
  const LEFT_RIGHT_HEIGHT = (height * .90) - VOL_HGHT;
  const MIDDLE_HEIGHT = (height * .999) - VOL_HGHT;
  const LEF_HEIGHT = (height * .63) - VOL_HGHT;
  const RIG_HEIGHT = (height * .71) - VOL_HGHT;
  const MID_HEIGHT = (height * .65) - VOL_HGHT;
  //left leg
  drawLegs(
    width * .30, LEFT_RIGHT_HEIGHT, 
    width * .34, MIDDLE_HEIGHT, 
    width * .43, LEFT_RIGHT_HEIGHT
  );
  //right leg
  drawLegs(
    width * .75, LEFT_RIGHT_HEIGHT, 
    width * .70, MIDDLE_HEIGHT, 
    width * .60, LEFT_RIGHT_HEIGHT
  );
  
  //left
  drawShade(
    width * .75, LEFT_RIGHT_HEIGHT,
    width * .70, MIDDLE_HEIGHT,
    width * .70, LEFT_RIGHT_HEIGHT,
  );
  //right
  drawShade(
    width * .40, LEFT_RIGHT_HEIGHT,
    width * .34, MIDDLE_HEIGHT,
    width * .43, LEFT_RIGHT_HEIGHT,
  );
  drawEye(VOL_HGHT);
}

function drawPlanet1() {
  ellipse(xpos,frameCount % ypos, 45, 45);

}

function drawPlanet2() {
  ellipse(frameCount % ypos/40, xpos*2, -20, -19);

}

function drawPlanet3() {
  ellipse(344, 110, frameCount % -xpos/3, -ypos/3);

}

function drawPlanet4() {
  ellipse(frameCount % xpos/4, ypos/4, 20, 20);

}

function drawPlanet5() {
  ellipse(frameCount % xpos, ypos/4, 45, 45);

}

function drawRing1() {
  ellipse(xpos,frameCount % ypos, 59, 9); //ring

}

function drawRing2() {
  ellipse(344, 110, -xpos/2, -frameCount % ypos/10); //ring

}

function drawPlanets() {
  //planets
  fill(colBG);
  drawPlanet1();
  drawPlanet2();
  drawPlanet3();
  drawPlanet4();
  drawPlanet5();  
  
  //rings
  fill(colFill);
  drawRing1();
  drawRing2();

  xpos += random(-2,2);
  ypos += random(-2,2);
}

function changeBG() {
  if (isLooping()) {
    colBG = color(random(255), random(255), random(255));
    colFill = color(random(255), random(255), random(255));
  }
}

function checkLoop() {
  if (this.checked()) {
    loop();
  } else {
    noLoop();
  }
}


