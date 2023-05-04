
const canvasWidth = 960;
const canvasHeight = 500;
let curRandomSeed = 0;

let lastSwapTime = 0;
const millisPerSwap = 6000;

let t = 0; //wave time

function setup() {
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
const bg_color1 = [73, 142, 169]

function mouseClicked() {
  changeRandomSeed();
}

function draw() {
  if (millis() > lastSwapTime + millisPerSwap) {
    changeRandomSeed();
  }

  // reset the random number generator each time draw is called
  randomSeed(curRandomSeed);

  // clear screen
  background(bg_color1);



  let howManyAccross = 8;
  let howManyDown = 5;
  let downwards = canvasHeight/ 4;
  // draw a 7x4 grid of faces
  let flip = canvasWidth / 10; // flips the seagulls around
  let w = canvasWidth / howManyAccross;
  let h = canvasHeight / howManyDown;

  
  for (let i = 0; i < howManyDown; i++) { // rows 
    for (let j = 0; j < howManyAccross; j++) { // collums
      let offsetAmmount = 40

      let YOffset = random(-offsetAmmount, offsetAmmount) // change how high up on each other they can come
      let XOffset = random(-offsetAmmount+15, offsetAmmount-15) // cahnges how far they shift left and right

      let y = h / 2 + h * i - YOffset;// this version is very much still on the grid, with added random. Could be better if the grid was more crowded? 
      let x = w / 2 + w * j - XOffset;

      if (i >= 0) {
        // all other faces

        push();
        translate(x, y);
        scale(flip / 17, downwards / 15);

        let eyeSizeing = random(1.5, 3.5);
        let X1 = random(0, -10);
        let X2 = random(-6, -8);
        let X3 = random(-4, -6);
        let Y3 = random(-4, -6);
        let TP = random(-5, -10);
        let Beak = random(-2, 2);
        let Bags = Math.floor(random(0, 2));
        let EyeM = (0, 5);
        let BeakC = random(0, 255);
        let Brows = random(180, 250);
        let EyeColor = random(155, 255);
        let GullColor = random(230, 60);
        let SpinnerValue = random(0, 100);
        let noBrows = random(0, 100);
        let EyeMove = random(-0.2, 0.2);
        let eyeMo = random(0, -3);
        let Rare = random(0, 100);
        let veryRare = random(0, 100);
        let extreamRare = random(0, 100);
        let chip = random(0.2, -0.4);
        let Hairs = 0;

        if (BeakC <= 200) { // make the beak green
          BeakC = 255
        }

        if (noBrows >= 70) { // makes it 50 % chance for there to be now eye brows. 
          Bags = 2
        }

        if (noBrows <= 10) { // makes it more common for there to be tired seagulls as too many eyebrows is a bit distracting
          Bags = -1
        }

        if (Rare > 75) {
          Hairs = 0.1
        }

        if (veryRare > 94) {
          BeakC = 55
          GullColor = 30
        }

        if (extreamRare > 98) {
          chip = 0.1
        }

        if (SpinnerValue > 80) {

          flip = -17 * 8
        }

        else {
          GullColor = random(250, 100);

          flip = 17 * 8
        }

        MyFace(eyeSizeing, X1, X3, Y3, X2, TP, Beak, GullColor, EyeM, EyeColor, Bags, BeakC, Brows, chip, Hairs, eyeMo, EyeMove);

        push()
  beginShape(); 
  fill(40,50,200,50);
  stroke(40,50,300,50);
  // loop through x values from 0 to the width of the canvas
  for (let x = 0; x <= width; x += 5) {
    // calculate the y value of the sine wave using the current x value and a time-based offset
    let y = height/4 + sin(x/20*PI + t);
    
    // add some noise to the y value based on the current x and a time-based offset
    y += noise(x/900, t) * height/2;
    
    // flip the y value so the wave is right-side-up
    
    
    // add a curve vertex at the current x and y values
    curveVertex(x, y);
    curveVertex(0, 0);
    
    curveVertex(0, 400);
    
    curveVertex(1200, 400);
    curveVertex(1200, 0);

  }
  
  // end the curve
  endShape();
  
  // update the time offset
  t += 0.01;
pop();



      }
      pop();
      ellipse(mouseX, mouseY, 10, 10);
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
//latest