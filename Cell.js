class Cell {
    constructor(x,y,z ){
        this.x = x
        this.y = y
        this.z = z
    }
    show(x,y,z){
        stroke(255,100)
        strokeWeight(5)
        point(x*8, y*8, z*8)
        line(0,0,0,x*8, y*8, z*8)
    }
}