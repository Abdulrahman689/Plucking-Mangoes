class Ground {
	constructor(x, y, width, height) {
		var options = {
			isStatic: true,
			friction: 0.5,
			density: 1.5,
		};
		this.body = Bodies.rectangle(x, y, width, height, options);
		this.width = width;
		this.height = height;
		World.add(world, this.body);
	}

	display() {
		push();
		translate(this.body.position.x, this.body.position.y);
		rectMode(CENTER);
		fill("white");
		rect(0, 0, this.width, this.height);
		pop();
	}
}
