class Light{

    constructor(x,y,width,height){
        this.light = Bodies.rectangle(x,y,width,height,{isStatic:true});
        this.width = width;
        this.height = height;
        this.image = loadImage("images/1.png");
        World.add(world,this.light);
        }
        display(){
        
        imageMode(CENTER);
        
        image(this.image,this.light.position.x,this.light.position.y,this.width,this.height);
        
        }
        
        }
    