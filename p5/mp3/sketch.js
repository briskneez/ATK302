var cars = [];
var frogPos;
var myState = 0;
var timer = 0;
var myText;
var underwater1;
var underwater2;
var fish;
var hook;
var winner;
var loser;

function setup() {
  underwater1 = loadImage('assets/underwater1.jpg');
  underwater2 = loadImage('assets/underwater2.jpg');
  createCanvas(800, 800);

  //spawn the cars
  for (var i = 0; i < 8; i++) {
    cars.push(new Car());
  }
  fish = loadImage('assets/fish.png');
  hook = loadImage('assets/hook.png');
  loser = loadImage('assets/babySad.jpg');
  winner = loadImage('assets/babyHappy.jpg');

  //initialize frog position
  frogPos = createVector(width / 2, height - 80);
  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);
  myText = loadFont('assets/PlayfairDisplay-Regular.ttf');

}


function draw() {


  textFont(myText);

  switch (myState) {
    case 0:
      image(underwater1, width/2, height/2, width, height);

      textSize(70);
      text('Welcome to Fish Catch! Click to Play', width / 2, height / 2 +70, 500, 400);
      fill('black');
      break;

    case 1:

      game(); //this should be in case 1 in switch/case statement

      timer++;
      if (timer > 800) {
        timer = 0;
        myState = 2;
      }
      break;

    case 2:
      background('red');
      image(loser, width/2, height/2, 750, 750);
      text('LOSE!', 100, 100);
      fill('white');
      break;

    case 3:
      background('green');
      image(winner, width/2, height/2, 750, 750);
      text('WIN!', 100, 100);
      fill('white');
      break;

  }

}



function mouseReleased() {
  switch (myState) {
    case 0:
      myState = 1;
      break;

    case 2: //this was the lose state
      resetTheGame();
      myState = 0;
      break;

    case 3: //this was the win state
      resetTheGame();
      myState = 0;
      break;

  }
}

function resetTheGame() {

  cars = []; //clear the array first

  //spawn the cars
  for (var i = 0; i < 5; i++) {
    cars.push(new Car());
  }
  timer = 0;
}
// car class!!
function Car() {
  // attributes
  this.pos = createVector(100, 100);
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);


  // methods
  this.display = function() {
    fill(this.r, this.g, this.b);
  //  ellipse(this.pos.x, this.pos.y, 100, 50);
    //ellipse(this.pos.x - 40, this.pos.y + 30, 25, 25);
    //ellipse(this.pos.x + 40, this.pos.y + 30, 25, 25);
    image(fish, this.pos.x, this.pos.y, 100, 100);
  }

  this.drive = function() {
    this.pos.add(this.vel);

    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}


function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 8;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 8;
  if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 8;
  if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y + 8;

}

function game() {
  image(underwater2, width/2, height/2, width, height);

  //iterate through cars array
  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();

    //test if this car is close to the frog
    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);
    }
  }

  if (cars.length == 0) {
    timer = 0;
    myState = 3; //they won
  }

  // draw the frog
  fill('white');
  triangle(frogPos.x + 15, frogPos.y - 15, 20, 20);
  image(hook, frogPos.x, frogPos.y, 80, 80);
  //  ellipse(frogPos.x, frogPos.y, 60, 60) ;
  checkForKeys();
}
