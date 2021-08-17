const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var rope1,bob1
var rope2,bob2
var rope3,bob3
var rope4,bob4
var rope5,bob5

var roof;

constructor(body1,body2,pointA,pointB)
{
	this.pointA=pointA
	this.pointB=pointB

	var options={
		bodyA:body1
        bodyB:body2 	
	    bodyB:{x:this.pointA,y:this.pointB}
	}

	
}


//Create multiple bobs, mulitple ropes varibale here
    rope1=new rope(bob1,roof,-80,0);
    rope2=new rope(bob2,roof,-80,0);
	rope3=new rope(bob3,roof,-80,0);
	rope4=new rope(bob4,roof,-80,0);
	rope5=new rope(bob5,roof,-80,0);





function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	
	
}

function draw() {
  rectMode(CENTER);
  background("pink");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  display()
  
  var pointA=this.rope.bodyA.position
  var pointB=this.rope.bodyB.position 

 
  
  //create ellipse shape for multiple bobs here

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
