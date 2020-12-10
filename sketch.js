
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var options={
	isStatic : false,
	restitution: 0.3,
	friction: 0.5,
	density: 1.2,
}

function preload()
{
	
		
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	ballSprite=createSprite(50, 500, 50,50);
	ballSprite.shapeColor = color("purple");
	
	//Bodies.circle(150,500,50)
	//circleSprite.shapeColor = color("pink");
	
	groundSprite=createSprite(650,530,1300,10);
	groundSprite.shapeColor = color("yellow")

	wall1Sprite=createSprite(900, 470,5,100);
	wall1Sprite.shapeColor = color("blue")

	wall2Sprite=createSprite(1050,470,5,100);
	wall2Sprite.shapeColor = color("blue")
	
	wall3Sprite=createSprite(975,523,155,5)
	wall3Sprite.shapeColor = color("blue")
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		//Matter.Body.applyForce(paperObject.body, paperObject.body.position, {x: 85, y:-85});
		Matter.Body.setStatic(ballBody,false); 
	}
}


