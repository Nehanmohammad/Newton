const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var engine,world;
var ground;
var ball1,ball2,ball3,ball4,ball5;
var rope1,rope2,rope3,rope4,rope5;



function setup (){
    createCanvas(1360,600)
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,50,100220,20);
 

    ball1 = new Ball(100,100,80,80);
    ball2 = new Hi(200,700,80,80)
    ball3 = new Hi(300,700,80,80)
    ball4 = new Hi(400,700,80,80)
    ball5 = new Ball(500,700,80,80)

    rope1 = new Rope(ball1.body, {x:500, y:50});
    rope2 = new Rope(ball2.body,{x:580, y:50});
    rope3 = new Rope(ball3.body,{x:660, y:50});
    rope4 = new Rope(ball4.body,{x:740, y:50});
    rope5 = new Rope(ball5.body,{x:820, y:50});
    
    
}

function draw() {
    background(1,2,3);
    Engine.update(engine);

   

    ground.display();
   
    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();
    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();
    
}

function mouseDragged(){
Matter.Body.setPosition(ball.body, { x:mouseX, y:mouseY})
}