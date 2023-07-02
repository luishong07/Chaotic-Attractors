//lorenz constants
const lorenz = {
    sigma: 10,
    rho: 28,
    beta: 8 / 3,
    tracerColor: () => {
        return color(188, 50, 50);
    },
    scl: 8,
    dt: 0.01,
    dx: function (x, y) {
        return (this.sigma * (y - x))*this.dt;
    },
    dy: function (x, y, z) {
        return (-1 * x * z + this.rho * x - y)*this.dt;
    },
    dz: function (x, y, z) {
        return (x * y - this.beta * z)*this.dt;
    },
    particleColor: function () {
        return color(random(70, 160), 100, 50);
    }
};

const fourwing = {
    a: 0.2,
    b: 0.01,
    c: -0.4,
    tracerColor: function () {
        return color(169, 100,50);
    },
    scl: 100,
    dt: 0.1,
    dx: function (x, y, z) {
        return (this.a * x + y * z)*this.dt;
    },
    dy: function (x, y, z) {
        return (this.b * x + this.c * y - x * z)*this.dt;
    },
    dz: function (x,y,z) {
        // console.log(x,y,z)
        return (-z - x * y)*this.dt;
    },
    particleColor: function () {
        return color(random(0,57),100,50)
    },
};

const halvorsen ={
    // let dx = (-1*a*p.x - 4*p.y - 4*p.z -p.y**2)*dt
    // let dy = (-1*a*p.y - 4*p.z - 4*p.x -p.z**2)*dt
    // let dz = (-1*a*p.z - 4*p.x - 4*p.y -p.x**2)*dt
    a: 1.89,
    tracerColor: function(){
        return color(230,100,76)
    },
    scl:40,
    dt:0.01,
    dx: function(x,y,z){
        return (-1*this.a*x - 4*y - 4*z -y**2)*this.dt
    },
    dy: function(x,y,z){
        return (-1*this.a*y - 4*z - 4*x -z**2)*this.dt
    },
    dz: function(x,y,z){
        return (-1*this.a*z - 4*x - 4*y -x**2)*this.dt
    },
    particleColor: function(){
        return color(random(160,205),100,50)
    }

}

const rabinovichFabrikant = {
    // let dx = (p.y * (p.z - 1 + p.x ** 2) + sigma * p.x) * dt;
    // let dy = (p.x * (3 * p.z + 1 - p.x ** 2) + sigma * p.y) * dt;
    // let dz = -2 * p.z * (alpha + p.x * p.y) * dt;
    alpha: 0.14,
    sigma: 0.10,
    tracerColor: function(){
        return color(325,100, 50)
    },
    scl: 200,
    dt: 0.04,
    dx: function(x,y,z){
        return (y * (z - 1 + x ** 2) + this.sigma * x) * this.dt;    
    },
    dy: function(x,y,z){
        return (x * (3 * z + 1 - x ** 2) + this.sigma * y) * this.dt;
    },
    dz: function(x,y,z){
        return -2 * z * (this.alpha + x * y) * this.dt;
    },
    particleColor: function(){
        return color(random(170,205),100,50)
    }

}

const sprott = {
    // let dx = (p.y + a * p.x * p.y + p.x * p.z) * dt;
    // let dy = (1 - b * p.x ** 2 + p.y * p.z) * dt;
    // let dz = (p.x - p.x ** 2 - p.y ** 2) * dt;
    a: 2.07,
    b: 1.79,
    tracerColor: function(){
        return color(57,100,50)
    },
    scl: 100,
    dt: 0.1,
    dx: function(x,y,z){
        return (y + this.a * x * y + x * z) * this.dt;
    },
    dy: function(x,y,z){
        return (1 - this.b * x ** 2 + y * z) * this.dt;
    },
    dz: function(x,y,z){
        return (x - x ** 2 - y ** 2) * this.dt;
    },
    particleColor: function(){
        return color(random(0,33),100,50)
    }
}



// rossler constants
// let a = 1 / 5;
// let b = 1 / 5;
// let c = 5.7;

//fourwing
// const fourwing = {
//     a: 0.2,
//     b: 0.01,
//     c: -0.4,
//     traceColor: color(169, 100.5),
//     scl: 50,
//     dt: 0.1,
// };

