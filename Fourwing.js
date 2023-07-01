class Fourwing{
    constructor(){
        this.a = 0.2
        this.b = 0.01
        this.c = -0.4
        this.traceColor = color(169,100.50)
        this.scl = 50
        this.dt = 0.1
    }

    particleColor(){
        let clr = color(random(0,57),100,50)
        return clr
    }
}