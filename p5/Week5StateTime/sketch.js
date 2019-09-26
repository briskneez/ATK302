var myState = 0;
var myTimer = 0;

function setup() {
  // put setup code here
  createCanvas(800, 800);

}

function draw() {
  // put drawing code here
  switch(myState){
    case 0:
    text("case 0", 100, 100);
    myTimer++ ;
    if(myTimer >= 200){
      myTimer = 0;
      myState = 1;
      background(random(255), random(255), random(255));
    }
    break ;

    case 1:
    text("case 1", 100, 100);
    myTimer++ ;
    if(myTimer >= 200){
      myTimer = 0;
      myState = 1;
      background(random(255), random(255), random(255));
    }
    break ;

    case 2:
    text("case 2", 100, 100);
    myTimer++ ;
    if(myTimer >= 200){
      myTimer = 0;
      myState = 1;
      background(random(255), random(255), random(255));
    }
    break ;

  }

}
