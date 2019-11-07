var bird = 0;

function setup() {
  // put setup code here
  createCanvas(800, 800);
  bird = new Bird();

}

function draw() {
  // put drawing code here
  background(0);
  bird.show();
  bird.update();
}

function Bird(){
  this.y = height/2;
  this.x = 60;
  this.gravity = 0.1;
  this.lift = -10;
  this.velocity = 0;

  this.show = function(){
    fill('white');
    ellipse(this.x, this.y, 30, 30);
  }

  this.up = function(){
    this.velocity += this.lift;
  }


  this.update = function(){
    this.velocity += this.gravity;
    this.y += this.velocity;

    if(this.y > height){
      this.y = height;
      this.velocity = 0;
    }

  }



  function keyPressed(){
    if(keyCode == SPACE){
      bird.up();
   }
  }



}
