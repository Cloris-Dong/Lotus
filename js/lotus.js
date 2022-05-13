var startTime = 0;
var duration = 0;
var fc = 0;
let timer = [];
for (let i = 0; i <= 20; i ++){
  timer.push(i);
}
var fade;
var fade1;
var fade2;
var fade3;
var fade4;
var fade5;
var fade6;
var fade7;
var fade8;
var fade9;
var fade01;
var fade02;
var fade03;
var fade04;
var fade05;
var fade06;
var fade07;
var fade08;
var fade09;
var fade_w;
var fadeAmount = 1;
let myColors = ['#010A5A', '#0B2570', '#215795','#2D6FA5', '#4095C2', '#4EB2D4','#6EC7E1','#A1DEED'];
let word = "Please disconnect from your network.";
let notoSerif;

const banner = document.querySelector('#banner')
const button = document.querySelector('#banner button')
const audio = document.querySelector('audio')

button.addEventListener('click', () => {
  audio.play()
  banner.style.display = 'none'
  duration = millis();
})

function toggle_visibility(id) {
   var e = document.getElementById(id);
   if(e.style.display == 'block')
      e.style.display = 'none';
   else
      e.style.display = 'block';
}

function preload(){
  notoSerif = loadFont('assets/Noto_Serif/NotoSerif-BoldItalic.ttf');
}

function setup() {
  let cnv = createCanvas(innerWidth, innerHeight);
  fade = 180;
  fade1 = 180;
  fade2 =180;
  fade3 = 180;
  fade4 = 180;
  fade5 = 180;
  fade6 = 180;
  fade7 = 180;
  fade8 = 180;
  fade9 = 180;
  fade01 = 0;
  fade02 = 0;
  fade03 = 0;
  fade04 = 0;
  fade05 = 0;
  fade06 = 0;
  fade07 = 0;
  fade08 = 0;
  fade09 = 0;
  fade_w = 0;
}


 function layer1(c, fade){
   strokeWeight(0.3);
   c = color (c);
   c.setAlpha(fade);
   fill(c);
   noStroke();
   for (var i1 = 1; i1 < 8; i1++){
       // start with (0.001,0) and end with (0, -0.001) to close the shape.
       bezier(0.001, 0, -4, -19, -10, -37, 0, -64);
       bezier(0, 0, 4, -19, 10, -37, -0.001, -64);
       rotate(360/7);
     }
 }

 function layer2(c, fade){
   c = color (c);
   c.setAlpha(fade);
   fill(c);
   noStroke();
   for (var i1 = 1; i1 < 8; i1++){
       bezier(0.001, 0, -49, 104, -97, 203, 0, 296);
       bezier(0, 0, 49, 104, 97, 203, 0, 296);
       rotate(360/7);
     }
 }

 function layer3(c, fade){
   c = color (c);
   c.setAlpha(fade);
   fill(c);
   noStroke();
   for (var i1 = 1; i1 < 8; i1++){
       // start with (0.001,0) and end with (0, -0.001) to close the shape.
       bezier(0.001, 0, -115, -46, -145, -137, -128, -266);
       bezier(0, 0, 115, -46, 145, -137, 128.001, -266);
       rotate(360/7);
   }
 }

 function layer4(c, fade){
   c = color (c);
   c.setAlpha(fade);
   fill(c);
   noStroke();
   scale(1.3);
   for (var i1 = 1; i1 < 8; i1++){
       // start with (0.001,0) and end with (0, -0.001) to close the shape.
       quad(0, 0, -43, 78, 0, 221, 43, 78);
       rotate(360/7);
   }
 }

 function layer5(c, fade){
   c = color (c);
   c.setAlpha(fade);
   fill(c);
   noStroke();
   for (var i1 = 1; i1 < 8; i1++){
       // start with (0.001,0) and end with (0, -0.001) to close the shape.
       bezier(0.001, 0, -62, 140, -86, 194, 0, 222);
       bezier(0, 0, 62, 140, 86, 194, 0, 222);
       rotate(360/7);
   }
 }

 function layer6(c, fade){
   c = color (c);
   c.setAlpha(fade);
   fill(c);
   noStroke();
   for (var i1 = 1; i1 < 8; i1++){
       // start with (0.001,0) and end with (0, -0.001) to close the shape.
       bezier(0.001, 0, -63, 170, -105, 149, 0, 222);
       bezier(0, 0, 63, 170, 105, 149, 0, 222);
       rotate(360/7);
   }
 }

 function layer7(c, fade){
   c = color (c);
   c.setAlpha(fade);
   fill(c);
   noStroke();
   for (var i1 = 1; i1 < 8; i1++){
       // start with (0.001,0) and end with (0, -0.001) to close the shape.
       bezier(0.001, 0, -66, 165, -106, 195, 0, 222);
       bezier(0, 0, 66, 165, 106, 195, 0, 222);
       rotate(360/7);
   }
 }

 function layer8(c, fade){
   c = color (c);
   c.setAlpha(fade);
   fill(c);
   noStroke();
   for (var i1 = 1; i1 < 8; i1++){
       // start with (0.001,0) and end with (0, -0.001) to close the shape.
       bezier(0.001, 0, -39, 68, -50, 169, 0, 222);
       bezier(0, 0, 39, 68, 50, 169, 0, 222);
       rotate(360/7);
   }
 }

 function layer9(c, fade){
   c = color (c);
   c.setAlpha(fade);
   fill(c);
   noStroke();
   for (var i1 = 1; i1 < 8; i1++){
       // start with (0.001,0) and end with (0, -0.001) to close the shape.
       bezier(0.001, 0, -39, 54, -72, 186, 0, 222);
       bezier(0, 0, 39, 54, 72, 186, 0, 222);
       rotate(360/7);
   }
 }

 function layer10(c, fade){
   c = color (c);
   c.setAlpha(fade);
   fill(c);
   noStroke();
   for (var i1 = 1; i1 < 8; i1++){
       // start with (0.001,0) and end with (0, -0.001) to close the shape.
       bezier(0.001, 0, 113, 155, 73, 199, 0, 221);
       bezier(0, 0, -113, 155, -73, 199, 0, 221);
       rotate(360/7);
   }
 }

