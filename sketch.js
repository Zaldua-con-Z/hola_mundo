function setup() {
	createCanvas(windowWidth, windowHeight);
	// frameRate(24);
	background(0);
	rectMode(CENTER);
}

function draw() {
	background(0, random(0,100));

	noStroke()
    fill(255,255,0)
    let biteSize=PI/8
    let startAngle=biteSize*sin(frameCount*0.1)+biteSize
    let endAngle=TWO_PI-startAngle
    arc(mouseX, mouseY,100,100,startAngle,endAngle,PIE)

    
    noStroke
    fill(0,0,255)
    circle(mouseX+80,mouseY,20,20)

    noStroke
    fill(150,0,152)
    circle(mouseX+120,mouseY,20,20)

    noStroke
    fill(255,0,0)
    circle(mouseX+160,mouseY,20,20)
}