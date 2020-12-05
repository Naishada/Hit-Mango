class Stone{
    constructor(x,y){
        this.r = 25;
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 0.5
        }
        this.body = Matter.Bodies.circle(x,y,25,options);
        World.add(world,this.body);
        this.image = loadImage("stone.png")
    }
    display(){
        var pos = this.body.position
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,50,50);
    }
}