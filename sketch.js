const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies

var engine,world,rain,raindrop = [],raindrops,ground,man,standman,tree,moon;

function preload(){
 
    moon = loadImage("images/image1.png");
    house1 = loadImage("images/house1.png");
}

function setup(){
createCanvas(displayWidth,displayHeight); 
 
engine = Engine.create();

world = engine.world;



    for(var i=0;i<displayWidth;i = i+10){
        raindrops = new Raindrop(i ,random(-300,0),random(0.5,3));
        raindrop.push(raindrops);
        World.add(world,raindrops);
    }

    ground = new Ground(displayWidth/2,displayHeight-10,displayWidth,20);
    man1 = new Man(290,displayHeight -110,150,150);
    tree1 = new Tree(90,displayHeight - 110,100,200); 
    light1 = new Light(displayWidth/2,100,300,300); 
    
   
}
function draw(){
background(0,100);
Engine.update(engine);

ground.display();

image(moon,displayWidth-200,100,200,100);
imageMode(CENTER);
image(house1,1000,displayHeight - 165,500,300);



for(var i = 0;i<raindrop.length;i++){
    raindrop[i].rain(); 
}
man1.display();
tree1.display();
light1.display();

}

function keyPressed(){
    if(keyCode === 39 || touches.length>0){

        man1.man.position.x = man1.man.position.x+2;
        touches = [];
      }


}
