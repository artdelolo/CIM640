var sun;
var moon;
var back;
function preload(){
  sun = loadImage('assets/sun.png');
  moon = loadImage('assets/moon.png');
}

function setup() {
  // put setup code here
  createCanvas(400,400);

}

function draw() {
  // put drawing code here
  if(mouseX <= width/2){
    back = "gold";
  }

  if(mouseX >= width/2){
    back = "navy";
  }

  background(back);

  //interface
  strokeWeight(0)
  fill("gold");
  rect(0,350,width/2,350);
  fill("navy");
  rect(width/2,350,width,350);
  fill(255);
  textSize(10);
  text("Move over each area to show a surprise!", width/2,25);
  strokeWeight(3);
  stroke(255);
  line(width/2,350,width/2,height);
  line(0,350,width,350);
  fill(255);
  textAlign(CENTER);
  textSize(30);
  strokeWeight(0);
  text("Day", width/4,385);
  text("Night",width/4+width/2,385);

  //interaction
//  image(sun,100,100);
//  image(moon,200,100);

  /*
  if(true){

  MouseX < width/2;

  }
  */

  if(mouseX <= width/2){
    image(sun,50,50);
    console.log("Day Side");
  }

  if(mouseX >= width/2){
    image(moon,50,50);
    console.log("Night Side");
  }
}
