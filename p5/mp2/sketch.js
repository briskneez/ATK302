var myState = 0;
var timer = 100;
var x = 0;


function setup() {
  // put setup code here
  createCanvas(800, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);
}

function draw() {
  // put drawing code here
  switch (myState) {
    case 0:
      text("Welcome to my Sustainability Secret! Click to continue.")
      break;

    case 1:
      timer = timer - 1;
      if (timer <= 0) {
        timer = 100;
        myState = myState + 1;
        if (myState >= 5) {
          myState = 0;
        }
        break;

        case 2:
          fill('white');
        rect(width/2, height/2, 150, 300);
        fill('brown');
        ellipse(252, 144, 72, 72)
        break;

        case 3:
          background("yellow");
        text("COFFEE! YUM!!!", x, 100);
        fill('white');
      rect(width/2, height/2, 150, 300);
      fill('brown');
      ellipse(252, 144, 72, 72)
        break;

        case 4:
          fill('pink');
        text("BE HAPPY", x, 100);
        x += 5;
        if (x > 200) {
          x = 0;
        }
        break;


      }
  }

  function mouseReleased() {
    myState = myState + 1;
    if (myState > 1) {
      myState = 0;
    }
  }
