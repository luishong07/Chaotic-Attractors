const lorenz = {
    name: "Lorenz",
    sigma: 10,
    rho: 28,
    beta: 8 / 3,
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
    tracerColor: () => {
        return color(188, 50, 50);
    },
    particleColor: function () {
        return color(random(40, 120), 100, 50);
    },
    initialCoordinates: function () {
        let position = {};
        let x = round(random(-5, 5));
        let y = round(random(-5, 5));
        let z = round(random(-5, 5));
        position["x"] = x;
        position["y"] = y;
        position["z"] = z;
        return position;
    },
};
const fourwing = {
    name: "Fourwing",
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
    initialCoordinates: function () {
        let position = {};
        let x = round(random(-2, 2), 2);
        let y = round(random(-2, 2), 2);
        let z = round(random(-2, 2), 2);
        // let z = 0
        position["x"] = x;
        position["y"] = y;
        position["z"] = z;
        return position;
    },
};
const halvorsen = {
    name: "Halvorsen",
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
    initialCoordinates: function () {
        let position = {};
        let x = round(random(-5, 5));
        let y = round(random(-5, 5));
        let z = round(random(-5, 5));
        position["x"] = x;
        position["y"] = y;
        position["z"] = z;
        return position;
    },
};
const rabinovichFabrikant = {
    name: "Rabinovich-Fabrikant",
    // let dx = (p.y * (p.z - 1 + p.x ** 2) + sigma * p.x) * dt;
    // let dy = (p.x * (3 * p.z + 1 - p.x ** 2) + sigma * p.y) * dt;
    // let dz = -2 * p.z * (alpha + p.x * p.y) * dt;
    alpha: 0.14,
    sigma: 0.1,
    tracerColor: function () {
        return color(325, 100, 50);
    },
    scl: 100,
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
    initialCoordinates: function () {
        let position = {};
        let x = round(random(-1, 1), 2);
        let y = round(random(-1, 1), 2);
        let z = round(random(0, 1), 2);
        position["x"] = x;
        position["y"] = y;
        position["z"] = z;
        return position;
    },
};
const sprott = {
    name: "Sprott",
    // let dx = (p.y + a * p.x * p.y + p.x * p.z) * dt;
    // let dy = (1 - b * p.x ** 2 + p.y * p.z) * dt;
    // let dz = (p.x - p.x ** 2 - p.y ** 2) * dt;
    a: 2.07,
    b: 1.79,
    tracerColor: function () {
        return color(57, 100, 50);
    },
    scl: 100,
    dt: 0.05,
    dx: function (x, y, z) {
        return (y + this.a * x * y + x * z) * this.dt;
    },
    dy: function (x, y, z) {
        return (1 - this.b * (x * x) + y * z) * this.dt;
    },
    dz: function (x, y, z) {
        return (x - x * x - y * y) * this.dt;
    },
    particleColor: function () {
        return color(random(0, 33), 100, 50);
    },
    initialCoordinates: function () {
        let position = {};
        let x = round(random(-1, 1), 2);
        let y = round(random(-1, 1), 2);
        let z = round(random(0, 1), 2);
        position["x"] = x;
        position["y"] = y;
        position["z"] = z;
        return position;
    },
};
const dadras = {
    name: "Dadras",
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
    initialCoordinates: function () {
        let position = {};
        let x = round(random(-5, 5));
        let y = round(random(-5, 5));
        let z = round(random(-5, 5));
        position["x"] = x;
        position["y"] = y;
        position["z"] = z;
        return position;
    },
};
const aizawa = {
    name: "Aizawa",
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
    initialCoordinates: function () {
        let position = {};
        let x = round(random(-1, 1), 2);
        let y = round(random(-1, 1), 2);
        // let z = round(random(-0.25,1),2)
        let z = 0;
        position["x"] = x;
        position["y"] = y;
        position["z"] = z;
        return position;
    },
};
const chen = {
    name: "Chen",
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
    initialCoordinates: function () {
        let position = {};
        let x = round(random(-5, 5), 2);
        let y = round(random(-5, 5), 2);
        let z = round(random([random(-10, -5), random(10, 5)]), 2);
        position["x"] = x;
        position["y"] = y;
        position["z"] = z;
        return position;
    },
};
const thomas = {
    name: "Thomas",
    // dt = 0.0001;
    // let dx = sin(p.y) - bee*p.x
    // let dy = sin(p.z) - bee*p.y
    // let dz = sin(p.x) - bee*p.z
    b: 0.208186,
    scl: 90,
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
    initialCoordinates: function () {
        let position = {};
        let x = round(random(-5, 5));
        let y = round(random(-5, 5));
        let z = round(random(-5, 5));
        position["x"] = x;
        position["y"] = y;
        position["z"] = z;
        return position;
    },
};
const rossler = {
    name: "Rossler",
    // dt = 0.05;
    // let dx = (-p.y - p.z) * dt;
    // let dy = (p.x + a * p.y) * dt;
    // let dz = (b + p.z * (p.x - c)) * dt;
    // for initial condition with negative z, particle goes out of control sometimes
    a: 1 / 5,
    b: 1 / 5,
    c: 5.7,
    scl: 18,
    dt: 0.05,
    dx: function (x, y, z) {
        return (-y - z) * this.dt;
    },
    dy: function (x, y, z) {
        return (x + this.a * y) * this.dt;
    },
    dz: function (x, y, z) {
        return (this.b + z * (x - this.c)) * this.dt;
        // return 0
    },
    tracerColor: function () {
        return color(42, 100, 50);
    },
    particleColor: function () {
        return color(random(75, 200), 100, 50);
    },
    initialCoordinates: function () {
        let position = {};
        let x = round(random(-5, 5));
        let y = round(random(-5, 5));
        let z = round(random(-5, 5));
        position["x"] = x;
        position["y"] = y;
        position["z"] = z;
        return position;
    },
};
const threeScroll = {
    name: "3-Scroll Unified System",
    // let dx = (a * (p.y - p.x) + d * p.x * p.z) * dt;
    // let dy = (b * p.x - p.x * p.z + f * p.y) * dt;
    // let dz = (c * p.z + p.x * p.y - e * p.x ** 2) * dt;
    a: 32.48,
    b: 45.84,
    c: 1.18,
    d: 0.13,
    e: 0.57,
    f: 14.7,
    scl: 0.5,
    dt: 0.00025,
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
        return color(random(261, 291), 100, 50);
    },
    initialCoordinates: function () {
        let position = {};
        let x = round(random(-100, 100));
        let y = round(random(-100, 100));
        let z = round(random(-100, 100));
        position["x"] = x;
        position["y"] = y;
        position["z"] = z;
        return position;
    },
};
const lorenz83 = {
    name: "Lorenz 83",
    // let dx = (-1 * a * p.x - p.y ** 2 - p.z ** 2 + a * f) * dt;
    // let dy = (-1 * p.y + p.x * p.y - b * p.x * p.z + g) * dt;
    // let dz = (-1 * p.z + b * p.x * p.y + p.x * p.z) * dt;
    a: 0.95,
    b: 7.91,
    f: 4.83,
    g: 4.66,
    scl: 50,
    dt: 0.01,
    dx: function (x, y, z) {
        return (-1 * this.a * x - y ** 2 - z ** 2 + this.a * this.f) * this.dt;
    },
    dy: function (x, y, z) {
        return (-1 * y + x * y - this.b * x * z + this.g) * this.dt;
    },
    dz: function (x, y, z) {
        return (-1 * z + this.b * x * y + x * z) * this.dt;
    },
    tracerColor: function () {
        return color(0, 100, 30);
    },
    particleColor: function () {
        return color(random(22, 66), 100, 49);
    },
    initialCoordinates: function () {
        let position = {};
        let x = round(random(-2, 2), 2);
        let y = round(random(-2, 2), 2);
        let z = round(random(-2, 2), 2);
        position["x"] = x;
        position["y"] = y;
        position["z"] = z;
        return position;
    },
};
const newtonLeipnik = {
    name: "Newton Leipnik",
    //dt value contigent on initial conditions
    //for higher dt values like 0.03, smaller values better for initial conditions
    a: 0.4,
    b: 0.175,
    scl: 250,
    dt: 0.05,
    dx: function (x, y, z) {
        return (-this.a * x + y + 10 * y * z) * this.dt;
    },
    dy: function (x, y, z) {
        return (-x - this.a * y + 5 * x * z) * this.dt;
    },
    dz: function (x, y, z) {
        return (this.b * z - 5 * x * y) * this.dt;
    },
    tracerColor: function () {
        return color(0, 100, 30);
    },
    particleColor: function () {
        return color(random(22, 66), 100, 49);
    },
    initialCoordinates: function () {
        let position = {};
        let x = round(random(-0.1, 0.1), 2);
        let y = round(random(-0.1, 0.1), 2);
        let z = round(random(-0.1, 0.1), 2);
        position["x"] = x;
        position["y"] = y;
        position["z"] = z;
        return position;
    },
};
const noseHoover = {
    name: "Nose-Hoover",
    // dx = y
    // dy = -x+y*z
    // dz = a-y*y
    // a = 1.5
    a: 1.5,
    scl: 50,
    dt: 0.02,
    tracerColor: () => {
        return color(188, 50, 50);
    },
    dx: function (x, y, z) {
        return y * this.dt;
    },
    dy: function (x, y, z) {
        return (-x + y * z) * this.dt;
    },
    dz: function (x, y, z) {
        return (this.a - y * y) * this.dt;
    },
    particleColor: function () {
        return color(random(40, 120), 100, 50);
    },
    initialCoordinates: function () {
        let position = {};
        let x = round(random(-1, 1), 2);
        let y = round(random(-1, 1), 2);
        let z = round(random(-1, 1), 2);
        position["x"] = x;
        position["y"] = y;
        position["z"] = z;
        return position;
    },
};
const bouali = {
    name: "Bouali",
    // dx = x*(4-y)+a*z
    // dy = -y*(1-x^2)
    // dz = -x (1.5 - s*z) - 0.05*z
    //a = 0.3
    //s = 1.0
    a: 0.3,
    s: 1.0,
    tracerColor: function () {
        return color(169, 100, 50);
    },
    scl: 40,
    dt: 0.025,
    dx: function (x, y, z) {
        return (x * (4 - y) + this.a * z) * this.dt;
    },
    dy: function (x, y, z) {
        return -y * (1 - x * x) * this.dt;
    },
    dz: function (x, y, z) {
        return (-x * (1.5 - this.s * z) - 0.05 * z) * this.dt;
    },
    particleColor: function () {
        return color(random(0, 57), 100, 50);
    },
    initialCoordinates: function () {
        let position = {};
        let x = round(random(-2, 2), 2);
        let y = round(random(0, 2), 2);
        let z = round(random(-2, 2), 2);
        // let z = 0
        position["x"] = x;
        position["y"] = y;
        position["z"] = z;
        return position;
    },
};
const coullet = {
    name: "Coullet",
    a: 0.8,
    b: -1.1,
    c: -0.45,
    d: -1,
    scl: 100,
    dt: 0.03,
    tracerColor: function () {
        return color(169, 100, 50);
    },
    dx: function (x, y, z) {
        return y * this.dt;
    },
    dy: function (x, y, z) {
        return z * this.dt;
    },
    dz: function (x, y, z) {
        return (0.8 * x + -1.1 * y + -0.45 * z + -1 * x * x * x) * this.dt;
    },
    particleColor: function () {
        return color(random(0, 57), 100, 50);
    },
    initialCoordinates: function () {
        let position = {};
        let x = round(random(-0.5, 0.5), 2);
        let y = round(random(-0.5, 0.5), 2);
        // let y = round(0, 2);
        let z = round(random(-0.5, 0.5), 2);
        position["x"] = x;
        position["y"] = y;
        position["z"] = z;
        return position;
    },
};
const finance = {
    name: "Finance",
    //dx = ((1/b) - a)* x + z +x*y
    // dy = -b*y -X^2
    // dz = -x - c *z
    // a = 0.001
    // b= 0.2
    // c =1.1
    a: 0.001,
    b: 0.2,
    c: 1.1,
    scl: 50,
    dt: 0.05,
    dx: function (x, y, z) {
        return ((1 / this.b - this.a) * x + z + x * y) * this.dt;
    },
    dy: function (x, y, z) {
        return (-this.b * y - x * x) * this.dt;
    },
    dz: function (x, y, z) {
        return (-x - this.c * z) * this.dt;
    },
    tracerColor: function () {
        return color(169, 100, 50);
    },
    particleColor: function () {
        return color(random(0, 57), 100, 50);
    },
    initialCoordinates: function () {
        let position = {};
        let x = round(random(-2, 2), 2);
        let y = round(random(-2, 2), 2);
        let z = round(random(-2, 2), 2);
        // let z = 0
        position["x"] = x;
        position["y"] = y;
        position["z"] = z;
        return position;
    },
};
const arneodo = {
    name: "Arneodo",
    a: -5.5,
    b: 3.5,
    c: -1,
    scl: 30,
    dt: 0.01,
    dx: function (x, y, z) {
        return y * this.dt;
    },
    dy: function (x, y, z) {
        return z * this.dt;
    },
    dz: function (x, y, z) {
        return (-this.a * x - this.b * y - z + this.c * x * x * x) * this.dt;
    },
    tracerColor: function () {
        return color(230, 100, 76);
    },
    particleColor: function () {
        return color(random(160, 205), 100, 50);
    },
    initialCoordinates: function () {
        let position = {};
        let x = round(random(-2, 2), 2);
        let y = round(random(-2, 2), 2);
        let z = round(random(-2, 2), 2);
        position["x"] = x;
        position["y"] = y;
        position["z"] = z;
        return position;
    },
};
const rayleighBenard = {
    name: "Rayleigh-Benard",
    a: 9.0,
    b: 12,
    c: 0.5,
    scl: 20,
    dt: 0.02,
    dx: function (x, y, z) {
        return (-this.a * x + this.a * y) * this.dt;
    },
    dy: function (x, y, z) {
        return (this.b * x - y - x * z) * this.dt;
    },
    dz: function (x, y, z) {
        return (x * y - this.c * z) * this.dt;
    },
    tracerColor: function () {
        return color(230, 100, 76);
    },
    particleColor: function () {
        return color(random(160, 205), 100, 50);
    },
    initialCoordinates: function () {
        let position = {};
        let x = round(random(-10, 10), 2);
        let y = round(random(-10, 10), 2);
        let z = round(random(-10, 10), 2);
        position["x"] = x;
        position["y"] = y;
        position["z"] = z;
        return position;
    },
};
const dequanLi = {
    alpha: 40,
    beta: 1.833,
    delta: 0.16,
    epsilon: 0.65,
    rho: 55,
    zeta: 20,
    scl: 0.75,
    dt: 0.0005,
    dx: function (x, y, z) {
        return (this.alpha * (y - x) + this.delta * (x * z)) * this.dt;
    },
    dy: function (x, y, z) {
        return (this.rho * x + this.zeta * y - x * z) * this.dt;
    },
    dz: function (x, y, z) {
        return (this.beta * z + x * y - this.epsilon * x * x) * this.dt;
    },
    tracerColor: function () {
        return color(230, 100, 76);
    },
    particleColor: function () {
        return color(random(261, 291), 100, 50);
    },
    initialCoordinates: function () {
        let position = {};
        let x = round(random(-50, 50), 2);
        let y = round(random(-50, 50), 2);
        let z = round(random(-50, 50), 2);
        position["x"] = x;
        position["y"] = y;
        position["z"] = z;
        return position;
    },
};
const genesioTesi = {
    name: 'Genesio Tesi',
    a: -1.1,
    b: -0.44,
    scl: 200,
    dt: 0.018,
    dx: function (x, y, z) {
        return (y * this.dt);
    },
    dy: function (x, y, z) {
        return (z * this.dt);
    },
    dz: function (x, y, z) {
        return (-x + (this.a * y) + (this.b * z) + (x * x)) * this.dt;
    },
    tracerColor: () => {
        return color(188, 50, 50);
    },
    particleColor: function () {
        return color(random(40, 120), 100, 50);
    },
    initialCoordinates: function () {
        let position = {};
        let x = round(random(-0.2, 0.2),2);
        let y = round(random(-0.2, 0.2),2);
        let z = round(random(-0.2, 0.2),2);
        position["x"] = x;
        position["y"] = y;
        position["z"] = z;
        return position;
    },
};
const circular = {
    r: function () {
        return random(1, 50);
    },
    theta: function () {
        return random(0, TWO_PI);
    },
    dx: function (r, theta) {
        return this.r * cos(this.theta);
    },
    dy: function (r, theta) {
        return this.r * sin(this.theta);
    },
    dz: function () {
        return 0;
    },
    tracerColor: function () {
        return color(0, 100, 30);
    },
    particleColor: function () {
        return color(random(22, 66), 100, 49);
    },
};

