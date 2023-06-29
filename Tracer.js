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
       
       
        beginShape()
        for (let i = 1; i < this.path.length; i++) {
            stroke(this.color);
            strokeWeight(1);
            vertex(this.path[i].x *this.scl, this.path[i].y *this.scl, this.path[i].z *this.scl);

        }
        endShape()
    }
}
