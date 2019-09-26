var pic ;

function setup() {
  // put setup code here
  createCanvas(800, 800);
  pic = loadImage("assets/disneyland.jpg") ;
}

function draw() {
  // put drawing code here
  image(pic, 20, 100);
}
