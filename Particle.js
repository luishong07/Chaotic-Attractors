class Particle{
    constructor(clr,scl){
        this.x = random(-5,5)
        this.y = random(-5,5)
        this.z = random(-5,5)
        // this.z = random([random(-7,-9),random(7,9)])
        this.r = random(255)
        this.g = random(255)
        this.b = random(255)
        this.scl = scl
        this.clr = clr
        
    }

    show(x,y,z){

        this.x = x
        this.y = y
        this.z = z
        let weightedX = x*this.scl
        let weightedY = y*this.scl
        let weightedZ = z*this.scl
        // console.log(weightedX, weightedY)
        stroke(this.clr);
        // stroke(255, 204,0);
        strokeWeight(5);
        point(weightedX, weightedY, weightedZ);
    }
}