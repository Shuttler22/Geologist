
class Ground {
    constructor(x, y, width, height){
        var options={
            'density':2,
            'friction':1.0,
            'restitution':0.5,
            'isStatic':true
        }
        this.body = Bodies.rectangle(x, y, options);
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y
        World.add(world, this.body);
    }
    display(){
       
        push();
        var angle = this.body.angle;
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER)
        fill("brown")
        rect(this.x, this.y, this.width, this.height)
        
        pop();
    }
}