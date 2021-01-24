class Tree {
	constructor() {
		this.image = loadImage('tree.png');
	}

	display() {
		push();
		imageMode(CENTER);
		image(this.image, 570, 450, 400, 500);
		pop();
	}
}
