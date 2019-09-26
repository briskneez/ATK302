var font ;

function setup() {
  // put setup code here
  createCanvas(800, 800);
  font = loadFont('assets/Chilanka-Regular.ttf');
}

function draw() {
  // put drawing code here
  background(100);
  textFont(font, 24);

  fill('red');
  text("hello world", 20, 50);

  textSize(30);

}
