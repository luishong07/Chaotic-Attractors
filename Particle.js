class Particle {
    constructor(clr, scl, initialCoordinates) {
        this.x =initialCoordinates().x
        this.y =initialCoordinates().y
        this.z =initialCoordinates().z
            // this.x = random(-5, 5);
            // this.y = random(-5, 5);
            // this.z = random(-5, 5);
            // this.x = -20
            // this.y = -19
            // this.z = 35
            // this.z = random([random(-7,-9),random(7,9)])
        this.r =random(255);
        this.g = random(255);
        this.b = random(255);
        this.scl = scl;
        this.color = clr;
        this.path = [];
        this.initialCoordinates = initialCoordinates;
        // console.log(this.initialCoordinates)
    }

    show(x, y, z) {
        // this.x = x
        // this.y = y
        // this.z = z
        // stroke(this.clr);
        // strokeWeight(5);
        // point(x *this.scl, y *this.scl, z *this.scl);

        ////TEST///
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
            console.log("And it is out");
            // console.log(this.initialCoordinates())
            this.path = [];
            let newCoordinate = this.initialCoordinates();
            this.x = newCoordinate.x;
            this.y = newCoordinate.y;
            this.z = newCoordinate.z;
           
        }
        this.path.push(createVector(this.x, this.y, this.z));
        if (this.path.length > 30) {
            this.path.shift();
        }
        // console.log(x, y, z);
        noFill();
        stroke(this.color);
        strokeWeight(5);
        point(x * this.scl, y * this.scl, z * this.scl);
        // console.log(this.color)

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

    // show(x,y,z){

    //     this.x = x
    //     this.y = y
    //     this.z = z
    //     let weightedX = x*this.scl
    //     let weightedY = y*this.scl
    //     let weightedZ = z*this.scl
    //     // console.log(weightedX, weightedY)
    //     stroke(this.clr);
    //     // stroke(255, 204,0);
    //     strokeWeight(5);
    //     point(weightedX, weightedY, weightedZ);
    // }
}
