// Kate C
//more cat changes
// when mouse on left side of picture, cat is red, on right its green,
//  in the middle its black
// right ear will change color as mouse is pressed




let r = 0;
let g = 0;
let b = 0;
let r2 = 0;
let g2 = 0;
let b2 = 0;



function setup() {
  createCanvas(1280, 720);
}

function draw() {
  background(115, 79, 150);
  
  //head shape
  stroke(255, 255, 255); // stroke color white
  strokeWeight(8);
  fill(r,g,b); //black cat head
  ellipse(640, 360, 400, 300); 
  // cat ear left side
  stroke(255, 255, 255); // stroke color white
  strokeWeight(7);
  fill(0,0,0); //black cat ear left
  triangle(500,250,520,100,600,200); //I HATE THIS
  //cat ear right side
  stroke(255, 255, 255); // stroke color white
  strokeWeight(10); //slight diff thickness
  fill(r2,g2,b2); //random cat ear
  triangle(780,250,760,100,680,200); //I'm getting there i think
  //cat left eye
  stroke(255, 255, 255); // white stroke
  strokeWeight(2); // stroke thic
  fill(255,255,0); // yellow eyes cause spooky hehe
  ellipse(550, 330, 80, 60); //slightly narrow circles for eyes
  //left iris
  stroke (0,0,0);//black for iris
  strokeWeight(17);
  line(550, 310, 550, 350);
  //cat right eye
  stroke(255, 255, 255); // white stroke
  strokeWeight(2); // stroke thic
  fill(255,255,0); // yellow eyes cause spooky hehe
  ellipse(730, 330, 80, 60);
  //right iris
  stroke (0,0,0);//black for iris
  strokeWeight(17);
  line(730, 310, 730, 350);
  //nose :3
  stroke(255, 255, 255); // stroke color white
  strokeWeight(); //
  fill(255,192,203); //
  triangle(605,400,640,360,675,400);
  //cat mouth
  //left side
  noFill(); //empty so its just the line
  strokeWeight(8);
  arc(615, 415, 50, 45, 0, PI );
  //right side
  noFill(); //empty so its just the line
  strokeWeight(8);
  arc(665, 415, 50, 45, 0, PI );
  if(mouseX <= 600){// if mouse is on the left side of the screen, the cat will turn red
    r = 0;
    g = 255;
    b = 0;
  }
  else if (mouseX >= 680){// if mouse if on the right turn green except from 600-679
    r = 255;
    g = 0;
    b = 0;
  }
  else if (mouseX >=601 || mouseX <= 679 ){//cat black when in this range
    r = 0;
    g = 0;
    b= 0;

  }

  if (mouseIsPressed){ // cat ear random when mouse pressed
 
    r2 = random(255);
    g2 = random(255);
    b2 = random(255);
  }

  }
