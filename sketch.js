
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
abc = new hammer(200, 500, 50, 150);
plane = new Ground(400, 695, 1000, 15)
stone1 = new Stone(150, 500, 100, 100)
rubber1 = new Rubber(260, 500, 25)
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background("cyan");
  Engine.update(engine)
  
  abc.display();
  plane.display();
  stone1.display()
  rubber1.display()
 
}



