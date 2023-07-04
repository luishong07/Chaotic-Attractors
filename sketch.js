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
        return this.sigma * (y - x) * this.dt;
    },
    dy: function (x, y, z) {
        return (-1 * x * z + this.rho * x - y) * this.dt;
    },
    dz: function (x, y, z) {
        return (x * y - this.beta * z) * this.dt;
    },
    particleColor: function () {
        return color(random(70, 160), 100, 50);
    },
};
const fourwing = {
    a: 0.2,
    b: 0.01,
    c: -0.4,
    tracerColor: function () {
        return color(169, 100, 50);
    },
    scl: 100,
    dt: 0.1,
    dx: function (x, y, z) {
        return (this.a * x + y * z) * this.dt;
    },
    dy: function (x, y, z) {
        return (this.b * x + this.c * y - x * z) * this.dt;
    },
    dz: function (x, y, z) {
        // console.log(x,y,z)
        return (-z - x * y) * this.dt;
    },
    particleColor: function () {
        return color(random(0, 57), 100, 50);
    },
};
const halvorsen = {
    // let dx = (-1*a*p.x - 4*p.y - 4*p.z -p.y**2)*dt
    // let dy = (-1*a*p.y - 4*p.z - 4*p.x -p.z**2)*dt
    // let dz = (-1*a*p.z - 4*p.x - 4*p.y -p.x**2)*dt
    a: 1.89,
    tracerColor: function () {
        return color(230, 100, 76);
    },
    scl: 40,
    dt: 0.01,
    dx: function (x, y, z) {
        return (-1 * this.a * x - 4 * y - 4 * z - y ** 2) * this.dt;
    },
    dy: function (x, y, z) {
        return (-1 * this.a * y - 4 * z - 4 * x - z ** 2) * this.dt;
    },
    dz: function (x, y, z) {
        return (-1 * this.a * z - 4 * x - 4 * y - x ** 2) * this.dt;
    },
    particleColor: function () {
        return color(random(160, 205), 100, 50);
    },
};
const rabinovichFabrikant = {
    // let dx = (p.y * (p.z - 1 + p.x ** 2) + sigma * p.x) * dt;
    // let dy = (p.x * (3 * p.z + 1 - p.x ** 2) + sigma * p.y) * dt;
    // let dz = -2 * p.z * (alpha + p.x * p.y) * dt;
    alpha: 0.14,
    sigma: 0.1,
    tracerColor: function () {
        return color(325, 100, 50);
    },
    scl: 200,
    dt: 0.04,
    dx: function (x, y, z) {
        return (y * (z - 1 + x ** 2) + this.sigma * x) * this.dt;
    },
    dy: function (x, y, z) {
        return (x * (3 * z + 1 - x ** 2) + this.sigma * y) * this.dt;
    },
    dz: function (x, y, z) {
        return -2 * z * (this.alpha + x * y) * this.dt;
    },
    particleColor: function () {
        return color(random(170, 205), 100, 50);
    },
};
const sprott = {
    // let dx = (p.y + a * p.x * p.y + p.x * p.z) * dt;
    // let dy = (1 - b * p.x ** 2 + p.y * p.z) * dt;
    // let dz = (p.x - p.x ** 2 - p.y ** 2) * dt;
    a: 2.07,
    b: 1.79,
    tracerColor: function () {
        return color(57, 100, 50);
    },
    scl: 100,
    dt: 0.1,
    dx: function (x, y, z) {
        return (y + this.a * x * y + x * z) * this.dt;
    },
    dy: function (x, y, z) {
        return (1 - this.b * x ** 2 + y * z) * this.dt;
    },
    dz: function (x, y, z) {
        return (x - x ** 2 - y ** 2) * this.dt;
    },
    particleColor: function () {
        return color(random(0, 33), 100, 50);
    },
};
const dadras = {
    // let dx =( p.y - (a*p.x) + (b*p.y*p.z))*dt
    // let dy = ((c*p.y) - (p.x*p.z) + p.z)*dt
    // let dz = ((d*p.x*p.y) - (e*p.z))*dt
    a: 3,
    b: 2.7,
    c: 1.7,
    d: 2,
    e: 9,
    scl: 20,
    dt: 0.01,
    tracerColor: function () {
        return color(282, 100, 84);
    },
    dx: function (x, y, z) {
        return (y - this.a * x + this.b * y * z) * this.dt;
    },
    dy: function (x, y, z) {
        return (this.c * y - x * z + z) * this.dt;
    },
    dz: function (x, y, z) {
        return (this.d * x * y - this.e * z) * this.dt;
    },
    particleColor: function () {
        return color(random(0, 200), 100, 84);
    },
};
const aizawa = {
    // let dx = ((p.z-b)*p.x - d*p.y)*dt
    // let dy = ((d*p.x) + p.y*(p.z - b))*dt
    // let dz = (c + (a*p.z) -((p.z*p.z*p.z)/3) - (((p.x*p.x)+(p.y*p.y))*(1+(e*p.z))) +(f*p.z*p.x*p.x*p.x))*dt
    //note: consider making the starting values in the z axis only positives
    a: 0.95,
    b: 0.7,
    c: 0.6,
    d: 3.5,
    e: 0.25,
    f: 0.1,
    scl: 100,
    dt: 0.015,
    tracerColor: function () {
        return color(0, 96, 37);
    },
    dx: function (x, y, z) {
        return ((z - this.b) * x - this.d * y) * this.dt;
    },
    dy: function (x, y, z) {
        return (this.d * x + y * (z - this.b)) * this.dt;
    },
    dz: function (x, y, z) {
        return (
            (this.c +
                this.a * z -
                (z * z * z) / 3 -
                (x * x + y * y) * (1 + this.e * z) +
                this.f * z * x * x * x) *
            this.dt
        );
    },
    particleColor: function () {
        return color(random(0, 150), 100, 84);
    },
};
const chen = {
    // let dx = (alpha * p.x - p.y * p.z) * dt;
    // let dy = (beta * p.y + p.x * p.z) * dt;
    // let dz = (delta * p.z + (p.x * p.y) / 3) * dt;
    // good starting coordenates 5, -5, -5
    alpha: 5,
    beta: -10,
    delta: -0.38,
    scl: 20,
    dt: 0.008,
    dx: function (x, y, z) {
        return (this.alpha * x - y * z) * this.dt;
    },
    dy: function (x, y, z) {
        return (this.beta * y + x * z) * this.dt;
    },
    dz: function (x, y, z) {
        return (this.delta * z + (x * y) / 3) * this.dt;
    },
    tracerColor: function () {
        return color(0, 100, 80);
    },
    particleColor: function () {
        return color(random(30, 200), 100, 50);
    },
};
const thomas = {
    // dt = 0.0001;
    // let dx = sin(p.y) - bee*p.x
    // let dy = sin(p.z) - bee*p.y
    // let dz = sin(p.x) - bee*p.z
    b: 0.208186,
    scl: 100,
    dt: 0.15,
    dx: function (x, y, z) {
        return (sin(y) - this.b * x) * this.dt;
    },
    dy: function (x, y, z) {
        return (sin(z) - this.b * y) * this.dt;
    },
    dz: function (x, y, z) {
        return (sin(x) - this.b * z) * this.dt;
    },
    tracerColor: function () {
        return color(174, 66, 39);
    },
    particleColor: function () {
        return color(random(0, 50), 89, 54);
    },
};
const rossler = {
    // dt = 0.05;
    // let dx = (-p.y - p.z) * dt;
    // let dy = (p.x + a * p.y) * dt;
    // let dz = (b + p.z * (p.x - c)) * dt;
    // for initial condition with negative z, particle goes out of control sometimes
    a: 1 / 5,
    b: 1 / 5,
    c: 5.7,
    scl: 20,
    dt: 0.05,
    dx: function (x, y, z) {
        return (-y - z) * this.dt;
    },
    dy: function (x, y, z) {
        return (x + this.a * y) * this.dt;
    },
    dz: function (x, y, z) {
        return (this.b + z * (x - this.c)) * this.dt;
    },
    tracerColor: function () {
        return color(42, 100, 50);
    },
    particleColor: function () {
        return color(random(75, 200), 100, 50);
    },
};
const threeScroll = {
    // let dx = (a * (p.y - p.x) + d * p.x * p.z) * dt;
    // let dy = (b * p.x - p.x * p.z + f * p.y) * dt;
    // let dz = (c * p.z + p.x * p.y - e * p.x ** 2) * dt;
    a: 32.48,
    b: 45.84,
    c: 1.18,
    d: 0.13,
    e: 0.57,
    f: 14.7,
    scl: 3,
    dt: 0.0005,
    dx: function (x, y, z) {
        return (this.a * (y - x) + this.d * x * z) * this.dt;
    },
    dy: function (x, y, z) {
        return (this.b * x - x * z + this.f * y) * this.dt;
    },
    dz: function (x, y, z) {
        return (this.c * z + x * y - this.e * x ** 2) * this.dt;
    },
    tracerColor: function () {
        return color(260, 100, 50);
    },
    particleColor: function () {
        return color(random(36, 63), 100, 50);
    },
};
const lorenz83 = {
    // let dx = (-1 * a * p.x - p.y ** 2 - p.z ** 2 + a * f) * dt;
    // let dy = (-1 * p.y + p.x * p.y - b * p.x * p.z + g) * dt;
    // let dz = (-1 * p.z + b * p.x * p.y + p.x * p.z) * dt;
    a: 0.95,
    b: 7.91,
    f: 4.83,
    g: 4.66,
    scl: 50,
    dt: 0.01,
    dx: function(x,y,z){
        return (-1 * this.a * x - y ** 2 - z ** 2 + this.a * this.f) * this.dt;
    },
    dy: function(x,y,z){
        return (-1 * y + x * y - this.b * x * z + this.g) * this.dt;
    },
    dz: function(x,y,z){
        return (-1 * z + this.b * x * y + x * z) * this.dt;
    },
    tracerColor: function(){
        return color(0, 100, 30)
    },
    particleColor:  function(){
        return color(random(22,66), 100 , 49)
    }
};

