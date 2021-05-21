'use strict';

let pointsToWin = 10;
let state = 'title';
let cnv;
let points = 0;
let lives = 3;
let w = 600;
let h = 600;
let player;
let coins = [];
let enemies = [];
let projectiles = [];
let playerImg;
let projectileImg;
let coinImg;
let enemiesImg;

function preload() {
  playerImg = loadImage('game-assets/tubby.gif');
  projectileImg = loadImage('game-assets/chubbie.gif');
  coinImg = loadImage('game-assets/meal-ticket.png');
  enemiesImg = loadImage('game-assets/enemies.gif');
}

function setup() {
  cnv = createCanvas(w, h); //width x height
  frameRate(12);
  imageMode(CENTER);
  rectMode(CENTER);
  textFont('monospaced');
  player = new Player();
  coins.push(new Coin());
  enemies.push(new Enemies());
  projectiles.push(new Projectile);
}

function draw() {
  switch(state) {
    case 'title':
      title();
      cnv.mouseClicked(titleMousedClicked);
      break;
    case 'level 1':
      level1();
      cnv.mouseClicked(level1MouseClicked);
      break;
    case 'level 2':
      level2();
      cnv.mouseClicked(level2MouseClicked);
      break;
    case 'you win':
      youWin();
      cnv.mouseClicked(youWinMouseClicked);
      break;
    case 'game over':
      gameOver();
      cnv.mouseClicked(gameOverMouseClicked);
      break;
    default:
      break;
    }
}


function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    player.direction = 'left'
  } else if (keyCode == RIGHT_ARROW) {
    player.direction = 'right'
  } else if (keyCode == UP_ARROW) {
    player.direction = 'up'
  } else if (keyCode == DOWN_ARROW) {
    player.direction = 'down'
  } else if (key = 's'){
    projectiles.push(new Projectile);
  }
}

function title() {
  background(0);
  textSize(80);
  fill(255);
  textAlign(CENTER);
  textSize(50);
  text('Squeaky’s Revenge:', w/2, h/5);
  textSize(30);
  text('Click to start', w/2, h/2);
}
  textSize(20);
  text('Game Functions:', w/3, h/3); 
  text('left & right arrows to move', w/2, h/4);
  text('SpaceBar to shoot (in level 2)', w/2, h/5); 

function titleMousedClicked() {
    console.log('canvas is clicked on title page');
    state = 'level 1'
}

function level1() {
  background(0, 224, 97);

  if (random(1) <= 0.04) {
    coins.push(new Coin());
  }

  if (random(1) <= 0.06) {
    enemies.push(new Enemies());
  }

  player.display();
  player.move();

  //iterating through coins array to display and move them
  for (let i = 0; i < coins.length; i++) {
    coins[i].display();
    coins[i].move();
  }

  //check for collisons, if there is a collison increase points by 1 AND splice that coin out of array
  //need to iterate backwards through array
  for (let i = coins.length - 1; i >= 0; i--) {
    // check for collisons with player
    if (dist(player.x, player.y, coins[i].x , coins[i].y) <= (player.r + coins[i].r) / 2) {
      points++;

      coins.splice(i, 1);
    } else if (coins[i].y > h) {
      coins.splice(i, 1);
      console.log('coin is out of town');
    }
  }

   // ~~ * @ -- enemies -- @ * ~~
   for (let i = 0; i < enemies.length; i++) {
     enemies[i].display();
     enemies[i].move();
   }

  //check for collisons, if there is a collison decrease points by 1 AND splice that enemies out of array
  //need to iterate backwards through array
  for (let i = enemies.length - 1; i >= 0; i--){
   // check for collisons with player
   if (dist(player.x, player.y, enemies[i].x , enemies[i].y) <= (player.r + enemies[i].r) / 2) {
     points--;
     //console.log(points);
     enemies.splice(i, 1);
   } else if (enemies[i].y > h) {
     enemies.splice(i, 1);
     console.log('enemies is out killin it');
   }
  }

  text(`points: ${points}`, w / 4, h - 30);

  // checkpoint values to win or lose hehe dork
  if (points >= pointsToWin){
   state = 'you win';
  } else if (points <= -10) {
   state = 'game over';
  }
}

function level1MouseClicked() {
  // check point value to win or lose the game hehe loser.
  if (points >= pointsToWin) {
    state = 'you win';
  }
}

function level2() {
    // text('click for points', w/2, h-30);
    background(0, 224, 97);

    if (random(1) <= 0.06) {
      enemies.push(new Enemies());
    }

    // ~~ * @ -- PROJECTILES -- @ * ~~
    for (let i = 0; i < projectiles.length; i++) {
      projectiles[i].display();
      projectiles[i].move();
    }

    player.display();
    player.move();

    // ~~ * @ -- ENEMIES -- @ * ~~
    for (let i = 0; i < enemies.length; i++) {
      enemies[i].display();
      enemies[i].move();
      if (enemies[i].y >= h - enemies[i].r / 2) {
        points--;
        enemies.splice(i, 1);
      }
    }

    //iterating through coins array to display and move them
    //using for loop
    for (let i = projectiles.length - 1; i >=0; i--) { //outerloop
      // -- enemies - - //
      for (let j = enemies.length - 1; j >= 0; j--) {
        // check for collisons with player
        if (projectiles[i] && dist(projectiles[i].x, projectiles[i].y, enemies[j].x , enemies[j].y) <= (projectiles[i].r + enemies[j].r) / 2) {
          points++;
          //console.log(points);
          enemies.splice(j, 1);
          projectiles.splice(i, 1);
        }
      }
    }

   //check for collisons, if there is a collison decrease points by 1 AND splice that enemies out of array
   //need to iterate backwards through array
    for (let i = enemies.length - 1; i >= 0; i--){
      // check for collisons with player
      if (dist(player.x, player.y, enemies[i].x , enemies[i].y) <= (player.r + enemies[i].r) / 2) {
        points--;
        //console.log(points);
        enemies.splice(i, 1);
      } else if (enemies[i].y > h) {
        enemies.splice(i, 1);
        console.log('enemies is out killin it');
      }
      text(`points: ${points}`, w / 4, h - 30);
    }
     // checkpoint values to win or lose hehe dork
    if (points >= pointsToWin){
      state = 'you win';
    } else if (points <= -3) {
      state = 'game over';
    }
}

function level2MouseClicked() {
  // check point value to win or lose the game hehe loser.
  if (points >= pointsToWin) {
    state = 'you win';
  }
}

function youWin() {
  background(181, 0, 222);
  textSize(80);
  stroke(255);
  text('YOU WIN', w/2, h/2);
  textSize(30);
  text('Click Anywhere To Continue', w / 2, h * 3 / 4);
}

function youWinMouseClicked() {
  if (points >= pointsToWin){
    lives--;
    state = 'level 2';
    lives--;
  } else {
    state = 'title';
  }
  projectiles = [];
  points = 0;
}

function gameOver() {
  background(173, 0, 98);
  textSize(80);

  //check of #lives
  if (lives >= 0) {
    //lives--; //if u have life u just lost itttttt
    //display on screen
    text(`lives left: ${lives}`, w / 2, h / 2);
    textSize(30);
    text('Click to play again?', w / 2, h * 3 / 4);
  } else {
    // game Over
    text('Game Over Sucker', w / 2, h / 2);
    textSize(25);
    text('click anywhere to restart', w / 2, h * 3 / 4);
  }
}

function gameOverMouseClicked() {
  if (lives >= 0){
    lives--;
    state = 'level 1';
    lives--;
  } else {
    state = 'title';
  }
  projectiles = [];
  points = 0;
}
