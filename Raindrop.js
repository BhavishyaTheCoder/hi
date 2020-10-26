class Raindrop{

constructor(x,y,radius){

    var options={
     frictionAir:0.01
    }

    this.circle = Bodies.circle(x,y,radius,options);
    this.radius = radius;
    World.add(world,this.circle);
    
}


rain(){
    
   var pos = this.circle.position;
   ellipseMode(RADIUS);
   fill("blue");
   stroke("white");
   ellipse(pos.x,pos.y,this.radius);

   if(pos.y > displayHeight -30 ){
   Matter.Body.setPosition(this.circle,{x:pos.x,y:random(-200,0)});
   }
}
}