const newtonLeipnik = {
    a: 0.4,
    b: 0.175,
    scl: 50,
    dt: 0.005,
    dx: function(x,y,z){
        return (-this.a*x + y + 10*y*z)*this.dt
    },
    dy: function(x,y,z){
        return (-x - this.a*y + 5*x*z)*this.dt
    },
    dz: function(x,y,z){
        return (this.b*z - 5*x*y)*this.dt
    },
    tracerColor: function(){
        return color(0, 100, 30)
    },
    particleColor:  function(){
        return color(random(22,66), 100 , 49)
    }
}

const circular ={
    r: function(){
        return random(1,50)
    },
    theta: function(){
        return random(0,TWO_PI)
    },
    dx: function(r,theta){
        return this.r * cos(this.theta)
    },
    dy: function(r,theta){
        return this.r * sin(this.theta)
    },
    dz: function(){
        return 0
    },
    tracerColor: function(){
        return color(0, 100, 30)
    },
    particleColor:  function(){
        return color(random(22,66), 100 , 49)
    }
}

//lorenz83
// const a = 0.95;
// const b = 7.91;
// const f = 4.83;
// const g = 4.66;

let points = [];
let c1;
let c2;
let tracers = [];
let bee = 0.208186;
let scl = 100;
let particles = [];
let dt;
let attractor;
function setup() {
    createCanvas(innerWidth, innerHeight, WEBGL);
    colorMode(HSL);
    attractor = newtonLeipnik;

    c1 = new Tracer(1, 0, 1.1, attractor.tracerColor(), attractor.scl);
    c2 = new Tracer(1, 0, 1, attractor.tracerColor(), attractor.scl);

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
    frameRate(30);
    orbitControl();
    // rotateY(PI / 2);

    stroke("red");
    line(0, 0, 0, 0, innerHeight / 2, 0); //y axis

    stroke("blue");
    line(0, 0, 0, 0, 0, innerHeight / 2); //z axis

    stroke("yellow");
    line(0, 0, 0, innerWidth / 2, 0, 0); //x axis

    // angle+=0.01
    // // rotateX(angle)
    // rotateY(angle)

    //lorenz83
    // let dx = (-1 * a * p.x - p.y ** 2 - p.z ** 2 + a * f) * dt;
    // let dy = (-1 * p.y + p.x * p.y - b * p.x * p.z + g) * dt;
    // let dz = (-1 * p.z + b * p.x * p.y + p.x * p.z) * dt;

    for (let t of tracers) {
        let dx = attractor.dx(t.x, t.y, t.z);
        let dy = attractor.dy(t.x, t.y, t.z);
        let dz = attractor.dz(t.x, t.y, t.z);

        let newX = t.x + dx;
        let newY = t.y + dy;
        let newZ = t.z + dz;
        t.show(newX, newY, newZ);
    }

    for (let p of particles) {
        let dx = attractor.dx(p.x, p.y, p.z);
        let dy = attractor.dy(p.x, p.y, p.z);
        let dz = attractor.dz(p.x, p.y, p.z);

        let newX = p.x + dx;
        let newY = p.y + dy;
        let newZ = p.z + dz;
        p.show(newX, newY, newZ);
    }
}
