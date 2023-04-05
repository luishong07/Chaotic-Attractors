class Cell {
    constructor(x, y, z, color) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.path = [];
        this.color = color
        this.angle = 0
    }

    // getInitialValues() {
    //     return [this.x, this.y, this.z];
    // }
    show(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.path.push(createVector(this.x, this.y, this.z));
        if (this.path.length > 1500) {
            this.path.shift();
        }
        rotateY(angle)
        stroke(255, 100);
        strokeWeight(10);
        point(x * 1, y * 1, z * 1);
        // console.log(this.color)
        beginShape()
        for (let i = 0; i < this.path.length; i++) {
            stroke(this.color);
            strokeWeight(1);
            vertex(this.path[i].x * 1, this.path[i].y * 1, this.path[i].z * 1);
        }
        endShape()
    }
}
