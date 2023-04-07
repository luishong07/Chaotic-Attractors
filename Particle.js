class Particle{
    constructor(x,y,z,scl){
        this.x = random(-1,1)
        this.y = random(-1,1)
        this.z = random(-1,1)
        this.r = random(255)
        this.g = random(255)
        this.b = random(255)
        this.scl = scl
    }

    show(x,y,z){
        this.x = x
        this.y = y
        this.z = z
        stroke(this.r,this.g,this.b);
        strokeWeight(5);
        point(x *this.scl, y *this.scl, z *this.scl);
    }
}