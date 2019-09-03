function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 800);



  // put setup code here
}

function draw() {
  // put drawing code here
  background('DodgerBlue');
  noStroke();

//  fill(204);
//  triangle(18, 18, 18, 360, 81, 360);

  fill('Brown');
  rect(167, 300, 190, 300);

//  fill(204);
//  quad(189, 18, 216, 18, 216, 360, 144, 360);

  fill('Yellow');
  ellipse(100, 100, 80, 80);

 fill(204);
 triangle(680, 242, 644, 38, 594, 242);

 fill(255);
  arc(50, 50, 50, 50, PI, TWO_PI);

 fill('Green');
 ellipse(275, 290, 300, 290);

  fill(255);
  text(mouseX + ',' + mouseY, 20, 20);


}

function mouseReleased() {
  console.log(mouseX + ', ' + mouseY);
}
