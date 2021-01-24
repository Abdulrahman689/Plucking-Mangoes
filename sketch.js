const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree;
var stone;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7;
var ground;
var boy;
var slingshot;

function preload() {}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	Engine.update(engine);
	

	world = engine.world;

	tree = new Tree();

	mango1 = new Mango(470, 400, 50, 50);
	mango2 = new Mango(530, 300, 50, 50);
	mango3 = new Mango(600, 380, 50, 50);
	mango4 = new Mango(700, 420, 50, 50);
	mango5 = new Mango(680, 320, 50, 50);
	mango6 = new Mango(640, 350, 50, 50);
	mango7 = new Mango(530, 370, 50, 50);

	ground = new Ground(400, 689, 800, 20);

	stone = new Stone(140, 525, 20);

	boy = new Boy(200, 600);

	slingshot = new Slingshot( stone.body, {x: 140, y: 520});

	//Create the Bodies Here.

	Engine.run(engine);
}

function draw() {
	rectMode(CENTER);
	background("blue");

	tree.display();

	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();

	detectCollision(stone, mango1);
	detectCollision(stone, mango2);
	detectCollision(stone, mango3);
	detectCollision(stone, mango4);
	detectCollision(stone, mango5);
	detectCollision(stone, mango6);
	detectCollision(stone, mango7);

	ground.display();

	boy.display();
	stone.display();

	slingshot.display();

	drawSprites();
}

function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.setPosition(stone.body, {x: 140, y: 525});
		slingshot.attach(stone.body);
	}
}

function mouseDragged() {
	Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}

function mouseReleased() {
	slingshot.fly();
}

function detectCollision(bodyA, bodyB) {
	var distance = dist(bodyA.body.position.x, bodyA.body.position.y, bodyB.body.position.x, bodyB.body.position.y);

	if (distance <= 60) {
		Matter.Body.setStatic(bodyB.body, false);
	}
}