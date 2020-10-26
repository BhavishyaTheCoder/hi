class Ground{
  
    constructor(x,y,width,height){

     
     this.ground = Bodies.rectangle(x,y,width,height,{isStatic:true});
     this.width = width;
     this.height = height;
     World.add(world,this.ground);

    }

  display(){
   
    rectMode(CENTER);
    fill("orange");
    rect(this.ground.position.x,this.ground.position.y,this.width,this.height);
  }



}