function setup() {
  // put setup code here
  createCanvas(400,400);
  background("#58FAF4");
  strokeWeight(0);

}

function draw() {
  // put drawing code here
  fill("yellow");
  rect(185,200,30,75);
  //head
  fill("peach");
  ellipse(200,200,80,80);
  //eyes
  fill(0);
  ellipse(220,190,15,5);
  ellipse(180,190,15,5);
  //features
  fill("pink");
  triangle(200,195,195,215,205,215);
  ellipse(200,225,10,10);

}
