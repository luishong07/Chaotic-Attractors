class Tracer {
    constructor(x, y, z, color,scl) {
        console.log(scl)
        this.x = x;
        this.y = y;
        this.z = z;
        this.path = [];
        this.color = color
        this.angle = 0
        this.scl = scl
    }

    // getInitialValues() {
    //     return [this.x, this.y, this.z];
    // }
    show(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.path.push(createVector(this.x, this.y, this.z));
        if (this.path.length > 1200) {
            this.path.shift();
        }
        stroke('red')
        // line(0,0,0, 0,0,this.scl*5)
        // line(0,0,0, this.scl*5,0,0)
        // line(0,0,0, 0,this.scl*5,0)
        rotateY(-PI/4)
        rotateX(PI/4)

        this.angle -=0.01
        if(this.angle <= -TWO_PI){
            this.angle = 0
        }
        rotate(this.angle, new p5.Vector(1,1,1))
        stroke(this.color);
        strokeWeight(10);
        point(x *this.scl, y *this.scl, z *this.scl);
        // console.log(this.color)
       
        beginShape()
        for (let i = 1; i < this.path.length; i++) {
            stroke(this.color);
            strokeWeight(1);
            vertex(this.path[i].x *this.scl, this.path[i].y *this.scl, this.path[i].z *this.scl);

        }
        endShape()
    }
}
