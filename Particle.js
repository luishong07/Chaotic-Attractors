class Particle{
    constructor(clr,scl){
        this.x = random(-0.1,0.1)
        this.y = random(-0.1,0.1)
        this.z = random(-0.1,0.1)
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
        strokeWeight(5);
        point(x *this.scl, y *this.scl, z *this.scl);
    }
}