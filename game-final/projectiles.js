
class Projectile {
  constructor() {
    this.r = 15;
    this.x = player.x;
    this.y = player.y - player.r / 2;
    this.speed = 15;
  }

  display() {
    stroke(0);
    fill(125, 25, 46);
    image(projectileImg, this.x, this.y, 50, 50);
  }

  move() {
    this.y -= this.speed;
  }
}
