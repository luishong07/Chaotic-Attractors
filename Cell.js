class Cell {
    constructor(x, y, z, color,scl) {
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
        if (this.path.length > 3000) {
            this.path.shift();
        }
        rotateY(angle)
        stroke(255, 100);
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
