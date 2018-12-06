/*
//Variables for Face Capture
var capture;
var tracker;
var classifier;
var emotionData;

// Arrays for the position #'s of each part of a Face
var rightEye = [23, 63, 24, 64, 25, 65, 26, 66];
var rightEyebrow = [19, 20, 21, 22];
var rightPupil = [27];
var leftEye = [30, 68, 29, 67, 28, 70, 31, 69];
var leftEyebrow = [15, 16, 17, 18];
var leftPupil = [32];
var upperLip = [44, 45, 46, 47, 48, 49, 50, 59, 60, 61];
var lowerLip = [44, 56, 57, 58, 50, 51, 52, 53, 54, 55];
var noseOutline = [33, 40, 39, 38, 43, 37, 42, 36, 35, 34];
var noseAllPoints = [33, 41, 62, 40, 39, 38, 43, 37, 42, 36, 35, 34];
var faceOutline = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 22, 21, 20, 19];
var positions = []; // will store tracked face positions
var parameters = []; // will store tracked face parameters

var emojiSize = 32;
var emotionEmojis = {"angry":"😠", "disgusted":"🤮", "fear":"😨", "surprised":"😮", "sad":"🙁", "happy":"😀"};
var lastEmotions = [" "];
*/

/////////////////////////////////////////////////////////////////////////////////////

//Variables for Gameplay
var isGameOver;
var score;

var GRAVITY = 0.3;
var JUMP = -5;

var groundSprites;
var GROUND_SPRITE_WIDTH = 50;
var GROUND_SPRITE_HEIGHT = 50;
var numGroundSprites;
var numTreeSprites;
var curTree;



var player_walk;
var player_sprite;
var treeSprites;
var treeAnimation;

var obstacleSprites;



function preload() {


  player_walk = loadAnimation('assets/ghost_standing0001.png', 'assets/ghost_standing0007.png');
  player_jump = loadAnimation('assets/ghost_walk0001.png', 'assets/ghost_walk0002.png','assets/ghost_walk0003.png', 'assets/ghost_walk0004.png');


  treeAnimation = loadAnimation('assets/cloud_breathing0001.png', 'assets/cloud_breathing0002.png');
  treeAnimationWinter = loadAnimation('assets/cloud_breathing0003.png', 'assets/cloud_breathing0004.png');
  obstacleFlower = loadAnimation('assets/flower.png', 'assets/flower0001.png');

}

function setup() {
    isGameOver = false;
    score = 0;

    createCanvas(1000, 600);
    background(150, 200, 250);
    groundSprites = new Group();
    treeSpritesBG = new Group();

    numGroundSprites = width/GROUND_SPRITE_WIDTH+1;
    numTreeSprites = width/GROUND_SPRITE_WIDTH+1;


    for (var n = 0; n < numTreeSprites; n++) {

        treeSprites = createSprite(n*200, height-170);
        treeSprites.addAnimation('fall',treeAnimation);
        treeSprites.addAnimation('winter',treeAnimationWinter);
        treeSpritesBG.add(treeSprites);
    }

    /*if(mouseX > 0  && mouseX < width/2){
      curTree = treeAnimation;
      console.log("fall");
    }
    if(mouseX > width/2 && mouseX < width){
      curTree = treeAnimationWinter;
      console.log("winter");}
*/

    for (var n = 0; n < numGroundSprites; n++) {
        var groundSprite = createSprite(n*50, height-25, GROUND_SPRITE_WIDTH, GROUND_SPRITE_HEIGHT);
        groundSprites.add(groundSprite);
    }


    // Create the Player sprite and add it's animations
    player_sprite = createSprite(100, 284, 70, 94);
    player_sprite.addAnimation('walk', player_walk);
    player_sprite.addAnimation('jump', player_jump);

    obstacleSprites = new Group();

/*
    /////////////////////////////////////////////////////////////////////////////////////////////////

          //Video Capture
    capture = createCapture(VIDEO);
    capture.hide();

      //Emotion Detection
    // set eigenvector 9 and 11 to not be regularized. This is to better detect motion of the eyebrows
    pModel.shapeModel.nonRegularizedVectors.push(9);
    pModel.shapeModel.nonRegularizedVectors.push(11);

    tracker = new clm.tracker({useWebGL : true});
    tracker.init(pModel);
    tracker.start(capture.elt);

    classifier = new emotionClassifier();
    classifier.init(emotionModel);
    emotionData = classifier.getBlank();
*/
  }


