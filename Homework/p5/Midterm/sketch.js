var hatAmounts = 6;
var hatArray = [];
var currentHat = 2;
var capture;

var controls = {
  "Hat1" : [80,400,50,"green"],
  "Hat2" : [140,400,50,"red"],
  "Hat3" : [200,400,50,"blue"],
  "Hat4" : [250,400,50,"yellow"],
  "Hat5" : [310,400,50,"pink"],
  "Hat6" : [370,400,50,"purple"]
};

function preload(){

 for(var hats = 0; hats < hatAmounts; hats++){
      var hatString = "assets/Hat" + hats + ".png";
      hatArray[hats] = loadImage(hatString);
    }

}


function setup() {

  createCanvas(500, 500);
  capture = createCapture(VIDEO);

  capture.size(320,240);
  capture.hide();

}

function draw() {
  background("orange");

  image(capture, 90, 130, 320, 240);


    for(var keys in controls){
      fill(controls[keys][3]);
      rect(controls[keys][0],controls[keys][1],controls[keys][2],controls[keys][2]);


    if(mouseX > controls[keys][0] && mouseX < controls[keys][0] + controls[keys][2]
      && mouseY > controls[keys][1] && mouseY < controls[keys][1]+controls[keys][2]){

      console.log(fill);

      fill (127,200);
      rect(controls[keys][0],controls[keys][1],controls[keys][2],controls[keys][2]);

    }

    for (var keys in controls){

      if(mouseX > controls[keys][0] && mouseX < controls[keys][0]+controls[keys][2]
        && mouseY > controls[keys][1] && mouseY < controls[keys][1]+controls[keys][2]){


        state = keys;
      }

  fill(0, 0, 0, 0);
  strokeWeight(10);
  stroke(255);
  rect(90, 130, 320, 240);

  image(hatArray[currentHat],150,100,200,120);




  }
}
}


function mousePressed(){

for( var keys in controls){
  if(mouseX > controls[keys][0] && mouseX < controls[keys][0]+controls[keys][2]
    && mouseY > controls[keys][1] && mouseY < controls[keys][1]+controls[keys][2]){

  state = keys;

if (state == "Hat1") {
      currentHat = 0;
  }
  if (state == "Hat2") {
        currentHat = 1;
    }
    if (state == "Hat3") {
          currentHat = 2;
      }
      if (state == "Hat4") {
            currentHat = 3;
        }
        if (state == "Hat5") {
              currentHat = 4;
              }
              if (state == "Hat6") {
                    currentHat = 5;
                }
}
}
}
