const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9;
var platform;
var slingShot;
var polygon;

function preload() {
   polygonIMG=loadImage("polygon.png");
}

function setup(){
    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(300, 305, 500, 20);

    box1 = new Box(330,320,70,70);
    box2 = new Box(360,320,70,70);
    box3 = new Box(390,320,70,70);
    box4 = new Box(420,320,70,70);
    box5 = new Box(450,320,70,70);
    box6 = new Box(360,280,70,70);
    box7 = new Box(390,280,70,70);
    box8 = new Box(420,280,70,70);
    box9 = new Box(390,280,70,70);
 
    polydon=Bodies.circle(50,200,20)
    
World.add(world,polygon)


    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(polygon.body,{x:100, y:200});
}

function draw(){
   background ("Black")
    Engine.update(engine);
   
    platform.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();

    imageMode (CENTER)
    image(polygonIMG,polygon.position.x,polygon.position.y,40,40)

}
function instructions(){
    textSize(20)
    text ("Drag the polygon to hit the boxes",600,25)
}
function mouseDragged(){
    Body.setPosition(polygon,{x: mouseX,y: mouseY})
}
function mouseReleased(){
    Slingshot.fly();
}