function draw_layer(layer, c, s, deg, fade){
  push();
  scale(s);
  rotate(deg/7);
  layer(c, fade);
  pop();
 }

function draw() {
  frameRate(60);
  if (!navigator.onLine) {
  background ('#010102');
  translate(width/2, height/2);
  angleMode(DEGREES);
  noStroke();
  rotate((millis()/800));
  scale(width/1440);
  let inter = 380;

  if (duration != 0){
    startTime = duration;
  };

  if (millis() - startTime >= inter && millis() - startTime < inter * 11) {
    draw_layer(layer6, '#010A5A', (millis()-startTime)/5.3/inter, 0, fade01);
    if (fade01 === 0) fadeAmount = 180/(inter * 11 * 0.001 * 60);
    if (fade01 >= 180) fadeAmount = 0;
    fade01 += fadeAmount;
    if (duration != 0){
      timer[0] = millis() - duration;
    }
    timer[1] = millis();
  }
  if (millis() - startTime >= inter * 11 && millis() - startTime < inter * 11 * 2) {
    draw_layer(layer6, '#010A5A', timer[0]/5.3/inter, 0, fade);
    draw_layer(layer9, '#0B2570', ((millis()-timer[1])/5.3/inter) * 0.8, 0, fade02);
    if (fade02 === 0) fadeAmount = 180/(inter * 11 * 0.001 * 60);
    if (fade02 >= 180) fadeAmount = 0;
    fade02 += fadeAmount;
    if (duration != 0){
      timer[2] = millis() - duration;
    }
    timer[3] = millis();
  }

  if (millis() - startTime >= inter * 11 * 2 && millis() - startTime < inter * 11 * 3) {
    draw_layer(layer6, '#010A5A', timer[0]/5.3/inter, 0, fade);
    draw_layer(layer9, '#0B2570', ((timer[2]-timer[0])/5.3/inter) * 0.8, 0, fade);
    draw_layer(layer10, '#215795', ((millis()-timer[3])/5.3/inter) * pow(0.8, 2), 180, fade03);
    if (fade03 === 0) fadeAmount = 180/(inter * 11 * 0.001 * 60);
    if (fade03 >= 180) fadeAmount = 0;
    fade03 += fadeAmount;
    if (duration != 0){
      timer[4] = millis() - duration;
    }
    timer[5] = millis();
  }

  if (millis() - startTime >= inter * 11 * 3 && millis() - startTime < inter * 11 * 4) {
    draw_layer(layer6, '#010A5A', timer[0]/5.3/inter, 0, fade);
    draw_layer(layer9, '#0B2570', ((timer[2]-timer[0])/5.3/inter) * 0.8, 0, fade);
    draw_layer(layer10, '#215795', ((timer[4]-timer[2])/5.3/inter) * pow(0.8, 2), 180, fade);
    push();
    rotate(1.25 * millis()/800);
    draw_layer(layer7, '#2D6FA5', ((millis()-timer[5])/5.3/inter) * pow(0.8, 3), 180, fade04);
    if (fade04 === 0) fadeAmount = 180/(inter * 11 * 0.001 * 60);
    if (fade04 >= 180) fadeAmount = 0;
    fade04 += fadeAmount;
    pop();
    if (duration != 0){
      timer[6] = millis() - duration;
    }
    timer[7] = millis();
  }

  if (millis() - startTime >= inter * 11 * 4 && millis() - startTime < inter * 11 * 5) {
    draw_layer(layer6, '#010A5A', timer[0]/5.3/inter, 0, fade);
    draw_layer(layer9, '#0B2570', ((timer[2]-timer[0])/5.3/inter) * 0.8, 0, fade);
    draw_layer(layer10, '#215795', ((timer[4]-timer[2])/5.3/inter) * pow(0.8, 2), 180, fade);
    push();
    rotate(1.25 * millis()/800);
    draw_layer(layer7, '#2D6FA5', ((timer[6]-timer[4])/5.3/inter) * pow(0.8, 3), 180, fade);
    pop();
    draw_layer(layer5, '#4095C2', ((millis()-timer[7])/5.3/inter) * pow(0.8, 4), 0, fade05);
    if (fade05 === 0) fadeAmount = 180/(inter * 11 * 0.001 * 60);
    if (fade05 >= 180) fadeAmount = 0;
    fade05 += fadeAmount;
    if (duration != 0){
      timer[8] = millis() - duration;
    }
    timer[9] = millis();
  }

  if (millis() - startTime >= inter * 11 * 5 && millis() - startTime < inter * 11 * 6) {
    draw_layer(layer6, '#010A5A', timer[0]/5.3/inter, 0, fade);
    draw_layer(layer9, '#0B2570', ((timer[2]-timer[0])/5.3/inter) * 0.8, 0, fade);
    draw_layer(layer10, '#215795', ((timer[4]-timer[2])/5.3/inter) * pow(0.8, 2), 180, fade);
    push();
    rotate(1.25 * millis()/800);
    draw_layer(layer7, '#2D6FA5', ((timer[6]-timer[4])/5.3/inter) * pow(0.8, 3), 180, fade);
    pop();
    draw_layer(layer5, '#4095C2', ((timer[8]-timer[6])/5.3/inter) * pow(0.8, 4), 0, fade);
    draw_layer(layer3, '#4EB2D4', ((millis()-timer[9])/5.3/inter) * pow(0.8, 6), 0, fade06);
    if (fade06 === 0) fadeAmount = 180/(inter * 11 * 0.001 * 60);
    if (fade06 >= 180) fadeAmount = 0;
    fade06 += fadeAmount;
    if (duration != 0){
      timer[10] = millis() - duration;
    }
    timer[11] = millis();
  }

  if (millis() - startTime >= inter * 11 * 6 && millis() - startTime < inter * 11 * 7) {
    draw_layer(layer6, '#010A5A', timer[0]/5.3/inter, 0, fade);
    draw_layer(layer9, '#0B2570', ((timer[2]-timer[0])/5.3/inter) * 0.8, 0, fade);
    draw_layer(layer10, '#215795', ((timer[4]-timer[2])/5.3/inter) * pow(0.8, 2), 180, fade);
    push();
    rotate(1.25 * millis()/800);
    draw_layer(layer7, '#2D6FA5', ((timer[6]-timer[4])/5.3/inter) * pow(0.8, 3), 180, fade);
    pop();
    draw_layer(layer5, '#4095C2', ((timer[8]-timer[6])/5.3/inter) * pow(0.8, 4), 0, fade);
    draw_layer(layer3, '#4EB2D4', ((timer[10]-timer[8])/5.3/inter) * pow(0.8, 6), 0, fade);
    draw_layer(layer4, '#6EC7E1', ((millis()-timer[11])/5.3/inter) * pow(0.8,7), 0, fade07);
    if (fade07 === 0) fadeAmount = 180/(inter * 11 * 0.001 * 60);
    if (fade07 >= 180) fadeAmount = 0;
    fade07 += fadeAmount;
    if (duration != 0){
      timer[12] = millis() - duration;
    }
    timer[13] = millis();
  }

  if (millis() - startTime >= inter * 11 * 7 && millis() - startTime < inter * 11 * 8) {
    draw_layer(layer6, '#010A5A', timer[0]/5.3/inter, 0, fade);
    draw_layer(layer9, '#0B2570', ((timer[2]-timer[0])/5.3/inter) * 0.8, 0, fade);
    draw_layer(layer10, '#215795', ((timer[4]-timer[2])/5.3/inter) * pow(0.8, 2), 180, fade);
    push();
    rotate(1.25 * millis()/800);
    draw_layer(layer7, '#2D6FA5', ((timer[6]-timer[4])/5.3/inter) * pow(0.8, 3), 180, fade);
    pop();
    draw_layer(layer5, '#4095C2', ((timer[8]-timer[6])/5.3/inter) * pow(0.8, 4), 0, fade);
    draw_layer(layer3, '#4EB2D4', ((timer[10]-timer[8])/5.3/inter) * pow(0.8, 6), 0, fade);
    draw_layer(layer4, '#6EC7E1', ((timer[12]-timer[10])/5.3/inter) * pow(0.8, 7), 0, fade);
    push();
    rotate(-6 * millis()/800);
    draw_layer(layer8, '#A1DEED', ((millis()-timer[13])/5.3/inter) * pow(0.8, 8), 180, fade08);
    if (fade08 === 0) fadeAmount = 180/(inter * 11 * 0.001 * 60);
    if (fade08 >= 180) fadeAmount = 0;
    fade08 += fadeAmount;
    pop();
    if (duration != 0){
      timer[14] = millis() - duration;
    }
    timer[15] = millis();
  }

  if (millis() - startTime >= inter * 11 * 8 && millis() - startTime < inter * 11 * 9) {
    draw_layer(layer6, '#010A5A', timer[0]/5.3/inter, 0, fade);
    draw_layer(layer9, '#0B2570', ((timer[2]-timer[0])/5.3/inter) * 0.8, 0, fade);
    draw_layer(layer10, '#215795', ((timer[4]-timer[2])/5.3/inter) * pow(0.8, 2), 180, fade);
    push();
    rotate(1.25 * millis()/800);
    draw_layer(layer7, '#2D6FA5', ((timer[6]-timer[4])/5.3/inter) * pow(0.8, 3), 180, fade);
    pop();
    draw_layer(layer5, '#4095C2', ((timer[8]-timer[6])/5.3/inter) * pow(0.8, 4), 0, fade);
    draw_layer(layer3, '#4EB2D4', ((timer[10]-timer[8])/5.3/inter) * pow(0.8, 6), 0, fade);
    draw_layer(layer4, '#6EC7E1', ((timer[12]-timer[10])/5.3/inter) * pow(0.8, 7), 0, fade);
    push();
    rotate(-6 * millis()/800);
    draw_layer(layer8, '#A1DEED', ((timer[14]-timer[12])/5.3/inter) * pow(0.8, 8), 180, fade);
    pop();
    push();
    rotate(17 * millis()/800);
    draw_layer(layer1, '#eac435', ((millis()-timer[15])/5.3/inter) * pow(0.8, 6), 0, fade09);
    if (fade09 === 0) fadeAmount = 180/(inter * 11 * 0.001 * 60);
    if (fade09 >= 180) fadeAmount = 0;
    fade09 += fadeAmount;
    pop();
    if (duration != 0){
      timer[16] = millis() - duration;
    }
    timer[17] = millis();
  }

  // transition stage
  if (millis() - startTime >= inter * 11 * 9 && millis() - startTime < inter * 11 * 9.5) {
    draw_layer(layer6, '#010A5A', timer[0]/5.3/inter, 0, fade1);
    if (fade1<=0) fadeAmount = 0;
    if (fade1>0) fadeAmount = -180/(inter * 11 * 0.001 * 60);
    fade1 += fadeAmount;
    draw_layer(layer9, '#0B2570', ((timer[2]-timer[0])/5.3/inter) * 0.8, 0, fade);
    draw_layer(layer10, '#215795', ((timer[4]-timer[2])/5.3/inter) * pow(0.8, 2), 180, fade);
    push();
    rotate(1.25 * millis()/800);
    draw_layer(layer7, '#2D6FA5', ((timer[6]-timer[4])/5.3/inter) * pow(0.8, 3), 180, fade);
    pop();
    draw_layer(layer5, '#4095C2', ((timer[8]-timer[6])/5.3/inter) * pow(0.8, 4), 0, fade);
    draw_layer(layer3, '#4EB2D4', ((timer[10]-timer[8])/5.3/inter) * pow(0.8, 6), 0, fade);
    draw_layer(layer4, '#6EC7E1', ((timer[12]-timer[10])/5.3/inter) * pow(0.8, 7), 0, fade);
    push();
    rotate(-6 * millis()/800);
    draw_layer(layer8, '#A1DEED', ((timer[14]-timer[12])/5.3/inter) * pow(0.8, 8), 180, fade);
    pop();
    push();
    rotate(17 * millis()/800);
    draw_layer(layer1, '#eac435', ((timer[16]-timer[14])/5.3/inter) * pow(0.8, 6), 0, fade);
    pop();
  }

  if (millis() - startTime >= inter * 11 * 9.5 && millis() - startTime < inter * 11 * 10.5) {
    draw_layer(layer9, '#0B2570', ((timer[2]-timer[0])/5.3/inter) * 0.8, 0, fade2);
    if (fade2<=0) fadeAmount = 0;
    if (fade2>0) fadeAmount = -180/(inter * 11 * 0.001 * 60);
    fade2 += fadeAmount;
    draw_layer(layer10, '#215795', ((timer[4]-timer[2])/5.3/inter) * pow(0.8, 2), 180, fade);
    push();
    rotate(1.25 * millis()/800);
    draw_layer(layer7, '#2D6FA5', ((timer[6]-timer[4])/5.3/inter) * pow(0.8, 3), 180, fade);
    pop();
    draw_layer(layer5, '#4095C2', ((timer[8]-timer[6])/5.3/inter) * pow(0.8, 4), 0, fade);
    draw_layer(layer3, '#4EB2D4', ((timer[10]-timer[8])/5.3/inter) * pow(0.8, 6), 0, fade);
    draw_layer(layer4, '#6EC7E1', ((timer[12]-timer[10])/5.3/inter) * pow(0.8, 7), 0, fade);
    push();
    rotate(-6 * millis()/800);
    draw_layer(layer8, '#A1DEED', ((timer[14]-timer[12])/5.3/inter) * pow(0.8, 8), 180, fade);
    pop();
    push();
    rotate(17 * millis()/800);
    draw_layer(layer1, '#eac435', ((timer[16]-timer[14])/5.3/inter) * pow(0.8, 6), 0, fade);
    pop();
  }

  if (millis() - startTime >= inter * 11 * 10.5 && millis() - startTime < inter * 11 * 11.5) {
    draw_layer(layer10, '#215795', ((timer[4]-timer[2])/5.3/inter) * pow(0.8, 2), 180, fade3);
    if (fade3<=0) fadeAmount = 0;
    if (fade3>0) fadeAmount = -180/(inter * 11 * 0.001 * 60);
    fade3 += fadeAmount;
    push();
    rotate(1.25 * millis()/800);
    draw_layer(layer7, '#2D6FA5', ((timer[6]-timer[4])/5.3/inter) * pow(0.8, 3), 180, fade);
    pop();
    draw_layer(layer5, '#4095C2', ((timer[8]-timer[6])/5.3/inter) * pow(0.8, 4), 0, fade);
    draw_layer(layer3, '#4EB2D4', ((timer[10]-timer[8])/5.3/inter) * pow(0.8, 6), 0, fade);
    draw_layer(layer4, '#6EC7E1', ((timer[12]-timer[10])/5.3/inter) * pow(0.8, 7), 0, fade);
    push();
    rotate(-6 * millis()/800);
    draw_layer(layer8, '#A1DEED', ((timer[14]-timer[12])/5.3/inter) * pow(0.8, 8), 180, fade);
    pop();
    push();
    rotate(17 * millis()/800);
    draw_layer(layer1, '#eac435', ((timer[16]-timer[14])/5.3/inter) * pow(0.8, 6), 0, fade);
    pop();
  }

  if (millis() - startTime >= inter * 11 * 11.5 && millis() - startTime < inter * 11 * 12.5) {
    push();
    rotate(1.25 * millis()/800);
    draw_layer(layer7, '#2D6FA5', ((timer[6]-timer[4])/5.3/inter) * pow(0.8, 3), 180, fade4);
    if (fade4<=0) fadeAmount = 0;
    if (fade4>0) fadeAmount = -180/(inter * 11 * 0.001 * 60);
    fade4 += fadeAmount;
    pop();
    draw_layer(layer5, '#4095C2', ((timer[8]-timer[6])/5.3/inter) * pow(0.8, 4), 0, fade);
    draw_layer(layer3, '#4EB2D4', ((timer[10]-timer[8])/5.3/inter) * pow(0.8, 6), 0, fade);
    draw_layer(layer4, '#6EC7E1', ((timer[12]-timer[10])/5.3/inter) * pow(0.8, 7), 0, fade);
    push();
    rotate(-6 * millis()/800);
    draw_layer(layer8, '#A1DEED', ((timer[14]-timer[12])/5.3/inter) * pow(0.8, 8), 180, fade);
    pop();
    push();
    rotate(17 * millis()/800);
    draw_layer(layer1, '#eac435', ((timer[16]-timer[14])/5.3/inter) * pow(0.8, 6), 0, fade);
    pop();
  }

  if (millis() - startTime >= inter * 11 * 12.5 && millis() - startTime < inter * 11 * 13.5) {
    draw_layer(layer5, '#4095C2', ((timer[8]-timer[6])/5.3/inter) * pow(0.8, 4), 0, fade5);
    if (fade5<=0) fadeAmount = 0;
    if (fade5>0) fadeAmount = -180/(inter * 11 * 0.001 * 60);
    fade5 += fadeAmount;
    draw_layer(layer3, '#4EB2D4', ((timer[10]-timer[8])/5.3/inter) * pow(0.8, 6), 0, fade);
    draw_layer(layer4, '#6EC7E1', ((timer[12]-timer[10])/5.3/inter) * pow(0.8, 7), 0, fade);
    push();
    rotate(-6 * millis()/800);
    draw_layer(layer8, '#A1DEED', ((timer[14]-timer[12])/5.3/inter) * pow(0.8, 8), 180, fade);
    pop();
    push();
    rotate(17 * millis()/800);
    draw_layer(layer1, '#eac435', ((timer[16]-timer[14])/5.3/inter) * pow(0.8, 6), 0, fade);
    pop();
  }

  if (millis() - startTime >= inter * 11 * 13.5 && millis() - startTime < inter * 11 * 14.5) {
    draw_layer(layer3, '#4EB2D4', ((timer[10]-timer[8])/5.3/inter) * pow(0.8, 6), 0, fade6);
    if (fade6<=0) fadeAmount = 0;
    if (fade6>0) fadeAmount = -180/(inter * 11 * 0.001 * 60);
    fade6 += fadeAmount;
    draw_layer(layer4, '#6EC7E1', ((timer[12]-timer[10])/5.3/inter) * pow(0.8, 7), 0, fade);
    push();
    rotate(-6 * millis()/800);
    draw_layer(layer8, '#A1DEED', ((timer[14]-timer[12])/5.3/inter) * pow(0.8, 8), 180, fade);
    pop();
    push();
    rotate(17 * millis()/800);
    draw_layer(layer1, '#eac435', ((timer[16]-timer[14])/5.3/inter) * pow(0.8, 6), 0, fade);
    pop();
  }

  if (millis() - startTime >= inter * 11 * 14.5 && millis() - startTime < inter * 11 * 15.5) {
    draw_layer(layer4, '#6EC7E1', ((timer[12]-timer[10])/5.3/inter) * pow(0.8, 7), 0, fade7);
    if (fade7<=0) fadeAmount = 0;
    if (fade7>0) fadeAmount = -180/(inter * 11 * 0.001 * 60);
    fade7 += fadeAmount;
    push();
    rotate(-6 * millis()/800);
    draw_layer(layer8, '#A1DEED', ((timer[14]-timer[12])/5.3/inter) * pow(0.8, 8), 180, fade);
    pop();
    push();
    rotate(17 * millis()/800);
    draw_layer(layer1, '#eac435', ((timer[16]-timer[14])/5.3/inter) * pow(0.8, 6), 0, fade);
    pop();
  }

  if (millis() - startTime >= inter * 11 * 15.5 && millis() - startTime < inter * 11 * 16.5) {
    push();
    rotate(-6 * millis()/800);
    draw_layer(layer8, '#A1DEED', ((timer[14]-timer[12])/5.3/inter) * pow(0.8, 8), 180, fade8);
    if (fade8<=0) fadeAmount = 0;
    if (fade8>0) fadeAmount = -180/(inter * 11 * 0.001 * 60);
    fade8 += fadeAmount;
    pop();
    push();
    rotate(17 * millis()/800);
    draw_layer(layer1, '#eac435', ((timer[16]-timer[14])/5.3/inter) * pow(0.8, 6), 0, fade);
    pop();
  }

  if (millis() - startTime >= inter * 11 * 16.5 && millis() - startTime < inter * 11 * 17.5) {
    push();
    rotate(17 * millis()/800);
    draw_layer(layer1, '#eac435', ((timer[16]-timer[14])/5.3/inter) * pow(0.8, 6), 0, fade09);
    if (fade09<=0) fadeAmount = 0;
    if (fade09>0) fadeAmount = -180/(inter * 11 * 0.001 * 60);
    fade09 += fadeAmount;
    pop();
  }

  if (millis() - startTime >= inter * 11 * 17.5){
    startTime = millis();
    duration = 0;
    fade1 = 180;
    fade2 = 180;
    fade3 = 180;
    fade4 = 180;
    fade5 = 180;
    fade6 = 180;
    fade7 = 180;
    fade8 = 180;
    fade01 = 0;
    fade02 = 0;
    fade03 = 0;
    fade04 = 0;
    fade05 = 0;
    fade06 = 0;
    fade07 = 0;
    fade08 = 0;
  }

  // Draw Pistil in the last
  c = color('#dcdcdd');
  c.setAlpha(50);
  fill(c);
  circle(0,0,10);
}else{
  textSize(39 * width/1440);
  push();
  c1 = color ('#0B2570');
  c1.setAlpha(fade_w);
  fill(c1);
  textAlign(CENTER);
  textFont(notoSerif);
  text(word, width/2, height/2);
  if (fade_w<0) fadeAmount = 1;
  if (fade_w>255) fadeAmount = -5;
  fade_w += fadeAmount;
  // print(fade_w);
  pop();
}
}

function windowResized() {
   resizeCanvas(windowWidth, windowHeight);
  }
  //this is to readjust the window when refresh is not pressed;
