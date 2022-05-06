var startTime = 0;
var fc = 0;
var timer1 = 0;
var timer01 = 0;
var timer2 = 0;
var timer02 =0;
var timer3 = 0;
var timer03 = 0;
var timer4 = 0;
var timer04 = 0;
var timer5 = 0;
var timer05 = 0;
var timer6 = 0;
var timer06 = 0;
var timer7 = 0;
var timer07 = 0;
var timer8 = 0;
var timer08 = 0;
var timer9 = 0;
var timer09 = 0;
var timer10 = 0;
var timer010 = 0;
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
var fadeAmount = 1;
let myColors = ['#010A5A', '#0B2570', '#215795','#2D6FA5', '#4095C2', '#4EB2D4','#6EC7E1','#A1DEED'];
var wave;

function preload(){
  wave = loadSound('assets/wave03 loop rain.mp3');
}

function canvasPressed(){
  if (!wave.isPlaying()){
    wave.playMode('restart');
    wave.loop();
    }else{
    wave.stop();
  }
}
function setup() {
  let cnv = createCanvas(innerWidth, innerHeight);
  cnv.mousePressed(canvasPressed);
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
 }

function mousePressed(){
    if (!(wave.isPlaying())){
      wave.play();
    }
}

 function layer1(c, fade){
   // noFill();
   strokeWeight(0.3);
   c = color (c);
   c.setAlpha(fade);
   fill(c);
   noStroke();
   // stroke(255);
   // strokeWeight(0.01);
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
   // noFill();
   noStroke();
   // stroke(255);
   // strokeWeight(0.1);
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
   // strokeWeight(0.1);
   // stroke(255);
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
   // strokeWeight(0.1);
   // stroke(255);
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
   // strokeWeight(0.1);
   // stroke(255);
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
   // strokeWeight(0.1);
   // stroke(255);
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
   // strokeWeight(0.1);
   // stroke(255);
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
   // strokeWeight(0.1);
   // stroke(255);
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
   // strokeWeight(0.1);
   // stroke(255);
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
  background (0);
  // if (!navigator.onLine) {
  translate(width/2, height/2);
  angleMode(DEGREES);
  noStroke();
  rotate((millis()/800));
  scale(width/1440);
  let inter = 380;
  if (millis() - startTime >= inter && millis() - startTime < inter * 14) {
    draw_layer(layer6, '#010A5A', (millis()-startTime)/6.7/inter, 0, fade01);
    if (fade01 === 0) fadeAmount = 180/(inter * 14 * 0.001 * 60);
    if (fade01 >= 180) fadeAmount = 0;
    fade01 += fadeAmount;
    if (startTime === 0){
      timer1 = millis();
    }
    timer01 = millis();
  }
  if (millis() - startTime >= inter * 14 && millis() - startTime < inter * 14 * 2) {
    draw_layer(layer6, '#010A5A', timer1/6.7/inter, 0, fade);
    draw_layer(layer9, '#0B2570', ((millis()-timer01)/6.7/inter) * 0.8, 0, fade02);
    if (fade02 === 0) fadeAmount = 180/(inter * 14 * 0.001 * 60);
    if (fade02 >= 180) fadeAmount = 0;
    fade02 += fadeAmount;
    if (startTime === 0){
      timer2 = millis();
    }
    timer02 = millis();
  }

  if (millis() - startTime >= inter * 14 * 2 && millis() - startTime < inter * 14 * 3) {
    draw_layer(layer6, '#010A5A', timer1/6.7/inter, 0, fade);
    draw_layer(layer9, '#0B2570', ((timer2-timer1)/6.7/inter) * 0.8, 0, fade);
    draw_layer(layer10, '#215795', ((millis()-timer02)/6.7/inter) * pow(0.8, 2), 180, fade03);
    if (fade03 === 0) fadeAmount = 180/(inter * 14 * 0.001 * 60);
    if (fade03 >= 180) fadeAmount = 0;
    fade03 += fadeAmount;
    if (startTime === 0){
            timer3 = millis();
    }
    timer03 = millis();
  }

  if (millis() - startTime >= inter * 14 * 3 && millis() - startTime < inter * 14 * 4) {
    draw_layer(layer6, '#010A5A', timer1/6.7/inter, 0, fade);
    draw_layer(layer9, '#0B2570', ((timer2-timer1)/6.7/inter) * 0.8, 0, fade);
    draw_layer(layer10, '#215795', ((timer3-timer2)/6.7/inter) * pow(0.8, 2), 180, fade);
    push();
    rotate(1.25 * millis()/800);
    draw_layer(layer7, '#2D6FA5', ((millis()-timer03)/6.7/inter) * pow(0.8, 3), 180, fade04);
    if (fade04 === 0) fadeAmount = 180/(inter * 14 * 0.001 * 60);
    if (fade04 >= 180) fadeAmount = 0;
    fade04 += fadeAmount;
    pop();
    if (startTime === 0){
      timer4 = millis();
    }
    timer04 = millis();
  }

  if (millis() - startTime >= inter * 14 * 4 && millis() - startTime < inter * 14 * 5) {
    draw_layer(layer6, '#010A5A', timer1/6.7/inter, 0, fade);
    draw_layer(layer9, '#0B2570', ((timer2-timer1)/6.7/inter) * 0.8, 0, fade);
    draw_layer(layer10, '#215795', ((timer3-timer2)/6.7/inter) * pow(0.8, 2), 180, fade);
    push();
    rotate(1.25 * millis()/800);
    draw_layer(layer7, '#2D6FA5', ((timer4-timer3)/6.7/inter) * pow(0.8, 3), 180, fade);
    pop();
    draw_layer(layer5, '#4095C2', ((millis()-timer04)/6.7/inter) * pow(0.8, 4), 0, fade05);
    if (fade05 === 0) fadeAmount = 180/(inter * 14 * 0.001 * 60);
    if (fade05 >= 180) fadeAmount = 0;
    fade05 += fadeAmount;
    if (startTime === 0){
      timer5 = millis();
    }
    timer05 = millis();
  }

  if (millis() - startTime >= inter * 14 * 5 && millis() - startTime < inter * 14 * 6) {
    draw_layer(layer6, '#010A5A', timer1/6.7/inter, 0, fade);
    draw_layer(layer9, '#0B2570', ((timer2-timer1)/6.7/inter) * 0.8, 0, fade);
    draw_layer(layer10, '#215795', ((timer3-timer2)/6.7/inter) * pow(0.8, 2), 180, fade);
    push();
    rotate(1.25 * millis()/800);
    draw_layer(layer7, '#2D6FA5', ((timer4-timer3)/6.7/inter) * pow(0.8, 3), 180, fade);
    pop();
    draw_layer(layer5, '#4095C2', ((timer5-timer4)/6.7/inter) * pow(0.8, 4), 0, fade);
    draw_layer(layer3, '#4EB2D4', ((millis()-timer05)/6.7/inter) * pow(0.8, 6), 0, fade06);
    if (fade06 === 0) fadeAmount = 180/(inter * 14 * 0.001 * 60);
    if (fade06 >= 180) fadeAmount = 0;
    fade06 += fadeAmount;
    if (startTime === 0){
      timer6 = millis();
    }
    timer06 = millis();
  }

  if (millis() - startTime >= inter * 14 * 6 && millis() - startTime < inter * 14 * 7) {
    draw_layer(layer6, '#010A5A', timer1/6.7/inter, 0, fade);
    draw_layer(layer9, '#0B2570', ((timer2-timer1)/6.7/inter) * 0.8, 0, fade);
    draw_layer(layer10, '#215795', ((timer3-timer2)/6.7/inter) * pow(0.8, 2), 180, fade);
    push();
    rotate(1.25 * millis()/800);
    draw_layer(layer7, '#2D6FA5', ((timer4-timer3)/6.7/inter) * pow(0.8, 3), 180, fade);
    pop();
    draw_layer(layer5, '#4095C2', ((timer5-timer4)/6.7/inter) * pow(0.8, 4), 0, fade);
    draw_layer(layer3, '#4EB2D4', ((timer6-timer5)/6.7/inter) * pow(0.8, 6), 0, fade);
    draw_layer(layer4, '#6EC7E1', ((millis()-timer06)/6.7/inter) * pow(0.8,7), 0, fade07);
    if (fade07 === 0) fadeAmount = 180/(inter * 14 * 0.001 * 60);
    if (fade07 >= 180) fadeAmount = 0;
    fade07 += fadeAmount;
    if (startTime === 0){
      timer7 = millis();
    }
    timer07 = millis();
  }

  if (millis() - startTime >= inter * 14 * 7 && millis() - startTime < inter * 14 * 8) {
    draw_layer(layer6, '#010A5A', timer1/6.7/inter, 0, fade);
    draw_layer(layer9, '#0B2570', ((timer2-timer1)/6.7/inter) * 0.8, 0, fade);
    draw_layer(layer10, '#215795', ((timer3-timer2)/6.7/inter) * pow(0.8, 2), 180, fade);
    push();
    rotate(1.25 * millis()/800);
    draw_layer(layer7, '#2D6FA5', ((timer4-timer3)/6.7/inter) * pow(0.8, 3), 180, fade);
    pop();
    draw_layer(layer5, '#4095C2', ((timer5-timer4)/6.7/inter) * pow(0.8, 4), 0, fade);
    draw_layer(layer3, '#4EB2D4', ((timer6-timer5)/6.7/inter) * pow(0.8, 6), 0, fade);
    draw_layer(layer4, '#6EC7E1', ((timer7-timer6)/6.7/inter) * pow(0.8, 7), 0, fade);
    push();
    rotate(-6 * millis()/800);
    draw_layer(layer8, '#A1DEED', ((millis()-timer07)/6.7/inter) * pow(0.8, 8), 180, fade08);
    if (fade08 === 0) fadeAmount = 180/(inter * 14 * 0.001 * 60);
    if (fade08 >= 180) fadeAmount = 0;
    fade08 += fadeAmount;
    pop();
    if (startTime === 0){
      timer8 = millis();
    }
    timer08 = millis();
  }

  if (millis() - startTime >= inter * 14 * 8 && millis() - startTime < inter * 14 * 9) {
    draw_layer(layer6, '#010A5A', timer1/6.7/inter, 0, fade);
    draw_layer(layer9, '#0B2570', ((timer2-timer1)/6.7/inter) * 0.8, 0, fade);
    draw_layer(layer10, '#215795', ((timer3-timer2)/6.7/inter) * pow(0.8, 2), 180, fade);
    push();
    rotate(1.25 * millis()/800);
    draw_layer(layer7, '#2D6FA5', ((timer4-timer3)/6.7/inter) * pow(0.8, 3), 180, fade);
    pop();
    draw_layer(layer5, '#4095C2', ((timer5-timer4)/6.7/inter) * pow(0.8, 4), 0, fade);
    draw_layer(layer3, '#4EB2D4', ((timer6-timer5)/6.7/inter) * pow(0.8, 6), 0, fade);
    draw_layer(layer4, '#6EC7E1', ((timer7-timer6)/6.7/inter) * pow(0.8, 7), 0, fade);
    push();
    rotate(-6 * millis()/800);
    draw_layer(layer8, '#A1DEED', ((timer8-timer7)/6.7/inter) * pow(0.8, 8), 180, fade);
    pop();
    push();
    rotate(17 * millis()/800);
    draw_layer(layer1, '#eac435', ((millis()-timer08)/6.7/inter) * pow(0.8, 6), 0, fade09);
    if (fade09 === 0) fadeAmount = 180/(inter * 14 * 0.001 * 60);
    if (fade09 >= 180) fadeAmount = 0;
    fade09 += fadeAmount;
    pop();
    if (startTime === 0){
      timer9 = millis();
    }
    timer09 = millis();
  }

  // transition stage
  if (millis() - startTime >= inter * 14 * 9 && millis() - startTime < inter * 14 * 9.5) {
    draw_layer(layer6, '#010A5A', timer1/6.7/inter, 0, fade1);
    if (fade1<=0) fadeAmount = 0;
    if (fade1>0) fadeAmount = -180/(inter * 14 * 0.001 * 60);
    fade1 += fadeAmount;
    draw_layer(layer9, '#0B2570', ((timer2-timer1)/6.7/inter) * 0.8, 0, fade);
    draw_layer(layer10, '#215795', ((timer3-timer2)/6.7/inter) * pow(0.8, 2), 180, fade);
    push();
    rotate(1.25 * millis()/800);
    draw_layer(layer7, '#2D6FA5', ((timer4-timer3)/6.7/inter) * pow(0.8, 3), 180, fade);
    pop();
    draw_layer(layer5, '#4095C2', ((timer5-timer4)/6.7/inter) * pow(0.8, 4), 0, fade);
    draw_layer(layer3, '#4EB2D4', ((timer6-timer5)/6.7/inter) * pow(0.8, 6), 0, fade);
    draw_layer(layer4, '#6EC7E1', ((timer7-timer6)/6.7/inter) * pow(0.8, 7), 0, fade);
    push();
    rotate(-6 * millis()/800);
    draw_layer(layer8, '#A1DEED', ((timer8-timer7)/6.7/inter) * pow(0.8, 8), 180, fade);
    pop();
    push();
    rotate(17 * millis()/800);
    draw_layer(layer1, '#eac435', ((timer9-timer8)/6.7/inter) * pow(0.8, 6), 0, fade);
    pop();
  }

  if (millis() - startTime >= inter * 14 * 9.5 && millis() - startTime < inter * 14 * 10.5) {
    draw_layer(layer9, '#0B2570', ((timer2-timer1)/6.7/inter) * 0.8, 0, fade2);
    if (fade2<=0) fadeAmount = 0;
    if (fade2>0) fadeAmount = -180/(inter * 14 * 0.001 * 60);
    fade2 += fadeAmount;
    draw_layer(layer10, '#215795', ((timer3-timer2)/6.7/inter) * pow(0.8, 2), 180, fade);
    push();
    rotate(1.25 * millis()/800);
    draw_layer(layer7, '#2D6FA5', ((timer4-timer3)/6.7/inter) * pow(0.8, 3), 180, fade);
    pop();
    draw_layer(layer5, '#4095C2', ((timer5-timer4)/6.7/inter) * pow(0.8, 4), 0, fade);
    draw_layer(layer3, '#4EB2D4', ((timer6-timer5)/6.7/inter) * pow(0.8, 6), 0, fade);
    draw_layer(layer4, '#6EC7E1', ((timer7-timer6)/6.7/inter) * pow(0.8, 7), 0, fade);
    push();
    rotate(-6 * millis()/800);
    draw_layer(layer8, '#A1DEED', ((timer8-timer7)/6.7/inter) * pow(0.8, 8), 180, fade);
    pop();
    push();
    rotate(17 * millis()/800);
    draw_layer(layer1, '#eac435', ((timer9-timer8)/6.7/inter) * pow(0.8, 6), 0, fade);
    pop();
  }

  if (millis() - startTime >= inter * 14 * 10.5 && millis() - startTime < inter * 14 * 11.5) {
    draw_layer(layer10, '#215795', ((timer3-timer2)/6.7/inter) * pow(0.8, 2), 180, fade3);
    if (fade3<=0) fadeAmount = 0;
    if (fade3>0) fadeAmount = -180/(inter * 14 * 0.001 * 60);
    fade3 += fadeAmount;
    push();
    rotate(1.25 * millis()/800);
    draw_layer(layer7, '#2D6FA5', ((timer4-timer3)/6.7/inter) * pow(0.8, 3), 180, fade);
    pop();
    draw_layer(layer5, '#4095C2', ((timer5-timer4)/6.7/inter) * pow(0.8, 4), 0, fade);
    draw_layer(layer3, '#4EB2D4', ((timer6-timer5)/6.7/inter) * pow(0.8, 6), 0, fade);
    draw_layer(layer4, '#6EC7E1', ((timer7-timer6)/6.7/inter) * pow(0.8, 7), 0, fade);
    push();
    rotate(-6 * millis()/800);
    draw_layer(layer8, '#A1DEED', ((timer8-timer7)/6.7/inter) * pow(0.8, 8), 180, fade);
    pop();
    push();
    rotate(17 * millis()/800);
    draw_layer(layer1, '#eac435', ((timer9-timer8)/6.7/inter) * pow(0.8, 6), 0, fade);
    pop();
  }

  if (millis() - startTime >= inter * 14 * 11.5 && millis() - startTime < inter * 14 * 12.5) {
    push();
    rotate(1.25 * millis()/800);
    draw_layer(layer7, '#2D6FA5', ((timer4-timer3)/6.7/inter) * pow(0.8, 3), 180, fade4);
    if (fade4<=0) fadeAmount = 0;
    if (fade4>0) fadeAmount = -180/(inter * 14 * 0.001 * 60);
    fade4 += fadeAmount;
    pop();
    draw_layer(layer5, '#4095C2', ((timer5-timer4)/6.7/inter) * pow(0.8, 4), 0, fade);
    draw_layer(layer3, '#4EB2D4', ((timer6-timer5)/6.7/inter) * pow(0.8, 6), 0, fade);
    draw_layer(layer4, '#6EC7E1', ((timer7-timer6)/6.7/inter) * pow(0.8, 7), 0, fade);
    push();
    rotate(-6 * millis()/800);
    draw_layer(layer8, '#A1DEED', ((timer8-timer7)/6.7/inter) * pow(0.8, 8), 180, fade);
    pop();
    push();
    rotate(17 * millis()/800);
    draw_layer(layer1, '#eac435', ((timer9-timer8)/6.7/inter) * pow(0.8, 6), 0, fade);
    pop();
  }

  if (millis() - startTime >= inter * 14 * 12.5 && millis() - startTime < inter * 14 * 13.5) {
    draw_layer(layer5, '#4095C2', ((timer5-timer4)/6.7/inter) * pow(0.8, 4), 0, fade5);
    if (fade5<=0) fadeAmount = 0;
    if (fade5>0) fadeAmount = -180/(inter * 14 * 0.001 * 60);
    fade5 += fadeAmount;
    draw_layer(layer3, '#4EB2D4', ((timer6-timer5)/6.7/inter) * pow(0.8, 6), 0, fade);
    draw_layer(layer4, '#6EC7E1', ((timer7-timer6)/6.7/inter) * pow(0.8, 7), 0, fade);
    push();
    rotate(-6 * millis()/800);
    draw_layer(layer8, '#A1DEED', ((timer8-timer7)/6.7/inter) * pow(0.8, 8), 180, fade);
    pop();
    push();
    rotate(17 * millis()/800);
    draw_layer(layer1, '#eac435', ((timer9-timer8)/6.7/inter) * pow(0.8, 6), 0, fade);
    pop();
  }

  if (millis() - startTime >= inter * 14 * 13.5 && millis() - startTime < inter * 14 * 14.5) {
    draw_layer(layer3, '#4EB2D4', ((timer6-timer5)/6.7/inter) * pow(0.8, 6), 0, fade6);
    if (fade6<=0) fadeAmount = 0;
    if (fade6>0) fadeAmount = -180/(inter * 14 * 0.001 * 60);
    fade6 += fadeAmount;
    draw_layer(layer4, '#6EC7E1', ((timer7-timer6)/6.7/inter) * pow(0.8, 7), 0, fade);
    push();
    rotate(-6 * millis()/800);
    draw_layer(layer8, '#A1DEED', ((timer8-timer7)/6.7/inter) * pow(0.8, 8), 180, fade);
    pop();
    push();
    rotate(17 * millis()/800);
    draw_layer(layer1, '#eac435', ((timer9-timer8)/6.7/inter) * pow(0.8, 6), 0, fade);
    pop();
  }

  if (millis() - startTime >= inter * 14 * 14.5 && millis() - startTime < inter * 14 * 15.5) {
    draw_layer(layer4, '#6EC7E1', ((timer7-timer6)/6.7/inter) * pow(0.8, 7), 0, fade7);
    if (fade7<=0) fadeAmount = 0;
    if (fade7>0) fadeAmount = -180/(inter * 14 * 0.001 * 60);
    fade7 += fadeAmount;
    push();
    rotate(-6 * millis()/800);
    draw_layer(layer8, '#A1DEED', ((timer8-timer7)/6.7/inter) * pow(0.8, 8), 180, fade);
    pop();
    push();
    rotate(17 * millis()/800);
    draw_layer(layer1, '#eac435', ((timer9-timer8)/6.7/inter) * pow(0.8, 6), 0, fade);
    pop();
  }

  // if (millis() - startTime >= inter * 14 * 15.5 && millis() - startTime < inter * 14 * 13.5) {
  //   // draw_layer(layer2, '#B9E6F2', ((timer9-timer8)/6.7/inter) * pow(0.8, 11), 0);
  // }
  if (millis() - startTime >= inter * 14 * 15.5 && millis() - startTime < inter * 14 * 16.5) {
    push();
    rotate(-6 * millis()/800);
    draw_layer(layer8, '#A1DEED', ((timer8-timer7)/6.7/inter) * pow(0.8, 8), 180, fade8);
    if (fade8<=0) fadeAmount = 0;
    if (fade8>0) fadeAmount = -180/(inter * 14 * 0.001 * 60);
    fade8 += fadeAmount;
    pop();
    push();
    rotate(17 * millis()/800);
    draw_layer(layer1, '#eac435', ((timer9-timer8)/6.7/inter) * pow(0.8, 6), 0, fade);
    pop();
  }

  if (millis() - startTime >= inter * 14 * 16.5 && millis() - startTime < inter * 14 * 17.5) {
    push();
    rotate(17 * millis()/800);
    draw_layer(layer1, '#eac435', ((timer9-timer8)/6.7/inter) * pow(0.8, 6), 0, fade09);
    if (fade09<=0) fadeAmount = 0;
    if (fade09>0) fadeAmount = -180/(inter * 14 * 0.001 * 60);
    fade09 += fadeAmount;
    pop();
  }

  if (millis() - startTime >= inter * 14 * 17.5){
    startTime = millis();
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
  // scale(0.5);
  // rotate(180/7);
  // c = color ('#eac435')
  // layer1(c);
  c = color('#dcdcdd');
  c.setAlpha(50);
  fill(c);
  circle(0,0,10);


  // scale(1);
  // rotate(360/7);
  // layer3('#4A6FA5');
  // scale(1.2);
  // rotate(180/7);
  // layer3('#166088');
  // scale(0.8);
  // rotate(90/7);
  // layer3('#6C889C');
  // scale(0.6);
  // rotate(180/7);
  // layer3('#7EA0B7');
  // scale(0.4);
  // rotate(360/7);
  // layer3('#A9CEF4');
  // scale(1.5);
  // layer1('#ffcd00');
  // scale(1.5);
  // rotate(180/7);
  // c = color ('#ffcd00')
  // c.setAlpha(96);
  // layer1(c);
}

function windowResized() {
   resizeCanvas(windowWidth, windowHeight);
  }
  //this is to readjust the window when refresh is not pressed;
