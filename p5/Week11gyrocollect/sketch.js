var cars = [];
var frogPos;
var alpha, beta, gamma; // orientation data
var bunnyImage;
var xPosition = 0;
var yPosition = 0;
var x = 0; // acceleration data
var y = 0;
var z = 0;



function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);

  alpha = 0;
  beta = 0;
  gamma = 0;

  bunnyImage = loadImage("assets/bunny.jpg");
 imageMode(CENTER);
 rectMode(CENTER);

  rectMode(CENTER);
  for (var i = 0; i < 40; i++){
    cars.push(new Car());
  }

  frogPos = createVector(0, 0);

}

function draw() {
  // put drawing code here
  background(100);
  // the map command !!!!

  // takes your variable and maps it from range 1 to range 2

  // map(yourVar, range1_x, range1_y, range2_x, range2_y) ;

  xPosition = map(gamma, -60, 60, 0, width);
  yPosition = map(beta, -30, 30, 0, height);

  push(); // before you use translate, rotate, or scale commands, push and then pop after

  translate(xPosition, yPosition); // move everything over by x, y

  rotate(radians(alpha)); // using alpha in here so it doesn't feel bad

  pop();

  for (var i = 0; i < cars.length; i++){
  cars[i].display();
  cars[i].drive();

  //collision detection
  if(cars[i].pos.dist(frogPos) < 20){
    cars.splice(i, 1);
  }
}
//frog
  //fill('green');
  //ellipse(frogPos.x, frogPos.y, 50, 50);
  image(bunnyImage, frogPos.x, frogPos.y, 50, 50);
  checkForKeys(); //this moves the frog

  // DECORATIONS

 // Just a bunch of text commands to display data coming in from addEventListeners
 textAlign(LEFT);
 textSize(20);
 fill('black');
 text("orientation data:", 25, 25);
 textSize(15);
 text("alpha: " + alpha, 25, 50);
 text("beta: " + beta, 25, 70);
 text("gamma: " + gamma, 25, 90);
 textSize(20);
 text("acceleration data:", 25, 125);
 textSize(15);
 text("x = " + x.toFixed(2), 25, 150); // .toFixed means just show (x) decimal places
 text("y = " + y.toFixed(2), 25, 170);
 text("z = " + z.toFixed(4), 25, 190);
 frogPos.x= xPosition;
 frogPos.y= yPosition;

 // HERE'S THE STUFF YOU NEED FOR READING IN DATA!!!



// Read in accelerometer data

window.addEventListener('deviceorientation', function(e) {

  alpha = e.alpha;

  beta = e.beta;

  gamma = e.gamma;

});





// accelerometer Data

window.addEventListener('devicemotion', function(e) {

  // get accelerometer values

  x = e.acceleration.x;

  y = e.acceleration.y;

  z = e.acceleration.z;

});
}
//our car class
function Car(){
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);

  this.display = function(){
    fill(this.r, this.g, this.b);
    rect(this.pos.x, this.pos.y, 100, 50);
  }

  this.drive = function(){
    this.pos.add(this.vel);
    if(this.pos.x > width) this.pos.x = 0;
    if(this.pos.x < 0) this.pos.x = width;
    if(this.pos.y > height) this.pos.y = 0;
    if(this.pos.y < 0) this.pos.y = height;
  }

}

function checkForKeys(){
  if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 5;
  if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y + 5;

}
