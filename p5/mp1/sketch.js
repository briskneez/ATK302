function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  //textAlign(Center);
}

function draw() {
  background('Green');
  fill(0);

 text('This is Skwerm the caterpillar. He lives in a tree stump. Although a small creature, he and his kind \
  are very beneficial to the realm of Aldervaire. During the day he is \
 practically undetectable as he blends into almost everything. But at night,\
 he produces this iredescense that can change any color and is bright enough\
 for anyone to see from feet away. He and his kind have the abilility to\
 light the entirity of Aldervaire at once, which is very helpful in the\
 event of blackouts.', width/2, height/2, 400, 900);

if(mouseIsPressed){
  background('Black');
  fill(0);

  fill(219, 112, 147);
  ellipse(50, 50, 50, 50);

  fill(139, 71, 93);
  ellipse(70, 70, 50, 50);

  fill(221, 160, 221);
  ellipse(90, 90, 50, 50);

  fill(160, 32, 240);
  ellipse(110, 110, 50, 50);

  fill(171, 130, 255);
  ellipse(130, 130, 50, 50);

  fill(255, 52, 179);
  ellipse(150, 150, 50, 50);

  fill(169, 169, 169);
  rect(167, 300, 120, 200);

  fill(169, 169, 169);
  triangle(192,350,200, 50);

  fill(169, 169, 169);
  triangle(250, 320, 300, 60);

  fill(128, 128, 128);
  triangle(215, 360, 190, 390, 220, 400);

  fill(128, 128, 128);
  triangle(245, 420, 240, 440, 270, 435);

  fill(128, 128, 128);
  ellipse(200, 460,10, 5);

  fill(128, 128, 128);
  ellipse(260, 455, 15, 10);


}else{
  //fill(255, 250, 250);
//  rect(460,380,200,40);
fill(205, 201, 201);
ellipse(50, 50, 50, 50);

fill(139, 137, 137);
ellipse(70, 70, 50, 50);

fill(122, 139, 139);
ellipse(90, 90, 50, 50);

fill(205, 201, 201);
ellipse(110, 110, 50, 50);

fill(139, 137, 137);
ellipse(130, 130, 50, 50);

fill(122, 139, 139);
ellipse(150, 150, 50, 50);

fill('brown');
rect(167, 300, 120, 200);

fill('brown');
triangle(192,350,200, 50);

fill('brown');
triangle(250, 320, 300, 60);

fill('black');
triangle(215, 360, 190, 390, 220, 400);

fill('black');
triangle(245, 420, 240, 440, 270, 435);

fill('black');
ellipse(200, 460,10, 5);

fill('black');
ellipse(260, 455, 15, 10);
}
fill(255);
text(mouseX + ',' + mouseY, 20, 20);

function mouseReleased() {
  console.log(mouseX + ', ' + mouseY);
}
}
