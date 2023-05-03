/*
 * This program draws your arrangement of faces on the canvas.
 */

const canvasWidth = 960;
const canvasHeight = 500;
let curRandomSeed = 0;

let lastSwapTime = 0;
const millisPerSwap = 3000;

<<<<<<< Updated upstream
function setup () {
=======
let t = 0;


function setup() {
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
  

=======


  beginShape();
  
  // loop through x values from 0 to the width of the canvas
  for (let x = 0; x <= width-600; x += 5) {
    // calculate the y value of the sine wave using the current x value and a time-based offset
    let y = height/2 + sin(x/20*PI + t) * height/2;
    
    // add some noise to the y value based on the current x and a time-based offset
    y += noise(x/200, t) * height/2;
    
    // flip the y value so the wave is right-side-up
    
    
    // add a curve vertex at the current x and y values
    curveVertex(x, y);
  }
  
  // end the curve
  endShape();
  
  // update the time offset
  t += 0.01;

  







  let howManyAccross = 7;
  let howManyDown = 4;
>>>>>>> Stashed changes
  // draw a 7x4 grid of faces
  let flip = canvasWidth / 7;
  let w = canvasWidth / 7;
  let h = canvasHeight / 4;
  let xShift = random(-2, 2);
  for(let i=0; i<4; i++) { // rows 
    for(let j=0; j<7; j++) { // collums
      let y = h/2 + h*i;
      let x = w/2 + w*j;
     
      if (i >= 0) {
        // all other faces
        
        push();
        translate(x, y);
<<<<<<< Updated upstream
        scale(flip/17, h/15);
        if((i+j)%100 == -1) {
          
        }
        else {
=======
        scale(flip / 17, h / 15);
          
>>>>>>> Stashed changes
          let eyeSizeing = random(1.5, 3.5);
          let X1 = random(0, -10);
          let X2 = random(-6, -8);
          let X3 = random(-4, -6);
          let Y3 = random(-4, -6);
          let TP = random(-5, -10);
          let Beak = random(-2, 2);
<<<<<<< Updated upstream
=======
          let Bags = Math.floor(random(0, 2));
          let EyeM = (0, 5);
          let BeakC = random(0, 255);
          let Brows = random(180, 250);
          let EyeColor = random(155, 255);
          let GullColor = random(230, 60);
          let SpinnerValue = random(0, 100);
          let noBrows = random(0, 100);
          let EyeMove = random(-0.2,0.2);
          let eyeMo = random(0, -3);
          let Rare = random(0, 100);
          let veryRare = random(0, 100);
          let extreamRare = random(0, 100);
          let chip = random(0.2,-0.4);
          let Hairs = 0;
>>>>>>> Stashed changes

          
<<<<<<< Updated upstream
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
=======
>>>>>>> Stashed changes
          else {
            GullColor = random(200, 100);
            beakColor = 215
            flip = 17*8
          }

<<<<<<< Updated upstream
           
          if (FlipValue > 50){
           
            

            }
         
         

          
          
          MyFace(eyeSizeing, X1, X3, Y3, X2, TP, Beak, GullColor, beakColor);
=======
          MyFace(eyeSizeing, X1, X3, Y3, X2, TP, Beak, GullColor, EyeM, EyeColor, Bags, BeakC, Brows, chip, Hairs, eyeMo, EyeMove);
>>>>>>> Stashed changes
        }
        pop();
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
