'use strict';



let state = 'title';
let cnv;
let points = 0;
let w = 600;
let h = 600;

function setup() {
  cnv = createCanvas(w, h); //width x height

  textFont('monospaced');

}

function draw() {

switch(state){
  case 'title':
    title();
    cnv.mouseClicked(titleMousedClicked);
    break;
    case 'level 1':
    level1();
    cnv.mouseClicked(level1MouseClicked);
    //execute code
      break;
      case 'you win':
    youWin();
        cnv.mouseClicked(youWinMouseClicked);
        break;
    default:
      break;

    }

}


function title() {
  background(0);
  textSize(80);
  fill(255);
  textAlign(CENTER);
  text('The Blank Game', w/2, h/5);

  textSize(30);
  text('click anywhere to start', w/2, h/2);
}

function titleMousedClicked() {
    console.log('canvas is clicked on title page');
    state = 'level 1'

}

function level1() {
  background(145, 242, 171);
  text('click for points', w/2, height - 30);
}

function level1MouseClicked() {
  points ++;
  console.log('points = ' + points);

  if (points >= 10){
    state = 'you win';
  }
}

function youWin() {
  background(214, 151, 252);
  textSize(80);
  stroke(255);
  text('YOU WIN', w/2, h/2);

  textSize(30);
  text('click anywhere to restart', w/2, h / 3);
}

function youWinMouseClicked() {
  state = 'level 1';
  points = 0;
}
