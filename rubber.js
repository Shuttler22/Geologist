class Rubber {
    constructor(x, y,r) {

        var options ={
            restitution:0.4,
            friction:5,
            density:1
        }
        
      
        this.body = Bodies.circle(x, y, r,options); 
        this.r=r;      
        //this.color=color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill("red")
        ellipseMode(RADIUS);
        ellipse(0, 0, 50, 50);
        pop();
    }

};