var myState = 0;
var timer = 100;

function setup() {
  // put setup code here
  createCanvas(800, 800);

}

function draw() {
  // put drawing code here
  background(100);

  switch (myState) {

    case 0:
      text("Why did the chicken cross the road?", 10, 20);


      timer = timer - 1;
      if (timer <= 0) {
        background(random(255), random(255), random(255));
        //timer = 100;
        myState = 1;
      }
      break;

    case 1:
      text("To get to the other side!", 10, 10);
      break;



  }

}
