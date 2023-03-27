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
        if (this.path.length > 1500) {
            this.path.shift();
        }
        stroke(255, 100);
        strokeWeight(10);
        point(x * 20, y * 20, z * 20);
        // console.log(this.color)
        beginShape()
        for (let i = 0; i < this.path.length; i++) {
            stroke(this.color);
            strokeWeight(1);
            vertex(this.path[i].x * 20, this.path[i].y * 20, this.path[i].z * 20);
        }
        // line(0,0,0,x*15, y*15, z*15)
        endShape()
    }
}
