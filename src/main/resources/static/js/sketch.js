 function setup() {
	createCanvas(1500, 600);
}
function draw() {
	if (mouseIsPressed === true) {
		fill(30,144,255);
		ellipse(mouseX, mouseY, 20, 20);
	}
	if (mouseIsPressed === false) {
		fill(255, 255, 255);
	}
}

function clean(){
	clear();
}