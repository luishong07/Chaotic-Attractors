class Particle {
    constructor(clr, scl, initialCoordinates, pathLength) {
        this.startPoint = initialCoordinates()
        this.x = this.startPoint.x;
        this.y = this.startPoint.y;
        this.z = this.startPoint.z;
        this.r = random(255);
        this.g = random(255);
        this.b = random(255);
        this.scl = scl;
        this.color = clr;
        this.path = [];
        this.initialCoordinates = initialCoordinates;
        this.pathLength = pathLength
    }

    show(x, y, z) {

        this.x = x;
        this.y = y;
        this.z = z;
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
        point(x * this.scl, y * this.scl, z * this.scl);

        beginShape();
        for (let i = 1; i < this.path.length; i++) {
            stroke(this.color);
            strokeWeight(1);
            vertex(
                this.path[i].x * this.scl,
                this.path[i].y * this.scl,
                this.path[i].z * this.scl
            );
        }
        endShape();
    }
}
