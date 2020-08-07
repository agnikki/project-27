
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobDiameter=20;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(240,200,200,20);
		
	bobObject1 =new Bob(200,400,20);
bobObject2 =new Bob(220,400,20);
bobObject3 =new Bob(240,400,20);
bobObject4 =new Bob(260,400,20);
bobObject5 =new Bob(280,400,20);
rope1 = new Rope(bobObject1.body,roof.body,-bobDiameter*2,0);
	
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.run(engine);
  roof.display();
  rope1.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  
  drawSprites();
 
}



