class Slingshot{
    constructor(body1,point){ 
        var options={
            bodyA : body1,
            pointB : point,
            length : 50,
            stiffness : 0.04
        }
        //Constraint
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }
    display(){
        if(this.sling.bodyA){
            var posA = this.sling.bodyA.position
            var  posB = this.sling.pointB
            fill("black")
            line(posA.x,posA.y,posB.x,posB.y)
        }
    }
    fly(){
        this.sling.bodyA = null
    }
    attach(body){
        this.sling.bodyA = body;
    }

}