// let a = 0.2;
// let b = 0.01;
// let c = -0.4;

//aizawa constants
// const a = 0.95;
// const b = 0.7;
// const c = 0.6;
// const d = 3.5;
// const e = 0.25;
// const f = 0.1;

//lorenz83
// const a = 0.95;
// const b = 7.91;
// const f = 4.83;
// const g = 4.66;

//dadras constants
// const a = 3
// const b = 2.7
// const c = 1.7
// const d = 2
// const e = 9

//chen constants
// const alpha = 5;
// const beta = -10;
// const delta = -0.38;

//halvorsen constans
// const a = 1.89

//rabonivich-fabrikant
// let alpha = 0.14;
// let sigma = 0.1;

//sprott constants
// let a = 2.07
// let b = 1.79

//three scroll unified chaotic system
// const a = 32.48
// const b = 45.84
// const c = 1.18
// const d = 0.13
// const e = 0.57
// const f = 14.7

let points = [];
let c1;
let c2;
let tracers = [];
let bee = 0.208186;
let scl = 100;
let particles = [];
// let lorenz;
let dt;
let attractor
function setup() {
    createCanvas(innerWidth, innerHeight, WEBGL);
    colorMode(HSL);
    attractor = sprott
    // dt = attractor.dt;
    // lorenz = new Lorenz();
    // console.log(attractor)
    c1 = new Tracer(0.1,-0.1,0.1, attractor.tracerColor(), attractor.scl);
    c2 = new Tracer(0.1, -0.1, 0.2, attractor.tracerColor(), attractor.scl);

    tracers.push(c1);
    tracers.push(c2);

    for (let i = 0; i < 80; i++) {
        let p = new Particle(attractor.particleColor(), attractor.scl);
        particles.push(p);
    }
}
let angle = 0;
function draw() {
    background("black");
    // background('rgba(16,0,0, 1)')
    frameRate(30);
    orbitControl();
    // rotateZ(PI / 2);

    stroke('red')
    line(0,0,0,
        0,innerHeight/2,0)//y axis

    stroke('blue')
    line(0,0,0,
        0,0,200)//z axis

    stroke('yellow')
    line(0,0,0,
        innerHeight/2,0,0)//x axis
        
    // angle+=0.01
    // // rotateX(angle)
    // rotateY(angle)

    //four wing
    // let dx = (a*x + y*z)*dt
    // let dy = (b*x + C*y + x*z)*dt
    // let dz = (-z -x*y)*dt

    //thomas
    // dt = 0.0001;
    // let dx = sin(p.y) - bee*p.x
    // let dy = sin(p.z) - bee*p.y
    // let dz = sin(p.x) - bee*p.z

    //aizawa
    // dt = 0.01
    // let dx = ((p.z-b)*p.x - d*p.y)*dt
    // let dy = ((d*p.x) + p.y*(p.z - b))*dt
    // let dz = (c + (a*p.z) -((p.z*p.z*p.z)/3) - (((p.x*p.x)+(p.y*p.y))*(1+(e*p.z))) +(f*p.z*p.x*p.x*p.x))*dt

    //lorenz83
    // let dx = (-1 * a * p.x - p.y ** 2 - p.z ** 2 + a * f) * dt;
    // let dy = (-1 * p.y + p.x * p.y - b * p.x * p.z + g) * dt;
    // let dz = (-1 * p.z + b * p.x * p.y + p.x * p.z) * dt;

    //dadras
    // let dx =( p.y - (a*p.x) + (b*p.y*p.z))*dt
    // let dy = ((c*p.y) - (p.x*p.z) + p.z)*dt
    // let dz = ((d*p.x*p.y) - (e*p.z))*dt
    // dt = 0.1;
    // dt = lorenz.dt
    for (let t of tracers) {
        // let dx = attractor.dx(t.x, t.y,t.z) * dt;
        // let dy = attractor.dy(t.x, t.y, t.z) * dt;
        // let dz = attractor.dz(t.x, t.y, t.z) * dt;

        let dx = attractor.dx(t.x, t.y,t.z) 
        let dy = attractor.dy(t.x, t.y, t.z) 
        let dz = attractor.dz(t.x, t.y, t.z) 


        // console.log(t);
        // let dx = (a * t.x + t.y * t.z) * dt;
        // let dy = (b * t.x + c * t.y - t.x * t.z) * dt;
        // let dz = (-1 * t.z - 1 * t.x * t.y) * dt;

        // let dx = (-1*a*t.x - 4*t.y - 4*t.z -t.y**2)*dt
        // let dy = (-1*a*t.y - 4*t.z - 4*t.x -t.z**2)*dt
        // let dz = (-1*a*t.z - 4*t.x - 4*t.y -t.x**2)*dt

        // let dx = fourwing.dx(t.x, t.y) * dt;
        // let dy = fourwing.dy(t.x, t.y, t.z) * dt;
        // let dz = fourwing.dz(t.x, t.y, t.z) * dt;

        let newX = t.x + dx;
        let newY = t.y + dy;
        let newZ = t.z + dz;
        t.show(newX, newY, newZ);
    }

    for (let p of particles) {
        let dx = attractor.dx(p.x, p.y,p.z) 
        let dy = attractor.dy(p.x, p.y, p.z) 
        let dz = attractor.dz(p.x, p.y, p.z)



        // let dx = attractor.dx(p.x, p.y, p.z) * dt;
        // let dy = attractor.dy(p.x, p.y, p.z) * dt;
        // let dz = attractor.dz(p.x, p.y, p.z) * dt;
        // console.log(attractor.dx(p.x,p.y,p.z));

        // let dx = (a * p.x + p.y * p.z) * dt;
        // let dy = (b * p.x + c * p.y - p.x * p.z) * dt;
        // let dz = (-1 * p.z - 1 * p.x * p.y) * dt;

        // let dx = (-1*a*p.x - 4*p.y - 4*p.z -p.y**2)*dt
        // let dy = (-1*a*p.y - 4*p.z - 4*p.x -p.z**2)*dt
        // let dz = (-1*a*p.z - 4*p.x - 4*p.y -p.x**2)*dt

        let newX = p.x + dx;
        let newY = p.y + dy;
        let newZ = p.z + dz;
        p.show(newX, newY, newZ);
    }

    //three scroll unified chaotic system
    // let dx = (a * (p.y - p.x) + d * p.x * p.z) * dt;
    // let dy = (b * p.x - p.x * p.z + f * p.y) * dt;
    // let dz = (c * p.z + p.x * p.y - e * p.x ** 2) * dt;

    //sprott
    // let dx = (p.y + a * p.x * p.y + p.x * p.z) * dt;
    // let dy = (1 - b * p.x ** 2 + p.y * p.z) * dt;
    // let dz = (p.x - p.x ** 2 - p.y ** 2) * dt;

    //rabinovich-fabrikant
    // let dx = (p.y * (p.z - 1 + p.x ** 2) + sigma * p.x) * dt;
    // let dy = (p.x * (3 * p.z + 1 - p.x ** 2) + sigma * p.y) * dt;
    // let dz = -2 * p.z * (alpha + p.x * p.y) * dt;

    //halvorsen
    // dt = 0.01;
    // let dx = (-1*a*p.x - 4*p.y - 4*p.z -p.y**2)*dt
    // let dy = (-1*a*p.y - 4*p.z - 4*p.x -p.z**2)*dt
    // let dz = (-1*a*p.z - 4*p.x - 4*p.y -p.x**2)*dt

    //chen
    // dt = 0.00125;
    // let dx = (alpha * p.x - p.y * p.z) * dt;
    // let dy = (beta * p.y + p.x * p.z) * dt;
    // let dz = (delta * p.z + (p.x * p.y) / 3) * dt;

    //lorenz
    // let dx = sigma * (p.y - p.x) * dt;
    // let dy = (p.x * (rho - p.z) - p.y) * dt;
    // let dz = (p.x * p.y - beta * p.z) * dt;

    //rossler
    // dt = 0.05;
    // let dx = (-p.y - p.z) * dt;
    // let dy = (p.x + a * p.y) * dt;
    // let dz = (b + p.z * (p.x - c)) * dt;

    // translate(0, 0, -200);
    // if (points.length > 500) {
    //     points.shift();
    // }
    // angle += 0.005;
    // rotateY(angle);
    // rotateX(PI / 2);
    // console.log(angle)
    // scale(1);
    // stroke(255);
    // noFill();
    // let hu = 0;
}
