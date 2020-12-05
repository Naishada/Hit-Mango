
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy;
var tree;
var ground;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var stone1;
var chain;
function preload()
{
boy = loadImage("boy.png");
tree = loadImage("tree.png");	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(500,655,1000,50)
	mango1 = new Mango(664,205);
	mango2 = new Mango(852,223);
	mango3 = new Mango(900,286);
	mango4 = new Mango(816,316);
	mango5 = new Mango(945,332);
	mango6 = new Mango(608,290);
	mango7 = new Mango(664,352);
	mango8 = new Mango(717,207);
	mango9 = new Mango(732,294);
	mango10 = new Mango(808,216);
	stone1 = new Stone(171,541);
	chain = new Slingshot(stone1.body,{x:176,y:542});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  image(boy,156,485,200,200);
  image(tree,500,100,550,550);
  drawSprites();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  stone1.display();
  chain.display();
  detectCollision(stone1,mango1);
  detectCollision(stone1,mango2);
  detectCollision(stone1,mango3);
  detectCollision(stone1,mango4);
  detectCollision(stone1,mango5);
  detectCollision(stone1,mango6);
  detectCollision(stone1,mango7);
  detectCollision(stone1,mango8);
  detectCollision(stone1,mango9);
  detectCollision(stone1,mango10);

  text(mouseX+","+mouseY,mouseX,mouseY); 
  textSize(20);
  text("Press space to throw the stone again",96,50)
}
function mouseDragged(){
  Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
	chain.fly();
}
function keyPressed(){
  if(keyCode === 32){
    chain.attach(stone1.body);
  }
}


function detectCollision(lstone,lmango){
    manpos = lmango.body.position
    stonepos  = lstone.body.position;
    
    var distance = dist(stonepos.x,stonepos.y,manpos.x,manpos.y);
    if(distance<=lmango.r + lstone.r){
      Matter.Body.setStatic(lmango.body,false);
    } 
}