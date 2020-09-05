const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var polygon;
var block1, block2, block3, block4, block5,block6,block7,block8,block9;

function preload(){
  //backgroundImg = loadImage("sprites/bg.png");
}


function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  ground=new Ground(795,2945,300,10)
  //level 1
  block1=new Block(330,235,30,40);
  block2=new Block(360,235,30,40);
  block3=new Block(390,235,30,40);
  block4=new Block(420,235,30,40);
  block5=new Block(450,235,30,40);
  //level 2
  block6=new Block(360,195,30,40);
  block7=new Block(390,195,30,40);
  block8=new Block(420,195,30,40);
  //level 3
  block9=new Block(390,155,30,40);
}

function draw() {
  background(255,255,255); 
  Engine.update(engine); 
  ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  drawSprites();
}