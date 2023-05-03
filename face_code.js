/*
 * This file should contain code that draws your faces.
 *
 * Each function takes parameters and draws a face that is within
 * the bounding box (-10, -10) to (10, 10).
 *
 * These functions are used by your final arrangement of faces as well as the face editor.
 */


/*
 * tilt_value is in degrees
 * eye_value is an integer number of eyes: either 0, 1, 2, or 3
 * mouth_value is how open the mouth is and should generally range from 0.5 to 10
 */


<<<<<<< Updated upstream

function MyFace(eyeSizeing, X1, X3, Y3, X2, TP, Beak, GullColor, beakColor){
=======
function MyFace(eyeSizeing, X1, X3, Y3, X2, TP, Beak, GullColor, EyeM, EyeColor, Bags, BeakC, Brows, chip, Hairs, eyeMo, EyeMove, Pupils) {
>>>>>>> Stashed changes
  angleMode(RADIANS);

  
  angleMode(DEGREES);

  
  let y1 = 7;

  
  let y2 = 5;

  let y5 = 5;

  let y6 = 7;
<<<<<<< Updated upstream
=======
  

  //----------------------------------------------body draw-------------------------
  strokeWeight(0);
  point(X1, y1);
  point(X2, y2);
  point(X3, Y3);
  point(0, TP); // top point
  point(-X3, Y3);
  point(-X2, y5);
  point(-X1, y6);
  strokeWeight(0.1);

  fill(GullColor);
  beginShape()
  curveVertex(X1, y1);
  curveVertex(X2, y2);

  curveVertex(X3, Y3);
  curveVertex(0, TP); // top point
  curveVertex(-X3, Y3);
  curveVertex(-X2, y5);
  curveVertex(-X1, y6);
  endShape();
  //-------------------------------------------body end---------------------------------


  let yellowEye = 155
 
  if (EyeColor <= 240) {
    yellowEye = 255;
  }

  let xc = constrain(mouseX, 1.7, 2.3);
  let xs = constrain(mouseY, 1.7, 2.3);
  

  fill(255, 255, yellowEye); //eye color
  ellipse(-X3 + 1, -3, eyeSizeing, eyeSizeing); // Right eye
  fill(0);
  ellipse(-X3 + 1.5 + chip*2, -3, 0.5, 0.5); // eye pupil

  noFill();
  strokeWeight(Bags / 10);
  if (Bags > 1) { // bags needs to be able to get to above 1! 
    strokeWeight(0);
  }
  arc(-X3 + eyeMo, -2.5 + eyeSizeing / 2, 3, 2, 50, Brows - 100 - BeakC / 10); // eye bags
  strokeWeight(0.1 + Bags / 10);
  if (Bags > 1) {
    strokeWeight(0);
  }
  arc(-X3+ eyeMo, -1 - eyeSizeing / 2 + eyeMo*0.05, 3, 3, Brows / 0.9, Brows + 100 - BeakC / 6); // left eyebrow
  arc(-X3 + 1, -2 - eyeSizeing / 2, 3, 3, Brows / 0.9, Brows + 100 - BeakC / 6); // right eyebrow
>>>>>>> Stashed changes

  
strokeWeight(0.1);
point(X1, y1);
point(X2, y2);
point(X3, Y3);
point(0, TP); // top point
point(-X3, Y3);
point(-X2, y5);
point(-X1, y6);
strokeWeight(0.1);

fill(GullColor);
beginShape()
curveVertex(X1, y1);
curveVertex(X2, y2);

curveVertex(X3, Y3);
curveVertex(0, TP); // top point
curveVertex(-X3, Y3);
curveVertex(-X2, y5);
curveVertex(-X1, y6);

endShape();


<<<<<<< Updated upstream
=======
  ellipse(-X3 + eyeMo, -2 + eyeMo*0.2, eyeSizeing, eyeSizeing); // left eye
  fill(0);
  ellipse(-X3 + 0.5 + chip + eyeMo, -2 + eyeMo*0.2, 0.5, 0.5); // eye pupil

  noFill();
  push();
  if (Beak < -0.5) {
    noStroke();
  }
  translate((-X2 / 2 - X3 / 2) + Beak + 2, -0.4);
  arc(0, 0, 5, 2, 50, 150); // mouth smile :)

  pop();
  
  strokeWeight(Hairs);
  arc(-1.5, TP, 3, 3, 330, 0);
  arc(-1.5, TP, 3, 1.7, 330, 0); //hairs
 



  strokeWeight(0)
  fill(255,255,0,0) // turnning it off and on by effecting the stoke weight and transparency
  translate(-X3,0);
  rotate(25);
  rect(3.2,-2,0.6,2,0.1,0.1) //chip
>>>>>>> Stashed changes

  let centerX = 0;
  let distactBetweenEyes = 5
  let ten = 4.5;
  let eyesizer = 2;
  
  fill(255);
<<<<<<< Updated upstream
  ellipse(-X3+1,-3,eyeSizeing,eyeSizeing);
  fill(0);
  ellipse(-X3+1.5,-3,0.5,0.5);
  
  fill(255, beakColor, 0);
  triangle((-X2-X3)/2, -0.3, (-X2/2-X3/2)+Beak+3, 0.5, (-X2-X3)/2, 1.3);
  fill(255);
  ellipse(-X3,-2,eyeSizeing,eyeSizeing);
  fill(0);
  ellipse(-X3+0.5,-2,0.5,0.5);
 
  noFill();
  push();
  if (Beak < -0.5){
    noStroke();
  }
  translate((-X2/2-X3/2)+Beak+2, -0.4 );
  arc(0, 0, 5, 2, 50, 150);
  
  pop();
  // arc(0, TP, 5, 1, 0, 360);//halo
  // arc(0, TP, 1, 2, 90, 270);


  // let w = 4; // Width of the canvas divided by 10
  // let h = 10; // Height of the canvas divided by 10
  // let r = 1.5; // Corner radius divided by 10
  // let o = -1;

  // beginShape();
  // // Top-right corner
  // vertex(w - r, 0);
  // bezierVertex(w - r, 0, w, 0, w, r);

  
  // // Bottom-right corner
  // vertex(w, h - r);
  // bezierVertex(w, h - r, w, h, w - r, h);
  // // Bottom-left corner
  // vertex(r, h);
  // bezierVertex(r, h, 0, h, 0, h - r);
  // // Top-left corner
  // vertex(0, r);
  // bezierVertex(0, r, 0, 0, r, 0);

  // vertex(w+o - r, -2);
  // bezierVertex(w+o - r, -2, w+o, -2, w+o, r);
  
  // endShape(CLOSE);
=======
  
  console.log(EyeMove);

  //----------------------------------------------------waves-----------------------------------


>>>>>>> Stashed changes
}


function orangeAlienFace(tilt_value, eye_value, mouth_value) {
  const bg_color3 = [71, 222, 219];
  const fg_color3 = [255, 93, 35];

  let headSize = 20
  let eyeSize = 5;
  let centerX = 0;
  let Iy = -4
  let distactBetweenEyes = 5
  let MouthDrop = 7
  
  // rotation in degrees
  angleMode(DEGREES);
  rotate(tilt_value);

 // head
  noStroke();
  fill(fg_color3);
  ellipse(centerX, 0, headSize, headSize);

  // 2 traditonal eyes
  if (eye_value === 1 || eye_value == 3) {
    fill(bg_color3);
    ellipse(centerX, Iy, eyeSize-1,eyeSize);
   
  }
// middle eye
  if (eye_value >= 2) {
    fill(bg_color3);
    ellipse(centerX - distactBetweenEyes, Iy, eyeSize);
    ellipse(centerX + distactBetweenEyes, Iy, eyeSize );
  }

  // mouth
  fill(bg_color3);
  ellipse(centerX, Iy + MouthDrop, distactBetweenEyes, mouth_value);
}


function simplePurpleFace() {
  fill(234, 122, 244);
  noStroke();
  // head
  ellipse(0, 0, 20);
  // eyes
  fill(255, 217, 114);
  ellipse(-3, -3, 3);
  ellipse( 3, -3, 3);
}

/*
 * thinness_value ranges from 0-100 and indicates how thin the face is
 */
function blockyFace(thinness_value) {
  // head
  noStroke();
  fill(134, 19, 136);
  let head_width = map(thinness_value, 0, 100, 8, 20);
  rect(-head_width/2, -9, head_width, 18);
 

  // eyes
  fill(234, 122, 244);
  ellipse(-2, -4, 1);
  ellipse( 2, -4, 1);
}
