var x = 0;
var speed = 3;

function setup() {
  createCanvas(600, 400);

}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(4);
  noFill();
  if (mouseX > 200 && mouseX < 300) {
      fill(255, 0, 200);
   }
      rect( 300, 200, 100, 100);

//  - -- circle --  - //

ellipse(x, 200, 100, 100);

  if (x > width || x < 0) {
    speed = speed * -1;
  }
  x = x + speed;

}

/*
 Coding train links that I watched:
      https://thecodingtrain.com/beginners/p5js/3.1-conditional-statements.html
      https://thecodingtrain.com/beginners/p5js/3.2-bouncing-ball.html
      https://thecodingtrain.com/beginners/p5js/3.3-else-elseif-and-or.html
*/
