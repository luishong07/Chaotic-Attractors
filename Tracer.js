class Tracer {
    constructor(x, y, z, color,scl) {
        // console.log(scl)
        this.x = x;
        this.y = y;
        this.z = z;
        this.path = [];
        this.color = color
        this.angle = 0
        this.scl = scl
    }


    show(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;

        this.path.push(createVector(this.x*this.scl, this.y*this.scl,this.z*this.scl));
        if (this.path.length > 3000) {
            this.path.shift();
        }
        noFill()
        stroke(this.color);
        strokeWeight(5);
        point(x *this.scl, y *this.scl, z *this.scl);
        beginShape()
        for (let i = 1; i < this.path.length; i++) {
            strokeWeight(1);
            vertex(this.path[i].x, this.path[i].y, this.path[i].z);
        }
        endShape()
    }
}
