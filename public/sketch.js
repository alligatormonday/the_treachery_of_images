let socket;

function setup() {
  createCanvas(600, 400);

  socket = io.connect("http://localhost:3005");
}

function draw() {
  background(51);
  ellipse(mouseX, mouseY, 36, 36);
}
