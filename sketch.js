
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,470,800,20);
	ground.shapeColor = color(255,255,0);

	paper = new Paper(60,440);
	paper.shapeColor = color(255,0,255);
	
	box = new Dustbin(450,450);
	box.shapeColor = color(255);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  ground.display();
  paper.display();
  box.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}
