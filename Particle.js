class Particle {
    constructor(clr, scl, initialCoordinates, pathLength, offSet) {
        this.startPoint = initialCoordinates();
        this.x = this.startPoint.x;
        this.y = this.startPoint.y;
        this.z = this.startPoint.z;
        this.scl = scl;
        this.color = clr;
        this.path = [];
        this.initialCoordinates = initialCoordinates;
        this.pathLength = pathLength;
        this.offSet = {};
        for (const axis in offSet) {
            this.offSet[axis] = offSet[axis] * this.scl;
        }
        // console.log(this.offSet)
        // console.log(this.x, this.y, this.z);
    }

    show(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        // console.log(x, y, z);

        if (
            this.z * this.scl > innerWidth / 2 ||
            this.z * this.scl < -innerWidth / 2 ||
            this.x * this.scl > innerWidth / 2 ||
            this.x * this.scl < -innerWidth / 2 ||
            this.y * this.scl > innerWidth / 2 ||
            this.y * this.scl < -innerWidth / 2
        ) {
            this.path = [];
            let newCoordinate = this.initialCoordinates();
            this.x = newCoordinate.x;
            this.y = newCoordinate.y;
            this.z = newCoordinate.z;
        }
        this.path.push(createVector(this.x, this.y, this.z));
        if (this.path.length > this.pathLength) {
            this.path.shift();
        }

        noFill();
        stroke(this.color);
        strokeWeight(5);
        point(
            this.offSet.x + this.x * this.scl,
            this.offSet.y + this.y * this.scl,
            this.offSet.z + this.z * this.scl
        );

        beginShape();

        for (let i = 1; i < this.path.length; i++) {
            stroke(this.color);
            strokeWeight(1);
            vertex(
                this.offSet.x + this.path[i].x * this.scl,
                this.offSet.y + this.path[i].y * this.scl,
                this.offSet.z + this.path[i].z * this.scl
            );
        }
        endShape();
    }
}
