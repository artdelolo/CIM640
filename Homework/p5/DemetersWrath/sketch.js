
/////////////////////////////////////////////////////////////////////////////////////

//Variables for Gameplay
var isGameOver;
var score;

var GRAVITY = .2;
var JUMP = -9;

var groundSprites;
var GROUND_SPRITE_WIDTH = 49;
var GROUND_SPRITE_HEIGHT = 56;
var numGroundSprites;
var numTreeSprites;
var curTree;


var player_walk;
var player_sprite;
var treeSprites;
var treeAnimation;
var treeAnimationDead;
var obstacleFlower;

var obstacleSprites;
var bgImg;
var grass;
var longGrass;
var castle;
var castle1;
var title;
var loseCard;

var summerSky;
var summerColor;
var summerCloud;
var winterCloudr;

var backgoundMusic;

function preload() {


  player_walk = loadAnimation('assets/persephone-walk-001.png', 'assets/persephone-walk-002.png','assets/persephone-walk-003.png','assets/persephone-walk-004.png','assets/persephone-walk-005.png');
  player_jump = loadAnimation('assets/persephone-jump-001.png','assets/persephone-jump-001.png');


  treeAnimation = loadAnimation('assets/summer-tree.png', 'assets/summer-tree2.png', 'assets/summer-tree3.png');
  treeAnimationWinter = loadAnimation('assets/fall-tree.png', 'assets/fall-tree2.png', 'assets/fall-tree3.png');
  treeAnimationDead = loadAnimation('assets/winter-tree.png', 'assets/winter-tree-1.png');

  summerCloud = loadAnimation('assets/summerCloud001.png','assets/summerCloud001.png', 'assets/summerCloud002.png','assets/summerCloud002.png', 'assets/summerCloud003.png', 'assets/summerCloud003.png');

  grass = loadImage('assets/grass.png');
  longGrass = loadAnimation('assets/longGrass-001.png','assets/longGrass-001.png','assets/longGrass-002.png','assets/longGrass-002.png','assets/longGrass-003.png','assets/longGrass-003.png','assets/longGrass-004.png','assets/longGrass-004.png',);
  castle = loadImage('assets/castle.png');
  castle1 = loadImage('assets/castle1.png');
  obstacleFlower = loadImage('assets/obstacle.png');
  backgoundMusic = loadSound('assets/BGMUSIC.mp3');


  title = loadImage('assets/TitleCard.jpg');
  loseCard = loadImage('assets/TitleCardLose.jpg');
  summerSky= loadImage('assets/summer-sky.jpg');
  summerColor= loadImage('assets/summer-color.png');
  winterColor = loadImage('assets/winter-color.png');

}

function setup() {
    isGameOver = true;
    score = 0;

    createCanvas(1000, 600);
    background(150, 200, 250);
    groundSprites = new Group();
    treeSpritesBG = new Group();

    backgoundMusic.loop();

    numGroundSprites = width/GROUND_SPRITE_WIDTH+1;

    for (var n = 0; n < numGroundSprites; n++) {
        var groundSprite = createSprite(n*50, height-25, GROUND_SPRITE_WIDTH, GROUND_SPRITE_HEIGHT);
        groundSprite.addImage(grass);
        groundSprites.add(groundSprite);
    }


    // Create the Player sprite and add it's animations
    player_sprite = createSprite(100, 320, 70, 94);
    player_sprite.addAnimation('walk', player_walk);
    player_sprite.addAnimation('jump', player_jump);


    obstacleSprites = new Group();
    snowSprites = new Group();

  }


