var myState = 0;
timer = 200;
var x=0;
var vel = 3;

function setup() {
  // put setup code here\
  createCanvas(800, 800);
  rectMode(CENTER) ;
  ellipseMode(CENTER);
}

function draw() {
  // put drawing code here
  background ('grey');
  fill('yellow');
  rect(width/2, height/2, 150, 400);
  timer = timer - 1;
  if (timer <= 0) {
    timer = 200;
    myState = myState + 1;
    if (myState >= 3){
      myState = 0;
    }
}


  switch(myState){

    case 0:
    fill('gray');
    ellipse(width/2, height/2, 100, 100); //center
    fill('gray');
    ellipse(width/2, height/2 - 120, 100, 100); //top
    fill('green');
    ellipse(width/2, height/2 + 120, 100, 100); //bottom

    doTimer(1, 200);
    vel = 3;

    break;

    case 1:
    fill('yellow');
    ellipse(width/2, height/2, 100, 100); //center
    fill('gray');
    ellipse(width/2, height/2 - 120, 100, 100); //top
    fill('gray');
    ellipse(width/2, height/2 + 120, 100, 100); //bottom

     doTimer(2, 100);
     vel = 1;

    break;

    case 2:
    fill('gray');
    ellipse(width/2, height/2, 100, 100); //center
    fill('red');
    ellipse(width/2, height/2 - 120, 100, 100); //top
    fill('gray');
    ellipse(width/2, height/2 + 120, 100, 100); //bottom

    doTimer(0, 50);
    vel = 0;

    break;

  }
  //animate a car
  fill('purple');
  rect(x, height-100, 80, 50) ;
  x = x+vel;
  if(x > width){
    x = 0;
  }


}

function doTimer(whichState, variableTimer){
  timer--;
  if(timer<=0){
    timer = variableTimer;
    myState = whichState;

  }
}
