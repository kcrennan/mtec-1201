function setup() {
  // kate C
  // an attempt at a cat
  //i love cats and think itll be interesting to see how my skills develop
  //AHHHH im drawing a cat
  
  createCanvas(1280, 720);
  background(115, 79, 150); // purple bg

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
}
