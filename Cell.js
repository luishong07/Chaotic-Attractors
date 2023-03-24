class Cell {
    constructor(x,y,z ){
        this.x = x
        this.y = y
        this.z = z
    }

    getInitialValues(){
        return [this.x, this.y, this.z]
    }
    show(x,y,z){
        this.x = x
        this.y = y
        this.z = z
        stroke(255,100)
        strokeWeight(5)
        point(x*15, y*15, z*15)
        line(0,0,0,x*15, y*15, z*15)
    }
}