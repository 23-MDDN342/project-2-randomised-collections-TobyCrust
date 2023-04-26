/*
 * This program draws your arrangement of faces on the canvas.
 */

const canvasWidth = 960;
const canvasHeight = 500;
let curRandomSeed = 0;

let lastSwapTime = 0;
const millisPerSwap = 3000;

function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  curRandomSeed = int(random(0, 1000));

  // rotation in degrees
  angleMode(DEGREES);
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
  lastSwapTime = millis();
}

// global variables for colors
const bg_color1 = [71, 222, 219]

function mouseClicked() {
  changeRandomSeed();
}

function draw () {
  if(millis() > lastSwapTime + millisPerSwap) {
    changeRandomSeed();
  }

  // reset the random number generator each time draw is called
  randomSeed(curRandomSeed);

  // clear screen
  background(bg_color1);
  noStroke();

  // draw a 7x4 grid of faces
  let w = canvasWidth / 7;
  let h = canvasHeight / 4;
  for(let i=0; i<4; i++) {
    for(let j=0; j<7; j++) {
      let y = h/2 + h*i;
      let x = w/2 + w*j;
      if (i == 0) {
        // center face
        let eye_value = 2;
        let tilt_value = random(-45, 45);
        let mouth_value = random(1, 3);
        let is_cyclops = random(0, 100);
        if(is_cyclops < 10) {
          eye_value = 1;
          tilt_value = random(-5, 5);
          mouth_value = random(5, 10);
        }
        push();
        translate(x, y);
        scale(w/25, h/25);
        orangeAlienFace(tilt_value, eye_value, mouth_value);
        pop();
      }
      else if (i > 0) {
        // all other faces
        push();
        translate(x, y);
        scale(w/25, h/25);
        if((i+j)%2 == 0) {
          simplePurpleFace();
        }
        else {
          let eyeSizeing = random(1.5, 3.5);
          let X1 = random(0, -10);
          let X2 = random(-6, -8);
          let X3 = random(-4, -6);
          let Y3 = random(-4, -6);
          let TP = random(-5, -10);
          let Beak = random(-2, 2);

          push();
          let GullColor = random(180, 100);
          let SpinnerValue = random(0, 100);
          let beakColor = 215;
          
          if (SpinnerValue > 90){
          GullColor = 10
          
          }
          else if (SpinnerValue < 15){
            beakColor = 30
          }
          else {
            GullColor = random(200, 100);
            beakColor = 215
          }

            
            
          
          pop();

          
          
          MyFace(eyeSizeing, X1, X3, Y3, X2, TP, Beak, GullColor, beakColor);
        }
        pop();
      }
    }
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
