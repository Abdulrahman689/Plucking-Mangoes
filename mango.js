class Mango {
	constructor(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.image = loadImage('mango.png');
		var options = {
			isStatic: true,
			restitution: 0.2,
		};

		this.body = Bodies.circle(this.x, this.y, this.height / 2, options);
		World.add(world, this.body);
	}

	display() {
		push();
		translate(this.body.position.x, this.body.position.y);
		imageMode(CENTER);
		image(this.image, 0, 0, this.width, this.height);
		pop();
	}
}