let c1;
let c2;
let tracers = [];
let particles = [];
let attractor;
// let attractors = {}
let attractors = {
    // dequanLi:dequanLi,
    genesioTesi: genesioTesi,

    rayleighBenard: rayleighBenard,
    newtonLeipnik: newtonLeipnik,
    coullet: coullet,
    arneodo: arneodo,
    finance: finance,
    lorenz: lorenz,
    fourwing: fourwing,
    halvorsen: halvorsen,
    rabinovichFabrikant: rabinovichFabrikant,
    sprott: sprott,
    dadras: dadras,
    aizawa: aizawa,
    chen: chen,
    thomas: thomas,
    rossler: rossler,
    threeScroll: threeScroll,
    lorenz83: lorenz83,

    noseHoover: noseHoover,
    bouali: bouali,
};
// let f
// function preload(){
//     f = textFont('Georgia')
// }

function setup() {
    let hld = document.getElementById("holder");
    let pause = document.querySelector(".logo");
    let title = document.getElementById("attractor-name");
    let cnv = createCanvas(hld.offsetWidth, hld.offsetHeight, WEBGL);
    pause.addEventListener("click", () => {
        halt();
    });
    cnv.parent("holder");
    colorMode(HSL);
    const attractorNamesArray = Object.keys(attractors);
    const mainInfoContainer = document.querySelector(".navbar-nav");

    for (let i = 0; i < attractorNamesArray.length; i++) {
        const li = document.createElement("li");
        li.setAttribute("class", "nav-item");
        li.setAttribute("id", attractorNamesArray[i]);

        const a = document.createElement("a");
        a.setAttribute("href", "#");
        a.setAttribute("class", "nav-link");

        const span = document.createElement("span");
        span.setAttribute("class", "link-text");
        span.textContent = attractors[attractorNamesArray[i]].name;

        li.append(a);
        a.append(span);
        li.addEventListener("click", () => {
            changeAttractor(li.id);
        });
        mainInfoContainer.append(li);
    }

    //initial attractor
    // attractor = lorenz;
    //random selection at start
    attractor = attractors[random(attractorNamesArray)];
    title.textContent = attractor["name"];

    c1 = new Tracer(-2, -1, 3, attractor.tracerColor(), attractor.scl);
    c2 = new Tracer(1, -1, 1, attractor.tracerColor(), attractor.scl);
    c3 = new Tracer(-0, 1, -2, attractor.tracerColor(), attractor.scl);

    tracers.push(c1);
    tracers.push(c2);
    tracers.push(c3);

    for (let i = 0; i < 50; i++) {
        let p = new Particle(
            attractor.particleColor(),
            attractor.scl,
            attractor.initialCoordinates
        );
        particles.push(p);
    }
}
let angle = 0;