function draw() {

///////////////////////////////////////////////////////////////////////////////////////
/*    //Setup for Demeter Emotions

      positions = tracker.getCurrentPosition();
      parameters = tracker.getCurrentParameters();
      var emotionRecognition = classifier.meanPredict(parameters);

      var tempEmoji;
      var currEmoji;

          if (emotionRecognition && positions.length > 0) {
              // displayEmotionValues(emotionRecognition);
                currEmoji = emotionEmojis[getDominantEmotion(emotionRecognition)];

                if(currEmoji == "😠" || currEmoji == "🙁" ){
                  tempEmoji = "😠"
                    }else if (currEmoji == "😀" || currEmoji == "😮" || currEmoji == "😨" || currEmoji == "🤮"){
                      tempEmoji = "😀"
                    }

            lastEmotions.unshift(currEmoji);

              if (lastEmotions.length > 30) {
                  lastEmotions = lastEmotions.slice(0,29);
              }

              if(tempEmoji == "😠"){
                fill(255,0,0);
                rect(100,100,100,100);
                  }else if (tempEmoji == "😀"){
                    fill(0,255,0);
                    rect(100,100,100,100);
                  }

                  console.log(tempEmoji);

            }
              textSize(50);
              textAlign(CENTER, CENTER);
              text(tempEmoji,50,50);

          textSize(10);
*/

/////////////////////////////////////////////////////////////////////////////////

        if(mouseIsPressed)
        treeSprites.changeAnimation('winter');
        else
            treeSprites.changeAnimation('fall');

    if (isGameOver) {
        background(0);
        fill(255);
        textAlign(CENTER);
        text("Your score was: " + score, camera.position.x, camera.position.y - 20);
        text("Game Over! Click anywhere to restart", camera.position.x, camera.position.y);
    } else {
        background(150, 200, 250);
        player_sprite.changeAnimation('walk');
        player_sprite.velocity.y = player_sprite.velocity.y + GRAVITY;

        if (groundSprites.overlap(player_sprite)) {
            player_sprite.velocity.y = 0;
            player_sprite.position.y = (height-50) - (player_sprite.height/2);
        }

        if (keyDown(UP_ARROW)) {
            player_sprite.velocity.y = JUMP;
            player_sprite.changeAnimation('jump');
        }

        player_sprite.position.x = player_sprite.position.x + 5;
        camera.position.x = player_sprite.position.x + (width/4);

        var firstGroundSprite = groundSprites[0];
        if (firstGroundSprite.position.x <= camera.position.x - (width/2 + firstGroundSprite.width/2)) {
            groundSprites.remove(firstGroundSprite);
            firstGroundSprite.position.x = firstGroundSprite.position.x + numGroundSprites*firstGroundSprite.width;
            groundSprites.add(firstGroundSprite);
        }

        var firstTreeSprite = treeSpritesBG[0];
        if (firstTreeSprite.position.x <= camera.position.x - (width/2 + firstTreeSprite.width/2)) {
            treeSpritesBG.remove(firstTreeSprite);
            firstTreeSprite.position.x = firstTreeSprite.position.x + numTreeSprites*firstTreeSprite.width;
            treeSpritesBG.add(firstTreeSprite);
        }

        if (random() > 0.97) {
            obstacle = createSprite(camera.position.x + width, random(100, (height-50)-15), 30, 30);
            //obstacle.addAnimation('flower',obstacleFlower);
            obstacleSprites.add(obstacle);
        }

        var firstObstacle = obstacleSprites[0];
        if (obstacleSprites.length > 0 && firstObstacle.position.x <= camera.position.x - (width/2 + firstObstacle.width/2)) {
            removeSprite(firstObstacle);
        }

        obstacleSprites.overlap(player_sprite, endGame);

        drawSprites();
        drawSprites(treeSpritesBG);

        score = score + 1;
        textAlign(CENTER);
        text(score, camera.position.x, 10);
    }
}

function endGame() {
    isGameOver = true;
}

function mouseClicked() {
  if (isGameOver) {

    for (var n = 0; n < numGroundSprites; n++) {
      var groundSprite = groundSprites[n];
      groundSprite.position.x = n*50;
    }

    for (var n = 0; n < numTreeSprites; n++) {
      var treeSprites = treeSpritesBG[n];
      treeSprites.position.x = n*200;
    }

    player_sprite.position.x = 100;
    player_sprite.position.y = height-75;

    obstacleSprites.removeSprites();

    score = 0;
    isGameOver = false;
  }
}



function getDominantEmotion(emotionRecognition, valueAlso = false) {
    var dominantEmotionValue = 0;
    var dominantEmotionString = '';
    for (var i = 0; i < emotionRecognition.length; i++) {
        if (emotionRecognition[i].value > dominantEmotionValue) {
            dominantEmotionValue = emotionRecognition[i].value;
            dominantEmotionString = emotionRecognition[i].emotion;
        }
    }

    if (!valueAlso){
        return dominantEmotionString;
    } else {
        return dominantEmotionString, dominantEmotionValue;
    }

}

