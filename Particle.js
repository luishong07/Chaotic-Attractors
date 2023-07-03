class Particle{
    constructor(clr,scl){
        this.x = random(-5,5)
        this.y = random(-5,5)
        this.z = random(random(-2,-7),random(2,7))
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
        stroke(this.clr);
        // stroke(255, 204,0);
        strokeWeight(5);
        point(x *this.scl, y *this.scl, z *this.scl);
    }
}