function halt() {
    //pause the whole drawing
    if (isLooping()) {
        noLoop();
    } else {
        loop();
    }
}

function windowResized() {
    let hld = document.getElementById("holder");
    // console.log(hld.offsetWidth, hld.offsetHeight);
    resizeCanvas(hld.offsetWidth, hld.offsetHeight);
}

function changeAttractor(name) {
    let title = document.getElementById("attractor-name");
    att = name;
    let titleName = attractors[att].name;
    title.textContent = titleName.charAt(0).toUpperCase() + titleName.slice(1);
    for (let p of particles) {
        let newParticleCoordinate = attractors[att].initialCoordinates();
        p.initialCoordinates = attractors[att].initialCoordinates;
        p.path = [];
        p.scl = attractors[att].scl;
        p.color = attractors[att].particleColor();
        p.x = newParticleCoordinate.x;
        p.y = newParticleCoordinate.y;
        p.z = newParticleCoordinate.z;
    }
    attractor = attractors[att];
}

function draw() {
    background("black");
    frameRate(30);
    orbitControl();

    stroke("red");
    line(0, 0, 0, 0, innerWidth / 2, 0); //y axis

    stroke("blue");
    line(0, 0, 0, 0, 0, innerWidth / 2); //z axis

    stroke("yellow");
    line(0, 0, 0, innerWidth / 2, 0, 0); //x axis

    stroke('purple')
    line(0,0,0,innerWidth / 2,innerWidth / 2,innerWidth / 2)

    // rotateY(angle)
    // rotate(angle+=0.01,[1,1,1])
    // angle+=0.01
    // // rotateX(angle)
    // rotateY(angle)

    // for (let t of tracers) {
    //     let dx = attractor.dx(t.x, t.y, t.z);
    //     let dy = attractor.dy(t.x, t.y, t.z);
    //     let dz = attractor.dz(t.x, t.y, t.z);

    //     let newX = t.x + dx;
    //     let newY = t.y + dy;
    //     let newZ = t.z + dz;
    //     t.show(newX, newY, newZ);
    // }

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
