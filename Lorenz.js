// const sigma = 10;
// const rho = 28;
// const beta = 8 / 3;
// const dt = 0.01
// const dx = sigma * (y - x) * dt;
// const dy = (x * (rho - z) - y) * dt;
// const dz = (x * y - beta * z) * dt;

// // export {sigma}

class Lorenz {
    constructor() {
        this.sigma = 10;
        this.rho = 28;
        this.beta = 8 / 3;
        this.tracerColor = color(3, 240, 236);
        this.scl = 10;
        this.dt = 0.01;
    }

    dx(x,y){
        let xStep = this.sigma*(y - x)
        return xStep
    }

    dy(x,y,z){
        let yStep = (-1*x*z) + (this.rho*x) - (y)
        return yStep
    }

    dz(x,y,z){
        let zStep = (x*y) - (this.beta*z)
        return zStep
    }
}
