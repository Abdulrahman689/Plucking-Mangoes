class Stone {
	constructor(x, y, radius) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.image = loadImage('stone.png');
		var options = {
			isStatic: false,
			restitution: 0.5,
		};
		this.body = Bodies.circle(this.x, this.y, this.radius, options);
		World.add(world, this.body);
	}

	display() {
		push();
		translate(this.body.position.x, this.body.position.y);
		imageMode(CENTER);
		image(this.image, 0, 0, this.radius * 2, this.radius * 2);
		pop();
	}
}
