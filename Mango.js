class Mango{
    constructor(x,y){
        this.r = 30;
        var options = {
            isStatic : true,
            restitution : 0.3,
            friction : 0.5,
            density : 0.5
        }
        this.body = Matter.Bodies.circle(x,y,30,options);
        World.add(world,this.body);
        this.image = loadImage("mango.png")
    }
    display(){
        var pos = this.body.position
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,60,60);
    }
}