function draw() {

    if (isGameOver) {
        if(score == 0){
          background(0);
          fill(255);
          image(title,0,0);
          textAlign(CENTER);
          text("You are Persephone,", camera.position.x-300, camera.position.y-20);
          text("Goddess of vegetation and Queen of the UNDERWORLD.", camera.position.x-300, camera.position.y);
          text("Summer is ending, and it is time to return home to HADES.", camera.position.x-300, camera.position.y+20);

          text("Use the UP arrow to JUMP", camera.position.x-300, camera.position.y+80);
          text("Reach the UNDERWORLD without hitting a wheat bundle", camera.position.x-300, camera.position.y+60);
          text("Click anywhere to start", camera.position.x-300, camera.position.y+140);

        } else if(score > 0 && score < 1949 ){
          background(0);
          fill(255);
          image(loseCard,0,0);
          text("YOU LOST", camera.position.x-300, camera.position.y);
          text("You did not make it back to the UNDERWORLD", camera.position.x-300, camera.position.y+20);
          text("Click anywhere to RETRY", camera.position.x-300, camera.position.y+40);        backgoundMusic.play;
        }
        else if(score >= 1950){
        background("pink");
        fill(255);
        image(title,0,0);
        textAlign(CENTER);
        text("YOU WON!", camera.position.x-300, camera.position.y);
        text("You made it back to the UNDERWORLD", camera.position.x-300, camera.position.y+20);
        text("Click anywhere to PLAY AGAIN", camera.position.x-300, camera.position.y+40);
        }
    } else {
        camera.off();
        image(summerSky,0,0);
        animation(summerCloud,500,200);
        animation(longGrass,500,560);
        camera.on();

        image(castle,9640,120);
        player_sprite.changeAnimation('walk');
        player_sprite.velocity.y = player_sprite.velocity.y + GRAVITY;


        if (groundSprites.overlap(player_sprite)) {
            player_sprite.velocity.y = 0;
            player_sprite.position.y = (height-50) - (player_sprite.height/2);
        }

        if (keyWentDown(UP_ARROW)) {
            player_sprite.velocity.y = JUMP;
            player_sprite.changeAnimation('jump');
        }
        if (player_sprite.position.y < 400) {
            player_sprite.changeAnimation('jump');
        }

        if(score < 1836){
          player_sprite.position.x = player_sprite.position.x + 5;
          camera.position.x = player_sprite.position.x + (width/4);
        }else if(score >= 1836){
          player_sprite.position.x = player_sprite.position.x + 5;
          camera.position.x = 9530;
        }


        console.log(player_sprite.position.x);
        console.log(camera.position.x);
        console.log(width);
        console.log(score);
        console.log('------');


        if(score < 5){
          treeSprites = createSprite(score*300, height-220);
          treeSprites.addAnimation('fall',treeAnimation);
          treeSpritesBG.add(treeSprites);
        }

        if(score < 666){
          if(random() > .99) {
            treeSprites = createSprite(camera.position.x + width, height-220);
            treeSprites.addAnimation('fall',treeAnimation);
            treeSpritesBG.add(treeSprites)
          }

          if (random() > .99) {
              obstacle = createSprite(camera.position.x + width, (height-80));
              obstacle.addImage(obstacleFlower);
              obstacleSprites.add(obstacle);
          }
        }else if(score >=666 && score <1332){
          if(random() > .99) {
            treeSprites = createSprite(camera.position.x + width, height-220);
            treeSprites.addAnimation('winter',treeAnimationWinter);
            treeSpritesBG.add(treeSprites)
          }

          if (random() > .99) {

              obstacle = createSprite(camera.position.x + width, (height-70));
              obstacle.addImage(obstacleFlower);
              obstacleSprites.add(obstacle);
        }

      }else if(score >= 1332){
        if(random() > .99) {
          treeSprites = createSprite(camera.position.x + width, height-220);
          treeSprites.addAnimation('dead',treeAnimationDead);
          treeSpritesBG.add(treeSprites)
        }

        if (random() > .99) {

            obstacle = createSprite(camera.position.x + width, (height-70));
            obstacle.addImage(obstacleFlower);
            obstacleSprites.add(obstacle);
      }

    }



        var firstTreeSprite = treeSpritesBG[0];
        if (treeSpritesBG.length > 0 && firstTreeSprite.position.x <= camera.position.x - (width/2 + firstTreeSprite.width/2)) {
            removeSprite(firstTreeSprite);
        }

        var firstObstacle = obstacleSprites[0];
        if (obstacleSprites.length > 0 && firstObstacle.position.x <= camera.position.x - (width/2 + firstObstacle.width/2)) {
            removeSprite(firstObstacle);
        }


        var firstGroundSprite = groundSprites[0];
        if (firstGroundSprite.position.x <= camera.position.x - (width/2 + firstGroundSprite.width/2)) {
            groundSprites.remove(firstGroundSprite);
            firstGroundSprite.position.x = firstGroundSprite.position.x + numGroundSprites*firstGroundSprite.width;
            groundSprites.add(firstGroundSprite);
        }

        if(score == 2050){
          endGame();
        }

        obstacleSprites.overlap(player_sprite, endGame);

        drawSprites();

        score = score + 1;
        textAlign(CENTER);
        text(score, camera.position.x, 10);

        image(castle1,9640,115);

        image(summerColor,(camera.position.x-width/2)-2,0);
        if (score > 200) {
          tint(255, score/10);
          image(winterColor,(camera.position.x-width/2)-2,0);
        }
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

    player_sprite.position.x = 100;
    player_sprite.position.y = height-75;
    camera.position.x = player_sprite.position.x + (width/4);

    obstacleSprites.removeSprites();
    treeSpritesBG.removeSprites();
    snowSprites.removeSprites();


    score = 0;
    isGameOver = false;
  }else{
    backgoundMusic.play;
  }
}
