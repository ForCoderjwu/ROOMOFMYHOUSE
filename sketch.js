/***********************************************************************************
	ROOM OF MY HOUSE
	by Jiaquan Wu
  2021/2/24

This assignment is using the Adobe XD to draw a ROOM-TOUR of my ideal house.
Then using the p5.js to recreate this house tour.

------------------------------------------------------------------------------------
	Notes:
    - MAIN ISSUE: I cannot rotate the image (Mask in the bedroom), rotate() function cannot work.
    - Using complex if-else state to manage the way of looking. (non-linear)
    - Instuction are on the bottom side, text instruction.

***********************************************************************************/

var Currentfloor;
var room = [];
var asset = [];
var stringarray = [];

function preload() {
  room[0] = loadImage('Asset/Bath.png');
  room[1] = loadImage('Asset/Bed.png');
  room[2] = loadImage('Asset/cloak.png');
  room[3] = loadImage('Asset/Kitchen.png');
  room[4] = loadImage('Asset/Living.png');
  room[5] = loadImage('Asset/Second_Living.png');
  room[6] = loadImage('Asset/Swimming.png');
  room[7] = loadImage('Asset/Working.png');

  asset[0] = loadImage('Asset/PNG/food.png');
  asset[1] = loadImage('Asset/PNG/food2.png');
  asset[2] = loadImage('Asset/PNG/husky.png');
  asset[3] = loadImage('Asset/PNG/husky1.png');
  asset[4] = loadImage('Asset/PNG/MacBook_white.png');
  asset[5] = loadImage('Asset/PNG/Mclaren_PNG.png');
  asset[6] = loadImage('Asset/PNG/medical-mask-15.png');
  asset[7] = loadImage('Asset/PNG/model2.png');
  asset[8] = loadImage('Asset/PNG/motorcycle_helmets.png');
  asset[9] = loadImage('Asset/PNG/PS5.png');
  asset[10] = loadImage('Asset/PNG/pural.png');
  asset[11] = loadImage('Asset/PNG/sanitizer.png');
  asset[12] = loadImage('Asset/PNG/Starry_Night.png');
  asset[13] = loadImage('Asset/PNG/switch.png');
  asset[14] = loadImage('Asset/PNG/The_Scream.png');
}

function setup() {
  createCanvas(1280, 770);
  string();
  textSize(20);
  fill(255,0,0);
  Currentfloor = DrawLiving;
}

function draw() {
  background(0);

  Currentfloor();
}

DrawLiving = function() {
  image(room[4], 0,0, 1280, 720);
  image(asset[2], 674,537, 150,170);//dog
  image(asset[3], 380,240,90,140);//dog logo
  text(stringarray[4], 20, height - 20);
  if (keyCode === RIGHT_ARROW) {
    Currentfloor = DrawKitchen;
  }
  else if (keyCode === UP_ARROW) {
    Currentfloor = DrawWorking;
  }
}

DrawKitchen = function() {
  image(room[3], 0,0, 1280,720);
  image(asset[0], 563,505, 95,95);//food
  image(asset[1], 762,545, 150,100);//food2
  text(stringarray[3], 20, height - 20);
  if (keyCode === LEFT_ARROW) {
    Currentfloor = DrawLiving;
  }
}

DrawWorking = function() {
  image(room[7], 0,0, 1280,720);
  image(asset[4], 670,545, 170,170);//MACBOOK
  image(asset[14], 190,167, 100,130);//Scream
  text(stringarray[7], 20, height - 20);
  if (keyCode === DOWN_ARROW) {
    Currentfloor = DrawLiving;
  }
}

DarwSecond = function() {
  image(room[5], 0,0, 1280,720);
  image(asset[12], 257,121, 180,130);//Starry_night
  image(asset[10], 34,203, 90,130);//pural
  text(stringarray[5], 20, height - 20);
}

DrawBed = function() {
  image(room[1], 0,0, 1280,720);
  image(asset[8], 273,450, 70,70);//helmet
  // push();
  // rotate(HALF_PI); //WHY I CANT ROTATE AN IMAGE!
  image(asset[6], 115,606, 130,70);//mask
  // pop();
  text(stringarray[1], 20, height - 20);
}

DrawBath = function() {
  image(room[0], 0,0, 1280,720);
  image(asset[11], 291,572, 120,100);//sanitizer
  image(asset[13], 747,584, 70,50);//switch
  text(stringarray[0], 20, height - 20);
}

DrawCloak = function() {
  image(room[2], 0,0, 1280,720);
  image(asset[7], 395,307, 30,50);//model
  push();
  tint(255, 127);
  image(asset[5], 700,295, 110,100);//car
  pop();
  text(stringarray[2], 20, height - 20);
}

DrawSwing = function() {
  image(room[6], 0,0, 1280,720);
  image(asset[2], 184,279, 120,120);//dog
  image(asset[11], 220,612, 130,100);//sanitizer
  text(stringarray[6], 20, height - 20);
}

function keyPressed() {
    //-----------------------------------------------------------
    //This is the key determined system
    //-----------------------------------------------------------
  if (Currentfloor == DrawLiving) { //If it is in the first floor
    if (keyCode === 33) {
      Currentfloor = DarwSecond;
    }
  }
  else if (Currentfloor == DarwSecond || Currentfloor == DrawBed || Currentfloor == DrawCloak || Currentfloor == DrawBath) {
    if (Currentfloor === DarwSecond) { //If it is in the second living
      if (keyCode === DOWN_ARROW) {
        Currentfloor = DrawCloak;
      }
      else if (keyCode === RIGHT_ARROW) {
        Currentfloor = DrawBed;
      }
      else if (keyCode === 34) {
        Currentfloor = DrawLiving;
      }
      else if (keyCode === 33) {
        Currentfloor = DrawSwing;
      }
    }
    else if(Currentfloor === DrawBed) {// if it is in the bedroom
      if (keyCode === LEFT_ARROW){
        Currentfloor = DarwSecond;
      }
      else if (keyCode === RIGHT_ARROW) {
        Currentfloor = DrawBath;
      }
      else if (keyCode === DOWN_ARROW) {
        Currentfloor = DrawCloak;
      }
    }
    else if (Currentfloor === DrawBath) {//if it is in the bathroom
      if (keyCode === LEFT_ARROW) {
        Currentfloor = DrawBed;
      }
    }
    else if (Currentfloor == DrawCloak) {//if its in the cloak
      if (keyCode === RIGHT_ARROW) {
        Currentfloor = DrawBed;
      }
      else if (keyCode === LEFT_ARROW) {
        Currentfloor = DarwSecond;
      }
    }
  }
  else if (Currentfloor == DrawSwing) {// if it is in the top floor
    if (keyCode === 34) {
      Currentfloor = DarwSecond;
    }
  }
}

function string() {
  //String array
  stringarray[0] = "Press left-arrow to Bedroom";
  stringarray[1] = "Press left-arrow to Second-Living room, right-arrow to Bathroom, down-arrow to Cloak/collection room";
  stringarray[2] = "Press left-arrow to Second-Living room, right-arrow to Bedroom";
  stringarray[3] = "Press left-arrow to Living room";
  stringarray[4] = "Press right-arrow to Kitchen, PAGE-UP to Second floor, UP-arrow to Workspace";
  stringarray[5] = "Press right-arrow to Bedroom, down-arrow to Cloak/collection room, PAGE-UP to AIR-Garden, PAGE-DOWN to Living room";
  stringarray[6] = "Press PAGE-DOWN to Second-Living room";
  stringarray[7] = "Press down-arrow to Living room";
}