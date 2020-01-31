var x;
var y;
var radius;

function setup() {
  createCanvas(660, 600);
  x = random(width);
  y = random(height);
  radius = 55;
}

function draw() {
  background(100, 170, 700, 991);

if(dist(mouseX, mouseY, x, y) < radius) {
    if (mouseIsPressed) {
      x = (mouseX);
      y = (mouseY);
    }
    fill(245, 533, 470, 111);
  }
  else {
    fill(255, 109, 300, 111);
  }

  ellipse(x, y, radius * 3);
  x += random(-3, 3);
  y += random(-3, 3);
}
