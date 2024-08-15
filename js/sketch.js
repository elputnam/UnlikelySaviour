// Unlikely Saviour

let base = [];
let blinds = [];
let Terra = [];
let wires = [];
let TerraTall;
let water1;
let water2;
// let wire1;
// let wire2;
let bnum = 1;
let blnum = 1;
let Tnum = 1;
let hue = 0;
let hueTri = 180;

//CCapture
// var capture = false; // default is to not capture frames, can be changed with button in browser
// var capturer = new CCapture({
//   format:'webm', 
//   workersPath: 'js/',
//   framerate: 5
// });

function preload(){
  for (let i = 0; i < 2; i++){
    Terra[i] = loadImage('images/Terra'+i+'.png');
    wires[i] = loadImage('images/wire'+i+'.png')
  }

 for (let j = 0; j < 3; j++){
   blinds[j] = loadImage('images/blinds'+j+'.png');
   base[j] = loadImage('images/base'+j+'.png');
   Terra[j] = loadImage('images/Terra'+j+'.png');
  }
  water1 = loadImage('images/water0.png');
  water2 = loadImage('images/water1.png');
  // wire1 = loadImage('images/wire0.png');
  // wire2 = loadImage('images/wire1.png');
  TerraTall = loadImage('images/Terra3.png');
}

function setup() {
  createCanvas(base[0].width, base[0].height); 
  colorMode(HSB, 360, 100, 100, 100);
  background(0);
  frameRate(5);
}

function draw() {
  //     if (frameCount==1){
  //   capturer.start();
  // };
  background(hueTri, 100, 100);
  
  //base
  push(); 
  if (frameCount%5==0){
  bnum = int(random(3));
  }
  base[bnum].filter(GRAY);
  tint(255, random(90,100));
  image(base[bnum], 0, 0);
  pop();
  

  //Water Tears
  blend(water1, 0, 0, width, height, random(-5,5), random(-5,5), width, height, LIGHTEST); 
  blend(water2, 0, 0, width, height, random(-5,5), random(-5,5), width, height, EXCLUSION); 

  //Wires
  blend(wires[0], 0, 0, width, height, random(-5,5), random(-5,5), width, height, SCREEN); 
  blend(wires[1], 0, 0, width, height, random(-5,5), random(-5,5), width, height, LIGHTEST); 
 
  
  //blinds
  push();
  if (frameCount%3==0){
    blnum = int(random(3));
    hue = random(360);
    TerraTall.filter(INVERT);
  }
  blinds[blnum].filter(GRAY);
  tint(hue, 100, 100, random(30));
  image(blinds[blnum], 0, 0);
 
 if (hue < 180){
   hueTri = hue + 180;
 } else {
   hueTri = hue - 180;
 }

  for (let i = 0; i < 50; i++){
    fill(255);
    noStroke();
    rect(width*.5, random(height), width*.7, random(20)); 
  }

  blend(blinds[blnum], 0, 0, width, height, 0, 0, width, height, DARKEST);
  pop()


  //Terras
  for (let i = 0; i < 30; i++){
    noStroke();
    fill(hue, 100, 100); 
    ellipse(random(width*.5), random(height*.1, height*.9), random(5, 20))
  }

    
    push();
    translate(200, 0); 
    tint(0,random(10,50));
    Tnum = int(random(2));
    //image(Terra[Tnum], random(10, 30), 0);
    blend(Terra[Tnum], 0, 0, width, height, random(10, 30), 0, width, height, EXCLUSION);
    pop();

  //     capturer.capture(document.getElementById('defaultCanvas0'));  
  // if (frameCount==3000){
  //   save_record();
  // }
  // print(frameCount);
}


function mousePressed(){
  let fs = fullscreen();
  fullscreen(!fs);
}

// function save_record() {
//   capturer.save();
// }