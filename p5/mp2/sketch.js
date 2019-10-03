var myState = 0;
var timer = 100;
var x = 0;
var myText;
var song;

function preload(){
  song = loadSound('assets/looping.wav');
}


function setup() {
  // put setup code here
  createCanvas(800, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);
  myText = loadFont('assets/PlayfairDisplay-Regular.ttf');
  song.play();
}

function draw() {
  // put drawing code here
  textFont(myText);

  switch (myState) {
    case 0:
      background('grey');
      textSize(30);
      text("Welcome to my Sustainability Secret! \n Click to continue.", 200, 250);
      break;

    case 1:
      background('grey');
      text("Wait for it...", 200, 250);
      timer = timer - 1;
      if (timer <= 0) {
        timer = 100;
        myState = myState + 1;
      }
      break;

    case 2:
      background('pink');
      text("Click on the coffee cup.", 200, 250);
      fill('white');
      rect(width / 2, height / 2, 150, 200);
      //fill('brown');
      //ellipse(width/2, height/2 - 40, 150, 60);
      break;

    case 3:
      background("yellow");
      text("COFFEE! YUM!!! Click to finish.", 200, 250);
      fill('white');
      rect(width / 2, height / 2 + 25, 150, 200);
      fill('brown');
      ellipse(width / 2, height / 2 - 70, 150, 60);
      break;

    case 4:
      background('gray')
      fill('pink');
      textSize(200);
      text("BE \n HAPPY", x, 200);
      x += 5;
      if (x > width) {
        x = -500;
      }
      break;


  }
}

function mouseReleased() {
  myState = myState + 1;
  if (myState > 4) {
    myState = 0;
  }
}
