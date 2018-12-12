
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


/////////////////////////////////////////////////////////////////////////////////////

function setup() {
    createCanvas(400,400);
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
  }


function draw() {
    background(255);
   //Setup for Demeter Emotions

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

/////////////////////////////////////////////////////////////////////////////////

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
