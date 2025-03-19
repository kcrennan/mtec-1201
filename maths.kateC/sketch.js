let amplitude = 150;//variables
let frequency = 0.05;
let xPos = 0;
let yPos = 0;
let xPrev = 0;
let yPrev;
let offset;
let amount;
let r;
let g;
let b;

function setup() 
{
	createCanvas(1000, 500); // new canvas
	strokeWeight(2);
	fill(255, 255, 255, 50); // color canvas
	
	offset = height/2; //offset is 250
	yPrev = height/2; //yPrev is 500
}

function draw() 
{	
	r = map(xPos, 0, width, 50, 150); //what is map?
	g = map(xPos, 0, width, 0, 255); // map changes the range of a value from one range to another
	b = map(xPos, 0, width, 255, 0);
	
	background(r, g, b, 5); // bg color changes with above coding

	lerpAmount = map(mouseY, 0, height, 0.2, 0.9); //maybe map has to do with mouse position?
	// but the mouse will effect the lerp amount, when mouse y is 0, the circles offset is like 0
	//what is lerp? calculates the number between two numbers at a specific incremt
	//this determines the gap inbetween the circles
	
  yPos = amplitude * sin(xPos * frequency) + offset; // this is what causes the circle to move in that shape
	
	yPos = lerp(yPrev, yPos, lerpAmount);
	xPos = lerp(xPrev, xPos, lerpAmount);
	
	circle(xPos, yPos, 50); // cicrle x/y location is determined by "lerp"
	
	line(xPrev, yPrev, xPos, yPos); // this line is in the center of the circle and follows it 
	
	yPrev = yPos;
	xPrev = xPos;
	
	xPos++; // the circle, not matter what mouse does, will keep increasing
	
	if (xPos > width)// this will restart the circle going across the canvas, if circle x value = the width of canvas
	{
		xPos = 0;// reseting xPos value 
		xPrev = xPos;//settting xPrev to xPos to make xPrev =0, which is restarting the cycle of the circle
	}
}