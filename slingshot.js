class Slingshot {
	constructor(bodyA,pointB) {
		var options = {
			bodyA: bodyA,
			pointB: pointB,
			
			length: 10,
stiffness: 0.006,
		};
this.bodyA = bodyA;
this.pointB = pointB;
		this.slingshot = Matter.Constraint.create(options);
		World.add(world, this.slingshot);
	}
	drag(bodyA) {
		if(this.slingshot.pointB){
		Matter.Body.setPosition(body, {x: mouseX, y: mouseY});
		}
	}

	fly() {
		this.slingshot.pointB = null;
	}

	attach(bodyA) {
		this.slingshot.pointB = {x: 140, y: 525};
	}

	display() {
		if (this.slingshot.pointB != null) {
			strokeWeight(4);
			stroke("black");
			line(this.pointB.x, this.pointB.y, this.slingshot.bodyA.position.x, this.slingshot.bodyA.position.y);
		}
	}
}
