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

// global variables for colors // backgorund
const bg_color1 = [71, 122, 139]

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
  let howManyAccross = 7;
let howManyDown = 4;
  // draw a 7x4 grid of faces
  let flip = canvasWidth / 7; // I don't quite understand what this variable does
  let w = canvasWidth / howManyAccross;
  let h = canvasHeight / howManyDown;
  let xShift = random(-2, 2);
  for(let i=0; i<howManyDown; i++) { // rows 
    for(let j=0; j<howManyAccross; j++) { // collums
      let offsetAmmount = 40

      let YOffset = random(-offsetAmmount,offsetAmmount) 
      let XOffset =  random(-offsetAmmount,offsetAmmount)
      let y = h/2 + h+YOffset*i ; // this is a version where all the gulls are smushed together. Maybe an effect could be built from this? 
      let x = w/2 + w+XOffset*j ;
      
      // let y = h/2 + h*i +YOffset;// this version is very much still on the grid, with added random. Could be better if the grid was more crowded? 
      // let x = w/2 + w*j +XOffset;
     
      if (i >= 0) {
        // all other faces
        
        push();
        translate(x, y);
        scale(flip/17, h/15);
        if((i+j)%100 == -1) {
          // nothing in here? 
        }
        else {
          let eyeSizeing = random(1.5, 3.5);
          let X1 = random(0, -10);
          let X2 = random(-6, -8);
          let X3 = random(-4, -6);
          let Y3 = random(-4, -6);
          let TP = random(-5, -10);
          let Beak = random(-2, 2);

          
          let GullColor = random(180, 100);
          let SpinnerValue = random(0, 100);
          let FlipValue = random(0, 100);
          let beakColor = 215;
         
          
         
          if (SpinnerValue > 90){
          GullColor = 10
          flip = -17*8
          }
         
          else if (SpinnerValue < 15){
            beakColor = 30
            
          }
          else {
            GullColor = random(200, 100);
            beakColor = 215
            flip = 17*8
          }
          if (FlipValue > 50){
           //nothing in here? 
            }

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
