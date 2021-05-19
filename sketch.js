const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
var divisionHeight = 300;
var divisions = [];
var plinkos  = [];
var particles = [];

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  Ground = new Ground(240, 790, width, 20);
  for (var a = 0; a <= width; a = a + 80) {
    divisions.push(new Division(a, height-divisionHeight/2, 10, divisionHeight))
  }
  for (var b = 40; b <= width; b = b + 50) {
    plinkos.push(new Plinko(b, 100, 10));
    plinkos.push(new Plinko(b, 300, 10));
  }
  for (var b = 15; b <= width - 10; b = b + 50) {
    plinkos.push(new Plinko(b, 200, 10));
    plinkos.push(new Plinko(b, 400, 10));
  }
}

function draw() {
  Engine.update(engine);
  background(0);
  Ground.display();
  for (var a = 0; a < divisions.length; a++) {
    divisions[a].display();
  }
  for (var b = 0; b < plinkos.length; b++) {
    plinkos[b].display();
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width / 2 - 100, width / 2 + 100), 10, 10));
}
  for (var c = 0; c < particles.length; c++) {
    particles[c].display();
  }
  drawSprites();
}