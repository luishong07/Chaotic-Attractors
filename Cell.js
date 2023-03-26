class Cell {
    constructor(x, y, z, color) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.path = [];
        this.color = color
    }

    getInitialValues() {
        return [this.x, this.y, this.z];
    }
    show(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.path.push(createVector(this.x, this.y, this.z));
        if (this.path.length > 1000) {
            this.path.shift();
        }
        stroke(255, 100);
        strokeWeight(10);
        point(x * 15, y * 15, z * 15);
        // console.log(this.color)
        beginShape()
        for (let i = 0; i < this.path.length; i++) {
            stroke(this.color);
            strokeWeight(5);
            vertex(this.path[i].x * 15, this.path[i].y * 15, this.path[i].z * 15);
        }
        // line(0,0,0,x*15, y*15, z*15)
        endShape()
    }
}
