var score = 0;

function setup() {
  // put setup code here
  createCanvas(500, 500);
}

function draw() {
  // put drawing code here
//  ellipse(width/2, height/2, 50, 50);
  //rect(mouseX, mouseY, 10, 10);
//  text('Brianna', width/2, height/2, 50, 50);
ellipse(width/2, height/2, 50, 50);
ellipse(250, 290, 50, 50);
ellipse(250, 330, 50, 50);

fill(255);
text(mouseX + ',' + mouseY, 20, 20);
}

function mouseReleased(){
//background(255);
background(random(255), random(255), random(255));
score = score + 1;
}
