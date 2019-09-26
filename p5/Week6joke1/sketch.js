var myState = 0;

function setup() {
  // put setup code here
  createCanvas(800, 800);

}

function draw() {
  // put drawing code here
  background(100);
  
  switch (myState) {

    case 0:
      text("Why did the chicken cross the road?", 10, 10);
      break;

    case 1:
      text("To get to the other side!", 10, 10);
      break;



  }

}

function mouseReleased() {
  myState = myState + 1;
  if (myState > 1) {
    myState = 0;
  }
}
