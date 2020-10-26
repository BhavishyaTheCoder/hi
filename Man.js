class Man{

    constructor(x,y,width,height){

        this.man = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/walking_2.png")
        this.image2 = loadImage("images/walking_5.png");
        World.add(world,this.man);
 
    }

      display(){
        imageMode(CENTER);
        image(this.image,this.man.position.x,this.man.position.y,this.width,this.height);

        
    }
}
