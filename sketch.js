
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var rectangle;
var square;

var ball2;
var rectangle2;
var square2;

var ball3;
var rectangle3;
var square3;

var ball4;
var rectangle4;
var square4;

var ball5;
var rectangle5;
var square5;
var ground;

function preload()
{
	
}

function setup() {
  createCanvas(800, 700);
  engine = Engine.create();
  world = engine.world;

  var ball_options = {
	//(saltitante) quanto maior mais (saltitante).
	restitution: 1,
	//(atrito do ar) quanto maior, mais lento será o movimento da bola.
	frictionAir: 1
  }
  var ground_options = {
	isStatic: true
  };
  
  
  
  //Crie os Corpos Aqui.
  ball = Bodies.circle(50, 10, 20, ball_options);
  World.add(world, ball);
  
  rectangle = Bodies.rectangle(10, 10, 30, 10, ball_options);
  World.add(world, rectangle);
  
  square = Bodies.rectangle(150, 10, 10, 10, ball_options);
  World.add(world, square);

  ground = Bodies.rectangle(400, 690, 800, 20, ground_options);
  World.add(world, ground);

  ball2 = Bodies.circle(250+50, 10, 20, ball_options);
  World.add(world, ball2);
  
  rectangle2 = Bodies.rectangle(100+100, 10, 30, 10, ball_options);
  World.add(world, rectangle2);
  
  square2 = Bodies.rectangle(150+50, 10, 10, 10, ball_options);
  World.add(world, square2);


  ball3 = Bodies.circle(650+50, 10, 20, ball_options);
  World.add(world, ball3);
  
  rectangle3 = Bodies.rectangle(100+100, 10, 30, 10, ball_options);
  World.add(world, rectangle3);
  
  square3 = Bodies.rectangle(450+50, 10, 10, 10, ball_options);
  World.add(world, square3);

  ball4 = Bodies.circle(50+700, 10, 20, ball_options);
  World.add(world, ball4);
  
  rectangle4 = Bodies.rectangle(120+100, 10, 30, 10, ball_options);
  World.add(world, rectangle4);
  
  square4 = Bodies.rectangle(150+150, 10, 10, 10, ball_options);
  World.add(world, square4);

  ball5 = Bodies.circle(50+50, 10, 20, ball_options);
  World.add(world, ball5);
  
  rectangle5 = Bodies.rectangle(100+100, 10, 30, 10, ball_options);
  World.add(world, rectangle5);
  
  square5 = Bodies.rectangle(150+150, 10, 10, 10, ball_options);
  World.add(world, square5);
  ball = Bodies.circle(50+50, 10, 20, ball_options);
  World.add(world, ball);
  
  
  square = Bodies.rectangle(150+150, 10, 10, 10, ball_options);
  World.add(world, square);
  rectMode(CENTER);
  Engine.run(engine);
  
}


function draw() {
  
  background('orange');
  Engine.update(engine);
  
  ellipse(ball.position.x, ball.position.y, 36);

  rect(rectangle.position.x, rectangle.position.y, 30, 10);

  rect(square.position.x, square.position.y, 10, 10);

  rect(ground.position.x, ground.position.y, 800, 20);

  ellipse(ball2.position.x, ball2.position.y, 36);

  rect(rectangle2.position.x, rectangle2.position.y, 30, 10);

  rect(square2.position.x, square2.position.y, 10, 10);

  ellipse(ball3.position.x, ball3.position.y, 36);

  rect(rectangle3.position.x, rectangle3.position.y, 30, 10);

  rect(square3.position.x, square3.position.y, 10, 10);

  ellipse(ball4.position.x, ball4.position.y, 36);

  rect(rectangle4.position.x, rectangle4.position.y, 30, 10);

  rect(square4.position.x, square4.position.y, 10, 10);

  ellipse(ball5.position.x, ball5.position.y, 36);

  rect(rectangle5.position.x, rectangle5.position.y, 30, 10);

  rect(square5.position.x, square5.position.y, 10, 10);
  
  drawSprites();
 
}