/*

//Creating sprite using sprite sheets for animation
var mouse_moved = false;
var touch_started = false;
var explode_sprite_sheet;
var player_sprite_sheet;
var tile_sprite_sheet;
var explode_sprite;
var player_walk;
var player_stand;
var player_sprite;

// Normally you would put this in a .json file, but I'm putting it here
// for example purposes
var player_frames = [
  {'name':'player_walk01', 'frame':{'x':0, 'y': 0, 'width': 70, 'height': 94}},
  {'name':'player_walk02', 'frame':{'x':71, 'y': 0, 'width': 70, 'height': 94}},
  {'name':'player_walk03', 'frame':{'x':142, 'y': 0, 'width': 70, 'height': 94}},
  {'name':'player_walk04', 'frame':{'x':0, 'y': 95, 'width': 70, 'height': 94}},
  {'name':'player_walk05', 'frame':{'x':71, 'y': 95, 'width': 70, 'height': 94}},
  {'name':'player_walk06', 'frame':{'x':142, 'y': 95, 'width': 70, 'height': 94}},
  {'name':'player_walk07', 'frame':{'x':213, 'y': 0, 'width': 70, 'height': 94}},
  {'name':'player_walk08', 'frame':{'x':284, 'y': 0, 'width': 70, 'height': 94}},
  {'name':'player_walk09', 'frame':{'x':213, 'y': 95, 'width': 70, 'height': 94}},
  {'name':'player_walk10', 'frame':{'x':355, 'y': 0, 'width': 70, 'height': 94}},
  {'name':'player_walk11', 'frame':{'x':284, 'y': 95, 'width': 70, 'height': 94}}
];

function preload() {
  //
  //  There are two different ways to load a SpriteSheet
  //     1. Given width, height that will be used for every frame and the
  //        number of frames to cycle through. The sprite sheet must have a
  //        uniform grid with consistent rows and columns.
  //     2. Given an array of frame objects that define the position and
  //        dimensions of each frame.  This is Flexible because you can use
  //        sprite sheets that don't have uniform rows and columns.
  //
  //    Below demonstrates both methods:


  // Load the explode sprite sheet using frame width, height and number of frames
  explode_sprite_sheet = loadSpriteSheet('assets/explode_sprite_sheet.png', 171, 158, 11);

  // Load player sprite sheet from frames array
  player_sprite_sheet = loadSpriteSheet('assets/player_spritesheet.png', player_frames);

  // Load the json for the tiles sprite sheet
  loadJSON('assets/tiles.json', function(tile_frames) {
    // Load tiles sprite sheet from frames array once frames array is ready
    tile_sprite_sheet = loadSpriteSheet('assets/tiles_spritesheet.png', tile_frames);
  });

  // Exploding star animation
  explode_animation = loadAnimation(explode_sprite_sheet);

  // Player walk animation passing in a SpriteSheet
  player_walk = loadAnimation(player_sprite_sheet);

  // An animation with a single frame for standing
  player_stand = loadAnimation(new SpriteSheet('assets/player_spritesheet.png',
    [{'name':'player_stand', 'frame':{'x':284, 'y': 95, 'width': 70, 'height': 94}}]));
}

function setup() {
  createCanvas(800, 400);

  // Create the exploding star sprite and add it's animation
  explode_sprite = createSprite(width / 2, 100, 171, 158);
  explode_sprite.addAnimation('explode', explode_animation);

  // Create the Player sprite and add it's animations
  player_sprite = createSprite(100, 284, 70, 94);
  player_sprite.addAnimation('walk', player_walk);
  player_sprite.addAnimation('stand', player_stand);
}

function draw() {
  clear();
  background(0);

  // Draw the ground tiles
  for (var x = 0; x < 840; x += 70) {
    tile_sprite_sheet.drawFrame('snow.png', x, 330);
  }

  // Draw the sign tiles
  tile_sprite_sheet.drawFrame('signExit.png', 700, 260);
  tile_sprite_sheet.drawFrame('signRight.png', 0, 260);

  // Mobile friendly controls
  var eventX;
  if (isTouch()) {
    eventX = touchX;
  } else {
    eventX = mouseX;
  }

  //if mouse is to the left
  if(eventX < player_sprite.position.x - 10) {
    player_sprite.changeAnimation('walk');
    // flip horizontally
    player_sprite.mirrorX(-1);
    // move left
    player_sprite.velocity.x = -2;
  }
  else if(eventX > player_sprite.position.x + 10) {
    player_sprite.changeAnimation('walk');
    // flip horizontally
    player_sprite.mirrorX(1);
    // move right
    player_sprite.velocity.x = 2;
  }
  else {
    player_sprite.changeAnimation('stand');
    //if close to the mouse, don't move
    player_sprite.velocity.x = 0;
  }

  //draw the sprite
  drawSprites();
}

function touchStarted() {
  touch_started = true;
}

function mouseMoved() {
  mouse_moved = true;
}

function isTouch() {
  return touch_started && !mouse_moved;
}
*/
