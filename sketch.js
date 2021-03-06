
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var roof;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(300, 500, 50);
	bob2 = new Bob(350, 500, 50);
	bob3 = new Bob(400, 500, 25);
	bob4 = new Bob(450, 500, 50);
	bob5 = new Bob(500, 500, 50);

	roof = new Roof(400, 0, 800, 20);

	rope1 = new Rope(bob1.body, roof.body, -bob1.diameter*2, 10);
	rope2 = new Rope(bob2.body, roof.body, -bob2.diameter*2, 10);
	rope3 = new Rope(bob3.body, roof.body, -bob3.diameter*2, 10);
	rope4 = new Rope(bob4.body, roof.body, -bob4.diameter*2, 10);
	rope5 = new Rope(bob5.body, roof.body, -bob5.diameter*2, 10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(25, 223, 174);

  roof.display();

  bob1.display();
  bob2.display();
  bob4.display();
  bob3.display();
  bob5.display();
  
  drawSprites();
 
}



