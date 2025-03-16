//Kate C exploring text and images
//after 3 seconds, cat appears, after 10, it dissapears
function preload(){
 gato = loadImage("pics/gato.png") //cat image
}

function setup() {
  createCanvas(800, 600);
  background(0, 200,0);
  imageMode(CENTER);
  textAlign(CENTER);
  textSize(60);

}
function draw() {
  time = millis();
  if (time < 2999){ //pre cat timer
    text ("wait for the cat!", width/2, height/2);
  }
  if(time > 3000){ // cat timer
    background(0, 200,0);
    image(gato, width/2,height/2,gato.width/4, gato.height/4);
    text ("hi cat!", width/2, 100);

  }
  if (time > 10000){ // 10 sec post cat timer
    background(0, 200,0);
    text ("bye cat!", width/2, 100);

  }
}



