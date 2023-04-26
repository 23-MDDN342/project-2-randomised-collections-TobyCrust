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



function MyFace(eyeSizeing, X1, X3, Y3, X2, TP, Beak, GullColor, beakColor){
  angleMode(RADIANS);

  
  angleMode(DEGREES);

  let x1= -1;
  let y1 = 7;

  let x2 = -5;
  let y2 = 5;

  let x3 = -4;
  let y3 = -5;

  let x4 = 4;
  let y4 = -5;

  let x5 = 5;
  let y5 = 5;

  let x6 = 1;
  let y6 = 7;

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



  let centerX = 0;
  let distactBetweenEyes = 5
  let ten = 4.5;
  let eyesizer = 2;
  
  fill(255);
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
  translate((-X2/2-X3/2)+Beak+2, -0.4 );
  arc(0, 0, 5, 2, 50, 150);
  pop();
  // arc(0, TP, 5, 1, 0, 360);//halo
  arc(0, TP, 1, 2, 90, 270);


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
