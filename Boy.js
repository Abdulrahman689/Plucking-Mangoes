class Boy {
	constructor(x, y) {
		this.image = loadImage('boy.png');
		this.x = x;
		this.y = y;
	}

	display() {
		push();
		imageMode(CENTER);
		image(this.image, this.x, this.y, 200, 300);
		pop();
	}
}
