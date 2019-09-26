var myState = 0;
timer = 100;

function setup() {
  // put setup code here\
  createCanvas(800, 800);
  rectMode(CENTER) ;
  ellipseMode(CENTER);
}

function draw() {
  // put drawing code here
  fill('yellow');
  rect(width/2, height/2, 150, 400);
  timer = timer - 1;
  if (timer <= 0) {
    timer = 100;
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
    break;

    case 1:
    fill('yellow');
    ellipse(width/2, height/2, 100, 100); //center
    fill('gray');
    ellipse(width/2, height/2 - 120, 100, 100); //top
    fill('gray');
    ellipse(width/2, height/2 + 120, 100, 100); //bottom
    break;

    case 2:
    fill('gray');
    ellipse(width/2, height/2, 100, 100); //center
    fill('red');
    ellipse(width/2, height/2 - 120, 100, 100); //top
    fill('gray');
    ellipse(width/2, height/2 + 120, 100, 100); //bottom
    break;

  }


}
