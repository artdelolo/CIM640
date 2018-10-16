var x = 400;
var y = 400;
var xmiddle = x/2;
var ymiddle = y/2;
var hairColor = 0;
var r = 232;
var g = 199;
var b = 160;
var rb;
var gb;
var bb;
var costumeColor;

var backImage;

var hatAmounts = 6;
var hatArray = [];
var currentHat = 0;


var controls = {
  "Hat1" : [5,340,60,"purple"],
  "Hat2" : [70,340,60,"purple"],
  "Hat3" : [135,340,60,"purple"],
  "Hat4" : [200,340,60,"purple"],
  "Hat5" : [265,340,60,"purple"],
  "Hat6" : [330,340,60,"purple"],
};

function preload(){

 for(var hats = 0; hats < hatAmounts; hats++){
      var hatString = "assets/Hat" + hats + ".png";
      hatArray[hats] = loadImage(hatString);
    }

    backImage = loadImage('assets/bgImage2.jpg');

}

function setup() {
  // put setup code here
  createCanvas(x,y);
  background("#58FAF4");
}

function draw() {
  rb = mouseX/1.5;
  gb = mouseY/1.5;
  bb = mouseX+mouseY/3;


  background(backImage);



  // put drawing code here

  // Pick colors randomly

    fill(255);
    rect(0,338,400,400);

    //base hair
    strokeWeight(0);
    fill(0);
    quad(x-x*.75, y-y*.75, x-x*.25, y-y*.75, xmiddle+xmiddle*.7, ymiddle, xmiddle*.3, ymiddle);
    quad(xmiddle*.3, ymiddle, xmiddle+xmiddle*.7, ymiddle, xmiddle+xmiddle*.625, ymiddle+ymiddle*.2, xmiddle*.45, ymiddle+ymiddle*.2);



  //face
  fill(r,g,b);
  rect(xmiddle-xmiddle*.1,xmiddle,xmiddle*.2,ymiddle-ymiddle*.4);
  fill(r,g,b);
  rect(xmiddle*.712,y-y*.75,xmiddle*0.575,ymiddle*.38)
  arc(xmiddle, ymiddle-ymiddle*.125, xmiddle*0.575, ymiddle*0.575, 0, PI);
  strokeWeight(2);
  stroke(0);
  point(xmiddle+xmiddle*.1,ymiddle+ymiddle*.05);

  //tophair
  fill(0);
  strokeWeight(0);
  fill(0);
  quad(xmiddle-xmiddle*.125, ymiddle*.25, xmiddle+xmiddle*.275, ymiddle*.15, x-x*.25, y-y*.75, xmiddle*.7, y-y*.75);
  quad(x-x*.75, y-y*.75, x*.65, ymiddle*.35, xmiddle-xmiddle*.15, ymiddle*.45, xmiddle-xmiddle*.4, ymiddle*.7);
  triangle(xmiddle*.8, y-y*.75, x-x*.25, y-y*.75, x-x*.25,ymiddle-ymiddle*.15);

//Clothes colors

  if (currentHat == 0) {
        costumeColor = "#4c9e21";
    }
    if (currentHat == 1) {
          costumeColor = "#f4d142";
      }
      if (currentHat == 2) {
            costumeColor = "#7c4d24";
        }
        if (currentHat == 3) {
              costumeColor = "#b0d839";
          }
          if (currentHat == 4) {
                costumeColor = 120;
                }
                if (currentHat == 5) {
                      costumeColor = "#dd3a11";
                  }

  //body
  strokeWeight(0);
  fill(costumeColor);
  rect(xmiddle-xmiddle*.45,ymiddle+ymiddle*.4,xmiddle*.15,ymiddle);
  rect(xmiddle+xmiddle*.3,ymiddle+ymiddle*.4,xmiddle*.15,ymiddle);
  ellipse(xmiddle-xmiddle*.3,ymiddle+ymiddle*.4,xmiddle*.3,ymiddle*.3);
  ellipse(xmiddle+xmiddle*.3,ymiddle+ymiddle*.4,xmiddle*.3,ymiddle*.3);
  rect(xmiddle*.7,ymiddle+ymiddle*.25,xmiddle-xmiddle*.4,ymiddle);
  rect(xmiddle-xmiddle*.45,ymiddle+ymiddle*.4,xmiddle*.15,ymiddle*.1);
  rect(xmiddle+xmiddle*.3,ymiddle+ymiddle*.4,xmiddle*.15,ymiddle*.1);
  fill(r,g,b);
  arc(xmiddle, ymiddle+ymiddle*.25, x-x*.8, y-y*.85, 0, PI);
  strokeWeight(2);
  stroke(60);
  line(xmiddle*.7,ymiddle+ymiddle*.45,xmiddle*.7,y)
  line(xmiddle+xmiddle*.3,ymiddle+ymiddle*.45,xmiddle+xmiddle*.3,y);

  //FEATURES
  strokeWeight(0);
  fill("pink");
  triangle(xmiddle, ymiddle-ymiddle*.025, xmiddle, ymiddle-ymiddle*.2, xmiddle+xmiddle*.050,ymiddle-ymiddle*.025);
  fill(0);
  arc(xmiddle-xmiddle*.15, ymiddle*.8, xmiddle*.1, ymiddle*.1, 0, PI);
  arc(xmiddle+xmiddle*.15, ymiddle*.8, xmiddle*.1, ymiddle*.1, 0, PI);
  noFill();
  strokeWeight(3);
  arc(xmiddle, ymiddle*.825, xmiddle*.085, xmiddle*.04, PI, 0);
  arc(xmiddle-xmiddle*.15, ymiddle*.8, xmiddle*.225, ymiddle*.075, PI, 0);
  arc(xmiddle+xmiddle*.15, ymiddle*.8, xmiddle*.225, ymiddle*.075, PI, 0);
  arc(xmiddle-xmiddle*.15, ymiddle*.8, xmiddle*.225, ymiddle*.2, 0, PI);
  arc(xmiddle+xmiddle*.15, ymiddle*.8, xmiddle*.225, ymiddle*.2, 0, PI);
  strokeWeight(0);
  fill("red");
  arc(xmiddle,ymiddle+ymiddle*.05, xmiddle*.125, ymiddle*.075, PI, 0)
  arc(xmiddle, ymiddle+ymiddle*.06, xmiddle*.075, ymiddle*.065, 0, PI);



  for (var keys in controls){

    if(mouseX > controls[keys][0] && mouseX < controls[keys][0]+controls[keys][2]
      && mouseY > controls[keys][1] && mouseY < controls[keys][1]+controls[keys][2]){


      state = keys;
    }

    fill(0, 0, 0, 0);
    strokeWeight(5);
    stroke(255);

    image(hatArray[currentHat],0,0);

      }


  //Setting up Hats
  for(var keys in controls){
    fill(controls[keys][3]);
    rect(controls[keys][0],controls[keys][1],controls[keys][2],controls[keys][2]);


  if(mouseX > controls[keys][0] && mouseX < controls[keys][0] + controls[keys][2]
    && mouseY > controls[keys][1] && mouseY < controls[keys][1]+controls[keys][2]){

    console.log(fill);

    fill (127,200);
    rect(controls[keys][0],controls[keys][1],controls[keys][2],controls[keys][2]);

  }

}

  for(var i = 0; i < hatAmounts; i++){

    image(hatArray[i],i*63,350,80,80);
  }

  for(var keys in controls){
    fill (127,0);
    strokeWeight(5);
    rect(controls[keys][0],controls[keys][1],controls[keys][2],controls[keys][2]);

  }


  //INSTRUCTIONS
  strokeWeight(1);
  fill(255);
  textSize(20);
  textAlign(CENTER);
  textStyle(BOLD);
  text('LETS GET SPOOKY', 200,25);
  strokeWeight(0);
  textStyle(NORMAL);
  textSize(12);
  text('Click on a costume so I can try it on, press any key to pick my body paint!', 200,325);

}

function keyPressed() {
  r = random(140,206);
  g = random(120,237);
  b = random(94,223);

}

function mousePressed(){

for( var keys in controls){
  if(mouseX > controls[keys][0]+-30 && mouseX < controls[keys][0]+controls[keys][2]
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
