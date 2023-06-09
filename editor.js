const canvasWidth = 960;
const canvasHeight = 500;
const bg_color = [71, 222, 219];
let slider1, slider2, slider3, slider4, slider5;
let slider6, slider7, slider8, slider9, slider10;
let slider11, slider12, slider13, slider14, slider15, slider16;
let slider17;
let faceSelector;
let faceGuideCheckbox;

function setup() {

  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // create sliders
  slider1 = createSlider(0, 100, 50);
  slider2 = createSlider(0, 100, 50);
  slider3 = createSlider(0, 100, 50);
  slider4 = createSlider(0, 100, 50);
  slider5 = createSlider(0, 100, 50);
  slider6 = createSlider(0, 100, 50);
  slider7 = createSlider(0, 100, 50);
  slider8 = createSlider(0, 100, 50);
  slider9 = createSlider(0, 100, 50);
  slider10 = createSlider(0, 100, 50);
  slider11 = createSlider(0, 100, 50);
  slider12 = createSlider(0, 100, 50);
  slider13 = createSlider(0, 100, 50);
  slider14 = createSlider(0, 100, 50);
  slider15 = createSlider(0, 100, 50);
  slider16 = createSlider(0, 100, 50);
  slider17 = createSlider(0, 100, 50);

  slider1.parent('slider1Container');
  slider2.parent('slider2Container');
  slider3.parent('slider3Container');
  slider4.parent('slider4Container');
  slider5.parent('slider5Container');
  slider6.parent('slider6Container');
  slider7.parent('slider7Container');
  slider8.parent('slider8Container');
  slider9.parent('slider9Container');
  slider10.parent('slider10Container');
  slider11.parent('slider11Container');
  slider12.parent('slider12Container');
  slider13.parent('slider13Container');
  slider14.parent('slider14Container');
  slider15.parent('slider15Container');
  slider16.parent('slider16Container');
  slider17.parent('slider17Container');


  faceGuideCheckbox = createCheckbox('', false);
  faceGuideCheckbox.parent('checkbox1Container');

  faceSelector = createSelect();
  faceSelector.option('1');
  faceSelector.option('2');
  faceSelector.option('3');
  faceSelector.option('4');
  faceSelector.value('4');
  faceSelector.parent('selector1Container');
}

function draw() {
  strokeWeight(0.2);

  let mode = faceSelector.value();

  background(bg_color);

  let s1 = slider1.value();
  let s2 = slider2.value();
  let s3 = slider3.value();
  let s4 = slider4.value();
  let s5 = slider5.value();
  let s6 = slider6.value();
  let s7 = slider7.value();
  let s8 = slider8.value();
  let s9 = slider9.value();
  let s10 = slider10.value();
  let s11 = slider11.value();
  let s12 = slider12.value();
  let s13 = slider13.value();
  let s14 = slider14.value();
  let s15 = slider15.value();
  let s16 = slider16.value();
  let s17 = slider17.value();
 

  let show_face_guide = faceGuideCheckbox.checked();

  // use same size / y_pos for all faces
  let face_size = canvasWidth / 5;
  let face_scale = face_size / 10;
  let face_y = height / 2;
  let face_x = width / 2;

  push();
  translate(face_x, face_y);
  scale(face_scale);

  push();
  if (mode == '1') {
    // draw face using values mapped from 3 sliders
    let tilt_value = map(s1, 0, 100, -90, 90);
    let mouth_value = map(s2, 0, 100, 0.5, 10);
    let eye_value = int(map(s3, 0, 100, 1, 3));
    orangeAlienFace(tilt_value, eye_value, mouth_value);
  }

  if (mode == '4') {
    let eyeSizeing = (map(s5, 0, 100, 1.5, 3.5));
    let X1 = (map(s9, 0, 100, 0, -10)); // body param start
    let X2 = (map(s8, 0, 100, -6, -8));
    let X3 = (map(s6, 0, 100, -4, -6));
    let Y3 = (map(s7, 0, 100, -4, -6));
    let TP = (map(s10, 0, 100, -5, -10)); // body param end
    let Beak = (map(s1, 0, 100, -2, 2));
    let GullColor = (map(s2, 0, 255, 250, 0));
    let eye_value = (int(map(s3, 0, 100, 1, 3))); // make three eyes
    let EyeColor = (int(map(s4, 0, 100, 155, 255)));
    let Bags = int(map(s11, 0, 100, -1, 2));
    let BeakC = int(map(s12, 0, 100, 0, 255)); // beak colour
    let Brows = int(map(s13, 0, 100, 180, 250));
    let EyeMove = (map(s14, 0, 100, -0.2, 0.2));
    let Tuft = (map(s15, 0, 100, 0, -1));
    let eyeMo = (map(s16, 0, 100, 0, -3));
    let chip = (map(s17, 0, 100, -0.2, 0.2));

    MyFace(eyeSizeing, X1, X3, Y3, X2, TP, Beak, GullColor, eye_value, EyeColor, Bags, BeakC, Brows, EyeMove, Tuft, eyeMo, chip);

  }

  pop();

  if (show_face_guide) {
    strokeWeight(0.1);
    rectMode(CORNER);
    noFill()
    stroke(0, 0, 255);
    rect(-10, -10, 20, 20);
    line(0, -11, 0, -10);
    line(0, 10, 0, 11);
    line(-11, 0, -10, 0);
    line(11, 0, 10, 0);
  }

  pop();
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
