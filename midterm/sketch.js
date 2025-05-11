
let menuValue = 0;
let r = 0;
let g = 0;
let b = 0;
let r2 = 0;
let g2 = 0;
let b2 = 0;
let btopY = 260; //button top y
let bbomY = 460; //button bottom y
let looptime = 0; //timer cat loop
let purpgb = 0; //purple bg opacity  

function preload(){
 gato = loadImage("pics/gato.png") //cat image
}


function setup() {
  createCanvas(1280, 720);
  imageMode(CENTER);
  rectMode(CENTER);
  textAlign(CENTER);
  textSize(60);


}

function draw() 
{
  background(220);

  if (menuValue === 0)// menuValue 0 = menu
  {
    menu();
  }
  else if (menuValue === 1)// project 1
  {
    p1();
  }
else if (menuValue === 2)// project 2
  {
    p2();
  }
  else if (menuValue === 3)// project 3
  {
    p3();
  }

  if(keyIsDown(82) === true)
  {
    menuValue = 0;
  }
  else{
    print("false");
  }
  
}

function mousePressed()
{
  if (mouseX >= 80  && mouseX <= 400 && mouseY>= 260 && mouseY <=460 && menuValue === 0) 
  {
    menuValue = 1;
  }
  else if (mouseX >= 480  && mouseX <= 800 && mouseY>= 260 && mouseY <=460 && menuValue === 0)
  {
    menuValue = 2;
  }
  else if (mouseX >= 880  && mouseX <= 1200 && mouseY>= 260 && mouseY <=460 && menuValue === 0)
  {
    menuValue = 3;
  }

}

function menu()
{
background(46,111,64);
fill(255,255,255);
stroke(0,0,0);
strokeWeight(5);
quad(80, btopY, 400, btopY,400, bbomY, 80, bbomY );//button 1
quad(480, btopY, 800, btopY,800, bbomY, 480, bbomY ); //button 2
quad(880, btopY, 1200, btopY,1200, bbomY, 880, bbomY ); //button 3

textSize(50);
fill(0,0,0);
strokeWeight (1);
text("Vanishing", 240, 340);
text("Cat",240, 400);
text("Timer",640,340 );
text("Cat",640,400);
text("Random",1040,340);
text("Cat",1040,400);

textSize(60);
stroke(0,0,0);
strokeWeight(5);
fill(255,255,255);

text("Midterm's Short Studies!", width/2, 100);
text("press 'R' to return to menu", width/2, 640);

}

function p1()//disappearing cat
{
background(115, 79, 150);
 textSize(50);
 strokeWeight(0);
 fill(0,0,0);
  text('click to make the cat disappear!', 640, 50);
  

  

  
  //head shape
  stroke(255, 255, 255); // stroke color white
  strokeWeight(8);
  fill(0,0,0); //black cat head
  ellipse(640, 360, 400, 300); 
  // cat ear left side
  stroke(255, 255, 255); // stroke color white
  strokeWeight(7);
  fill(0,0,0); //black cat ear left
  triangle(500,250,520,100,600,200); //I HATE THIS
  //cat ear right side
  stroke(255, 255, 255); // stroke color white
  strokeWeight(10); //slight diff thickness
  fill(0,0,30); //navy cat ear left
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
strokeWeight(0);
  fill(115, 79, 150, purpgb);
  rect(640,360,500,600);
 
if (mouseIsPressed === true){
//so i wanna do as u click, the opacity of the layer over the cat increases so eventually u cant see it
purpgb +=5;} //so the opacity will increase
else if (mouseIsPressed === true || purpgb >270){
  purpgb = 0;
}
}

function p2()//timer cat
{
background(46,111,64);
fill(0,0,0);
strokeWeight(1);
time = millis();
if (time < 2999+looptime)//pre cat timer
  { 
  text ("wait for the cat!", width/2, height/2);
  }
if(time > 3000+looptime)// cat timer
  { 
  background(0, 160,20);
  image(gato, width/2,height/2,gato.width/4, gato.height/4);
  text ("hi cat!", width/2, 100);

  }
if (time > 10000+looptime)// 10 sec post cat timer
  { 
  background(0, 160,20);
  text ("bye cat!", width/2, 100);
  text("press Q to restart the timer!", width/2, 600);
  }
if (keyIsDown(81) === true && time > 10000+looptime)
{
  looptime+= 10000;
}


}

function p3()//random color cat
{
  background(115, 79, 150);
  textSize(45);
  stroke (0,0,0);
  fill (255,255,255);
  strokeWeight(1);
  text ("The cat will change colors as you move your mouse", width/2, 600);

  text ("Click to randomize the ear color!",width/2, 670);

  //head shape
  stroke(255, 255, 255); // stroke color white
  strokeWeight(8);
  fill(r,g,b); //black cat head
  ellipse(640, 360, 400, 300); 
  // cat ear left side
  stroke(255, 255, 255); // stroke color white
  strokeWeight(7);
  fill(r2,g2,b2); //both ears random
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
