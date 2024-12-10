function setup() {
  createCanvas(400, 400);
  background(0);

}

function draw() {
  let r = random(255);
  let g = random(255);
  let b = random(255);
  fill(r, g, b);
  noStroke();
circle(mouseX, mouseY, 50);
}
