
class Player {
  constructor() {
    this.r = 60 //this is actually the diameter not radius
    this.x = w / this.r;
    this.y = h - this.r;
    this.speed = 10;
    this.direction = 'still';
  }

  display() {
    image(playerImg, this.x, this.y, this.r, this.r);
  }

  move(){
    switch (this.direction) {
      case 'still':
          //dont move anything
          break;
      case 'up':
          //dercrease y pos
          if (this.y - this.r / 2 > 0){ //this is actually the diameter! we nneed to check for the radius
            this.y -= this.speed;
          }
          break;
      case 'down':
          //increase y
          if (this.y < h - this.r / 2) {
            this.y += this.speed;
          }
          break;
      case 'right':
          //increase x pos
          if (this.x < w - this.r / 2) {
            this.x += this.speed;
          }
          break;
      case 'left':
          //dercrease x pos
        if (this.x - this.r / 2 > 0) {
          this.x -= this.speed;
        }
        break;
      default:
        break;
    }
  }

}
