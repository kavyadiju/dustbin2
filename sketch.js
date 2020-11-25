
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var dustbinObj, paperObject,groundObject;	
var engine,world;


function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	paperObject=new paper(200,450,40);
	dustbinObj=new dustbin(1150,650);
	
	groundObject=new ground(width/2,690,width,20);
  
}


function draw() {

  background(255,255,255);
  Engine.update(engine);
 
  paperObject.display();
  dustbinObj.display();
  groundObject.display();
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-90});
    
  	}
}



