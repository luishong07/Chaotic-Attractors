const alpha = "\u03B1";
const beta = "\u03B2";
const gamma = "\u03B3";
const delta = "\u03B4";
const epsilon = "\u03B5";
const zeta = "\u03B6";
const eta = "\u03B7";
const theta = "\u03B8";
const iota = "\u03B9";
const kappa = "\u03BA";
const lambda = "\u03BB";
const mu = "\u03BC";
const nu = "\u03BD";
const xi = "\u03BE";
const omicron = "\u03BF";
const pi = "\u03C0";
const rho = "\u03C1";
const sigma = "\u03C2";
const tau = "\u03C4";
const upsilon = "\u03C5";
const phi = "\u03C6";
const hi = "\u03C7";
const psi = "\u03C8";
const omega = "\u03C9";
const squared = "\u00B2";
const cubed = "\u00B3";

const lorenz = {
    name: "Lorenz",
    dxdt: "dx/dt = σ(y-x)",
    dydt: "dy/dt = x(ρ-z)-y",
    dzdt: "dz/dt = xy-βz",
    sigma: 10,
    rho: 28,
    beta: 8 / 3,
    parameters: {
        σ: "10",
        ρ: "28",
        β: "8/3",
    },
    scl: 8,
    dt: 0.01,
    pathLength: 75,
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
    dxdt: "dx/dt = αx + yz",
    dydt: "dy/dt = βx + δy - xz",
    dzdt: "dz/dt = -z - xy",
    α: 0.2,
    β: 0.01,
    δ: -0.4,
    parameters: {
        α: "0.2",
        β: "0.01",
        δ: "-0.4",
    },
    scl: 100,
    dt: 0.1,
    pathLength: 110,
    tracerColor: function () {
        return color(169, 100, 50);
    },
    dx: function (x, y, z) {
        return (this.α * x + y * z) * this.dt;
    },
    dy: function (x, y, z) {
        return (this.β * x + this.δ * y - x * z) * this.dt;
    },
    dz: function (x, y, z) {
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
    // rotateY(145)
    // rotateX(45)
    // rotate(angle-=0.1,[1,1,1])
    name: "Halvorsen",
    dxdt: "dx/dt = -αx - 4y - 4z -y" + "\u00B2",
    dydt: "dy/dt = -αy - 4z - 4x -z" + "\u00B2",
    dzdt: "dz/dt = -αz - 4x - 4y -x" + "\u00B2",
    // let dx = (-1*a*p.x - 4*p.y - 4*p.z -p.y**2)*dt
    // let dy = (-1*a*p.y - 4*p.z - 4*p.x -p.z**2)*dt
    // let dz = (-1*a*p.z - 4*p.x - 4*p.y -p.x**2)*dt
    a: 1.89,
    parameters: {
        α: "1.89",
    },
    scl: 40,
    dt: 0.01,
    pathLength: 100,
    tracerColor: function () {
        return color(230, 100, 76);
    },
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
    // rotateX(90)
    // rotate(angle-=0.3,[0,0,1])
    // let dx = (p.y * (p.z - 1 + p.x ** 2) + sigma * p.x) * dt;
    // let dy = (p.x * (3 * p.z + 1 - p.x ** 2) + sigma * p.y) * dt;
    // let dz = -2 * p.z * (alpha + p.x * p.y) * dt;
    name: "Rabinovich-Fabrikant",
    dxdt: "dx/dt = y(z - 1 + x" + "\u00B2" + ") + γx",
    dydt: "dy/dt = x(3z + 1 - x" + "\u00B2" + ") + γy",
    dzdt: "dz/dt = -2z( α + xy)",
    alpha: 0.14,
    // gamma: 0.065,
    gamma: 0.1,
    parameters: {
        α: "0.14",
        γ: "0.1",
    },
    scl: 100,
    dt: 0.015,
    pathLength: 120,
    tracerColor: function () {
        return color(325, 100, 50);
    },
    dx: function (x, y, z) {
        return (y * (z - 1 + x ** 2) + this.gamma * x) * this.dt;
    },
    dy: function (x, y, z) {
        return (x * (3 * z + 1 - x ** 2) + this.gamma * y) * this.dt;
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
    // -0.76 xOffSet
    // rotateX(90)
    // rotate(angle-=0.3,[0,0,1])
    name: "Sprott",
    dxdt: "dx/dt = y + αxy + xz",
    dydt: "dy/dt = 1 - βx" + squared + "+yz",
    dzdt: "dz/dt = x-x" + squared + "-y" + squared,
    // let dx = (p.y + a * p.x * p.y + p.x * p.z) * dt;
    // let dy = (1 - b * p.x ** 2 + p.y * p.z) * dt;
    // let dz = (p.x - p.x ** 2 - p.y ** 2) * dt;
    α: 2.07,
    β: 1.79,
    parameters: {
        α: "2.07",
        β: "1.79",
    },
    scl: 100,
    dt: 0.05,
    pathLength: 110,
    tracerColor: function () {
        return color(57, 100, 50);
    },
    dx: function (x, y, z) {
        return (y + this.α * x * y + x * z) * this.dt;
    },
    dy: function (x, y, z) {
        return (1 - this.β * (x * x) + y * z) * this.dt;
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
    //     rotate(angle-=0.3,[0,1,0])

    name: "Dadras",
    dxdt: "dx/dt = y - ρx + σyz",
    dydt: "dy/dt = τy - xz + z",
    dzdt: "dz/dt = ζxy - εz",
    // let dx =( p.y - (a*p.x) + (b*p.y*p.z))*dt
    // let dy = ((c*p.y) - (p.x*p.z) + p.z)*dt
    // let dz = ((d*p.x*p.y) - (e*p.z))*dt
    rho: 3,
    sigma: 2.7,
    tau: 1.7,
    zeta: 2,
    epsilon: 9,
    parameters: {
        ρ: "3",
        σ: "2.7",
        τ: "1.7",
        ζ: "2",
        ε: "9",
    },
    scl: 20,
    dt: 0.01,
    pathLength: 120,
    tracerColor: function () {
        return color(282, 100, 84);
    },
    dx: function (x, y, z) {
        return (y - this.rho * x + this.sigma * y * z) * this.dt;
    },
    dy: function (x, y, z) {
        return (this.tau * y - x * z + z) * this.dt;
    },
    dz: function (x, y, z) {
        return (this.zeta * x * y - this.epsilon * z) * this.dt;
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
    // rotateX(90)
    // rotate(angle+=0.3,[0,0,1])
    name: "Aizawa",
    dxdt: "dx/dt = (z-β)x - δy",
    dydt: "dy/dt = δx + (z-β)y",
    dzdt: "dz/dt = γ + αz - z" +cubed +"/3 -(x" +squared +"-y" +squared +")(1+εz)+ζzx" +cubed,
    // let dx = ((p.z-b)*p.x - d*p.y)*dt
    // let dy = ((d*p.x) + p.y*(p.z - b))*dt
    // let dz = (c + (a*p.z) -((p.z*p.z*p.z)/3) - (((p.x*p.x)+(p.y*p.y))*(1+(e*p.z))) +(f*p.z*p.x*p.x*p.x))*dt
    //note: consider making the starting values in the z axis only positives
    α: 0.95,
    β: 0.7,
    γ: 0.6,
    δ: 3.5,
    ε: 0.25,
    ζ: 0.1,
    parameters: {
        α: "0.95",
        β: "0.7",
        γ: "0.6",
        δ: "3.5",
        ε: "0.25",
        ζ: "0.1",
    },
    scl: 100,
    dt: 0.015,
    pathLength: 110,
    tracerColor: function () {
        return color(0, 96, 37);
    },
    dx: function (x, y, z) {
        return ((z - this.β) * x - this.δ * y) * this.dt;
    },
    dy: function (x, y, z) {
        return (this.δ * x + y * (z - this.β)) * this.dt;
    },
    dz: function (x, y, z) {
        return (
            (this.γ +
                this.α * z -
                (z * z * z) / 3 -
                (x * x + y * y) * (1 + this.ε * z) +
                this.ζ * z * x * x * x) *
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
        // let z = round(random(-1, 1), 2);

        // let z = round(random(-0.25,1),2)
        let z = 0;
        position["x"] = x;
        position["y"] = y;
        position["z"] = z;
        return position;
    },
};
const chen = {
    // rotateX(90)
    // rotate(angle+=0.3,[0,0,1])
    name: "Chen",
    dxdt: "dx/dt = αx-yz",
    dydt: "dy/dt = βy+xz",
    dzdt: "dz/dt = δz+xy/3",
    // let dx = (alpha * p.x - p.y * p.z) * dt;
    // let dy = (beta * p.y + p.x * p.z) * dt;
    // let dz = (delta * p.z + (p.x * p.y) / 3) * dt;
    // good starting coordenates 5, -5, -5
    α: 5,
    β: -10,
    δ: -0.38,
    parameters:{
        α: "5",
        β: "-10",
        δ: "-0.38",
    },
    scl: 20,
    dt: 0.008,
    pathLength: 120,
    dx: function (x, y, z) {
        return (this.α * x - y * z) * this.dt;
    },
    dy: function (x, y, z) {
        return (this.β * y + x * z) * this.dt;
    },
    dz: function (x, y, z) {
        return (this.δ * z + (x * y) / 3) * this.dt;
    },
    tracerColor: function () {
        return color(0, 100, 80);
    },
    particleColor: function () {
        return color(random(30, 100), 100, 50);
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
    dxdt: "dx/dt = sin(y) - βx",
    dydt: "dy/dt = sin(x) - βy",
    dzdt: "dz/dt = sin(z) - βz",
    // dt = 0.0001;
    // let dx = sin(p.y) - bee*p.x
    // let dy = sin(p.z) - bee*p.y
    // let dz = sin(p.x) - bee*p.z
    β: 0.208,
    parameters:{
        β: "0.208",
    },
    scl: 90,
    dt: 0.15,
    pathLength: 100,
    dx: function (x, y, z) {
        return (sin(y) - this.β * x) * this.dt;
    },
    dy: function (x, y, z) {
        return (sin(z) - this.β * y) * this.dt;
    },
    dz: function (x, y, z) {
        return (sin(x) - this.β * z) * this.dt;
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
    dxdt: "dx/dt = -(y+z)",
    dydt: "dy/dt = x+αy",
    dzdt: "dz/dt = β+z(x-ς)",
    // dt = 0.05;
    // let dx = (-p.y - p.z) * dt;
    // let dy = (p.x + a * p.y) * dt;
    // let dz = (b + p.z * (p.x - c)) * dt;
    // for initial condition with negative z, particle goes out of control sometimes
    α: 0.2,
    β: 0.2,
    ς: 5.7,
    parameters:{
        α: "0.2",
        β: "0.2",
        ς: "5.7",
    },
    scl: 15,
    dt: 0.04,
    pathLength: 100,
    dx: function (x, y, z) {
        return (-y - z) * this.dt;
    },
    dy: function (x, y, z) {
        return (x + this.α * y) * this.dt;
    },
    dz: function (x, y, z) {
        return (this.β + z * (x - this.ς)) * this.dt;
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
const threeScroll2 = {
    name: "3-Scroll Unified System 2",
    dxdt: "dx/dt = α(y - x) + δxz",
    dydt: "dy/dt = ςx - xz + ζy",
    dzdt: "dz/dt = βz + xy - εx" + squared,
    // let dx = (a * (p.y - p.x) + d * p.x * p.z) * dt;
    // let dy = (b * p.x - p.x * p.z + f * p.y) * dt;
    // let dz = (c * p.z + p.x * p.y - e * p.x ** 2) * dt;
    // alpha: 40,
    // sigma: 55,
    // beta: 1.833,
    // delta: 0.16,
    // epsilon: 0.65,
    // zeta: 20,
    α: 32.48,
    ς: 45.84,
    β: 1.18,
    δ: 0.13,
    ε: 0.57,
    ζ: 14.7,
    parameters:{
        α: "32.48",
        ς: "45.84",
        β: "1.18",
        δ: "0.13",
        ε: "0.57",
        ζ: "14.7",
    },
    scl: 1,
    dt: 0.0002,
    pathLength: 120,
    dx: function (x, y, z) {
        return (this.α * (y - x) + this.δ * x * z) * this.dt;
    },
    dy: function (x, y, z) {
        return (this.ς * x - x * z + this.ζ * y) * this.dt;
    },
    dz: function (x, y, z) {
        return (this.β * z + x * y - this.ε * x * x) * this.dt;
    },
    tracerColor: function () {
        return color(260, 100, 50);
    },
    particleColor: function () {
        return color(random(261, 291), 100, 50);
    },
    initialCoordinates: function () {
        let position = {};
        // let x = round(random(-100, 100),2);
        // let y = round(random(-100, 100),2);
        // let z = round(random(-20, 200),2);
        let x = round(random(-50, 50), 2);
        let y = round(random(-50, 50), 2);
        let z = round(random(-50, 200), 2);

        // let x = round(random(-80, 80),2);
        // let y = round(random(-80, 80),2);
        // let z = round(random(50, 200),2);
        position["x"] = x;
        position["y"] = y;
        position["z"] = z;
        return position;
    },
};
const threeScroll1 = {
    // rotateX(90)
    // rotate(angle-=0.3,[0,0,1])
    name: "3-Scroll Unified System 1",
    dxdt: "dx/dt = α(y -x) + δxz",
    dydt: "dy/dt = ςx - xz + ζy",
    dzdt: "dz/dt = βz + xy - εx" + squared,
    // let dx = (a * (p.y - p.x) + d * p.x * p.z) * dt;
    // let dy = (b * p.x - p.x * p.z + f * p.y) * dt;
    // let dz = (c * p.z + p.x * p.y - e * p.x ** 2) * dt;
    // alpha: 40,
    // sigma: 55,
    // beta: 1.833,
    // delta: 0.16,
    // epsilon: 0.65,
    // zeta: 20,
    α: 40,
    β: 0.833,
    δ: 0.5,
    ε: 0.65,
    ζ: 20,
    parameters:{
        α: "40",
        β: "0.833",
        δ: "0.5",
        ε: "0.65",
        ζ: "20",
    },
    scl: 3,
    dt: 0.0015,
    pathLength: 120,
    dx: function (x, y, z) {
        return (this.α * (y - x) + this.δ * x * z) * this.dt;
    },
    dy: function (x, y, z) {
        return (this.ζ * y - x * z) * this.dt;
    },
    dz: function (x, y, z) {
        return (this.β * z + x * y - this.ε * x * x) * this.dt;
    },
    tracerColor: function () {
        return color(260, 100, 50);
    },
    particleColor: function () {
        return color(random(261, 291), 100, 50);
    },
    initialCoordinates: function () {
        let position = {};
        let x = round(random(-7, 7), 2);
        let y = round(random(-7, 7), 2);
        let z = round(random(30, 50), 2);
        position["x"] = x;
        position["y"] = y;
        position["z"] = z;
        return position;
    },
};
const lorenz83 = {
    name: "Lorenz 83",
    dxdt: "dx/dt = -αx - y" + squared + " - z" + squared + " + αε",
    dydt: "dy/dt = -y + xy - βxz + ξ",
    dzdt: "dz/dt = -z + βxy + xz",
    // let dx = (-1 * a * p.x - p.y ** 2 - p.z ** 2 + a * f) * dt;
    // let dy = (-1 * p.y + p.x * p.y - b * p.x * p.z + g) * dt;
    // let dz = (-1 * p.z + b * p.x * p.y + p.x * p.z) * dt;
    α: 0.95,
    β: 7.91,
    ε: 4.83,
    ξ: 4.66,
    parameters: {
        α: "0.95",
        β: "7.91",
        ε: "4.83",
        ξ: "4.66",
    },
    scl: 50,
    dt: 0.01,
    pathLength: 80,
    dx: function (x, y, z) {
        return (-1 * this.α * x - y ** 2 - z ** 2 + this.α * this.ε) * this.dt;
    },
    dy: function (x, y, z) {
        return (-1 * y + x * y - this.β * x * z + this.ξ) * this.dt;
    },
    dz: function (x, y, z) {
        return (-1 * z + this.β * x * y + x * z) * this.dt;
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
    dxdt: "dx/dt = -αx + y+ 10yz",
    dydt: "dy/dt = -x - αy + 5xz",
    dzdt: "dz/dt = βz - 5xy",
    //dt value contigent on initial conditions
    //for higher dt values like 0.03, smaller values better for initial conditions
    α: 0.4,
    β: 0.175,
    parameters:{
        α: "0.4",
        β: "0.175",
    },
    scl: 250,
    dt: 0.04,
    pathLength: 100,
    dx: function (x, y, z) {
        return (-this.α * x + y + 10 * y * z) * this.dt;
    },
    dy: function (x, y, z) {
        return (-x - this.α * y + 5 * x * z) * this.dt;
    },
    dz: function (x, y, z) {
        return (this.β * z - 5 * x * y) * this.dt;
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
    dxdt: "dx/dt = y",
    dydt: "dy/dt = -x + yz",
    dzdt: "dz/dt = α - y" + squared,
    // dx = y
    // dy = -x+y*z
    // dz = a-y*y
    // a = 1.5
    α: 1.5,
    parameters:{
        α:"1.5"
    },
    scl: 50,
    dt: 0.02,
    pathLength: 150,
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
        return (this.α - y * y) * this.dt;
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
    dxdt: "dx/dt = x(4-y) + αz",
    dydt: "dy/dt = -y(1-x" + squared + ")",
    dzdt: "dz/dt = -x(1.5-ςz) - 0.05z",
    // dx = x*(4-y)+a*z
    // dy = -y*(1-x^2)
    // dz = -x (1.5 - s*z) - 0.05*z
    //a = 0.3
    //s = 1.0
    α: 0.3,
    ς: 1.0,
    parameters:{
        α: "0.3",
        ς: "1.0",
    },
    scl: 40,
    dt: 0.02,
    pathLength: 90,
    dx: function (x, y, z) {
        return (x * (4 - y) + this.α * z) * this.dt;
    },
    dy: function (x, y, z) {
        return -y * (1 - x * x) * this.dt;
    },
    dz: function (x, y, z) {
        return (-x * (1.5 - this.ς * z) - 0.05 * z) * this.dt;
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
    dxdt: "dx/dt = y",
    dydt: "dy/dt = z",
    dzdt: "dz/dt = αx + βy + ςz + δx" + cubed,
    α: 0.8,
    β: -1.1,
    ς: -0.45,
    δ: -1,
    parameters:{
        α: "0.8",
        β: "-1.1",
        ς: "-0.45",
        δ: "-1",
    },
    scl: 100,
    dt: 0.03,
    pathLength: 150,
    dx: function (x, y, z) {
        return y * this.dt;
    },
    dy: function (x, y, z) {
        return z * this.dt;
    },
    dz: function (x, y, z) {
        return (this.α * x + this.β * y +this.ς* z + this.δ* x * x * x) * this.dt;
    },
    tracerColor: function () {
        return color(169, 100, 50);
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
    dxdt: "dx/dt = z + xy + x(1/β - α)",
    dydt: "dy/dt = -βy - x" + squared,
    dzdt: "dz/dt = -x - ςz",
    //dx = ((1/b) - a)* x + z +x*y
    // dy = -b*y -X^2
    // dz = -x - c *z
    // a = 0.001
    // b= 0.2
    // c =1.1
    α: 0.001,
    β: 0.2,
    ς: 1.1,
    parameters:{
        α: "0.001",
        β: "0.2",
        ς: "1.1",
    },
    scl: 50,
    dt: 0.05,
    pathLength: 100,
    dx: function (x, y, z) {
        return ((1 / this.β - this.α) * x + z + x * y) * this.dt;
    },
    dy: function (x, y, z) {
        return (-this.β * y - x * x) * this.dt;
    },
    dz: function (x, y, z) {
        return (-x - this.ς * z) * this.dt;
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
    dxdt: "dx/dt = y",
    dydt: "dy/dt = z",
    dzdt: "dz/dt = -αx - βy - z +δx" + cubed,
    α: -5.5,
    β: 3.5,
    δ: -1,
    parameters:{
        α: "-5.5",
        β: "3.5",
        δ: "-1",
    },
    scl: 30,
    dt: 0.01,
    pathLength: 125,
    dx: function (x, y, z) {
        return y * this.dt;
    },
    dy: function (x, y, z) {
        return z * this.dt;
    },
    dz: function (x, y, z) {
        return (-this.α * x - this.β * y - z + this.δ * x * x * x) * this.dt;
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
    dxdt: "dx/dt = -αx + αy",
    dydt: "dy/dt = τx - y - xz",
    dzdt: "dz/dt = xy - βz",
    α: 9.0,
    β: 12,
    τ: 0.5,
    parameters:{
        α: "9.0",
        β: "12",
        τ: "0.5",
    },
    scl: 10,
    dt: 0.02,
    pathLength: 80,
    dx: function (x, y, z) {
        return (-this.α * x + this.α * y) * this.dt;
    },
    dy: function (x, y, z) {
        return (this.β * x - y - x * z) * this.dt;
    },
    dz: function (x, y, z) {
        return (x * y - this.τ * z) * this.dt;
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
    dxdt: "",
    dydt: "",
    dzdt: "",
    alpha: 40,
    beta: 1.833,
    delta: 0.16,
    epsilon: 0.65,
    rho: 55,
    zeta: 20,
    scl: 0.75,
    dt: 0.0005,
    pathLength: 100,
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
    name: "Genesio Tesi",
    dxdt: "dx/dt = y",
    dydt: "dy/dt = z",
    dzdt: "dz/dt = -x - βy -αz +x" + squared,
    α: -1.1,
    β: -0.44,
    parameters: {
        α: "-1.1",
        β: "-0.44",
    },
    scl: 200,
    dt: 0.018,
    pathLength: 100,
    dx: function (x, y, z) {
        return y * this.dt;
    },
    dy: function (x, y, z) {
        return z * this.dt;
    },
    dz: function (x, y, z) {
        return (-x + this.a * y + this.b * z + x * x) * this.dt;
    },
    tracerColor: () => {
        return color(188, 50, 50);
    },
    particleColor: function () {
        return color(random(40, 120), 100, 50);
    },
    initialCoordinates: function () {
        let position = {};
        let x = round(random(-0.2, 0.2), 2);
        let y = round(random(-0.2, 0.2), 2);
        let z = round(random(-0.2, 0.2), 2);
        position["x"] = x;
        position["y"] = y;
        position["z"] = z;
        return position;
    },
};
const burkeShaw = {
    name: "Burke-Shaw",
    dxdt: "dx/dt = -η(x+y)",
    dydt: "dy/dt = -y-ηxz",
    dzdt: "dz/dt = ηxy + μ",
    η: 10, //eta
    μ: 4.272, //mu
    parameters:{
        η: "10", //eta
        μ: "4.272", //mu
    },
    dt: 0.01,
    scl: 50,
    pathLength: 100,
    dx: function (x, y, z) {
        return -this.η * (x + y) * this.dt;
    },
    dy: function (x, y, z) {
        return (-y - this.η * x * z) * this.dt;
    },
    dz: function (x, y, z) {
        return (this.η * x * y + this.μ) * this.dt;
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
const chua1 = {
    name: "Chua 1",
    dxdt: "dx/dt = α(y - x)",
    dydt: "dy/dt = -εx -xz + λy",
    dzdt: "dz/dt = xy - μz",
    α: 40,
    ε: 12,
    λ: 28,
    μ: 3,
    parameters:{
        α: "40",
        ε: "12",
        λ: "28",
        μ: "3",
    },
    dt: 0.005,
    scl: 5,
    pathLength: 80,
    dx: function (x, y, z) {
        return this.α * (y - x) * this.dt;
    },
    dy: function (x, y, z) {
        return (-this.ε * x - x * z + this.λ * y) * this.dt;
    },
    dz: function (x, y, z) {
        return (x * y - this.μ * z) * this.dt;
    },
    tracerColor: function () {
        return color(230, 100, 76);
    },
    particleColor: function () {
        return color(random(1, 50), 100, 50);
    },
    initialCoordinates: function () {
        let position = {};
        let x = round(random(-5, 5), 2);
        let y = round(random(-5, 5), 2);
        let z = round(random(-5, 5), 2);
        position["x"] = x;
        position["y"] = y;
        position["z"] = z;
        return position;
    },
};
const hadley = {
    name: "Hadley",
    dxdt: "dx/dt = -y" + squared + " - z" + squared + " - αx + αζ",
    dydt: "dy/dt = -xy - βxz -y + δ",
    dzdt: "dz/dt = βxy + xz - z",
    α: 0.2,
    β: 4,
    ζ: 8,
    δ: 1,
    parameters:{
        α: "0.2",
        β: "4",
        ζ: "8",
        δ: "1",
    },
    pathLength:100,
    dt: 0.02,
    scl: 100,
    dx: function (x, y, z) {
        return (-(y * y) - z * z - this.α * x + this.α * this.ζ) * this.dt;
    },
    dy: function (x, y, z) {
        return (x * y - this.β * z * x - y + this.δ) * this.dt;
    },
    dz: function (x, y, z) {
        return (this.β * x * y + x * z - z) * this.dt;
    },
    tracerColor: function () {
        return color(230, 100, 76);
    },
    particleColor: function () {
        return color(random(100, 200), 100, 50);
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
const lorenzMod1 = {
    name: "Lorenz Mod 1",
    dxdt: "dx/dt = -αx + y" + squared + " - z" + squared + " + αζ",
    dydt: "dy/dt = x(y - βz) + δ",
    dzdt: "dz/dt = z + x(βy + z)",
    α: 0.1,
    β: 4,
    ζ: 14,
    δ: 0.08,
    parameters:{
        α: "0.1",
        β: "4",
        ζ: "14",
        δ: "0.08",
    },
    dt: 0.005,
    scl: 10,
    pathLength: 80,
    dx: function (x, y, z) {
        return (-this.α* x + y * y - z * z + this.α* this.ζ) * this.dt;
    },
    dy: function (x, y, z) {
        return (x * (y - this.β * z) + this.δ) * this.dt;
    },
    dz: function (x, y, z) {
        return (z + x * (this.β * y + z)) * this.dt;
    },
    tracerColor: function () {
        return color(230, 100, 76);
    },
    particleColor: function () {
        return color(random(150, 220), 100, 50);
    },
    initialCoordinates: function () {
        let position = {};
        let x = round(random(-5, 5), 2);
        let y = round(random(-5, 5), 2);
        let z = round(random(-5, 5), 2);
        position["x"] = x;
        position["y"] = y;
        position["z"] = z;
        return position;
    },
};
const lorenzMod2 = {
    name: "Lorenz Mod 2",
    dxdt: "dx/dt = -αx + y" + squared + " - z" + squared + " + αζ",
    dydt: "dy/dt = α(y - βz) + δ",
    dzdt: "dz/dt = -z + x(βy + z)",
    α: 0.9,
    β: 5,
    ζ: 9.9,
    δ: 1,
    parameters:{
        α: "0.9",
        β: "5",
        ζ: "9.9",
        δ: "1",
    },
    dt: 0.004,
    scl: 10,
    pathLength: 80,
    dx: function (x, y, z) {
        return (-this.α * x + y * y - z * z + this.α * this.ζ) * this.dt;
    },
    dy: function (x, y, z) {
        return (x * (y - this.β * z) + this.δ) * this.dt;
    },
    dz: function (x, y, z) {
        return (-z + x * (this.β * y + z)) * this.dt;
    },
    tracerColor: function () {
        return color(230, 100, 76);
    },
    particleColor: function () {
        return color(random(150, 220), 100, 50);
    },
    initialCoordinates: function () {
        let position = {};
        let x = round(random(-5, 5), 2);
        let y = round(random(-5, 5), 2);
        let z = round(random(-5, 5), 2);
        position["x"] = x;
        position["y"] = y;
        position["z"] = z;
        return position;
    },
};
const anishchenkoAstakhov = {
    name: "Anishchenko Astakhov",
    dxdt: "dx/dt = ",
    dydt: "dy/dt = ",
    dzdt: "dz/dt = ",
    nu: 1.2,
    eta: 0.5,
    scl: 20,
    dt: 0.02,
    pathLength: 120,
    dx: function (x, y, z) {
        return (this.nu * x + y - x * z) * this.dt;
    },
    dy: function (x, y, z) {
        return -x * this.dt;
    },
    dz: function (x, y, z) {
        let newX;
        if (x > 0) {
            newX = 1;
        } else {
            newX = 0;
        }
        return (-this.nu * z + this.nu * newX * x * x) * this.dt;
    },
    tracerColor: function () {
        return color(325, 100, 50);
    },
    particleColor: function () {
        return color(random(170, 205), 100, 50);
    },
    initialCoordinates: function () {
        let position = {};
        let x = round(random(-5, 0), 2);
        let y = round(random(0, 5), 2);
        let z = round(random(0, 0), 2);
        position["x"] = x;
        position["y"] = y;
        position["z"] = z;
        return position;
    },
};
const rucklidge = {
    name: "Rucklidge",
    dxdt: "dx/dt = -κx + αy - yz",
    dydt: "dy/dt = x",
    dzdt: "dz/dt = -z + y" + squared,
    κ: 2,
    α: 6.7,
    parameters:{
        κ: "2",
        α: "6.7",
    },
    scl: 20,
    dt: 0.03,
    pathLength: 100,
    dx: function (x, y, z) {
        return (-this.κ * x + this.α * y - y * z) * this.dt;
    },
    dy: function (x, y, z) {
        return x * this.dt;
    },
    dz: function (x, y, z) {
        return (-z + y * y) * this.dt;
    },
    tracerColor: function () {
        return color(325, 100, 50);
    },
    particleColor: function () {
        return color(random(200, 256), 100, 50);
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
const qiChen = {
    name: "Qi-Chen",
    dxdt: "dx/dt = α(y - x) + yz",
    dydt: "dy/dt = ςx + y - xz",
    dzdt: "dz/dt = xy - βz",
    α: 38,
    β: 8 / 3,
    ς: 80,
    parameters:{
        α: "38",
        β: "8 / 3",
        ς: "80",
    },
    scl: 2,
    dt: 0.001,
    pathLength: 100,
    dx: function (x, y, z) {
        return (this.α * (y - x) + y * z) * this.dt;
    },
    dy: function (x, y, z) {
        return (this.ς * x + y - x * z) * this.dt;
    },
    dz: function (x, y, z) {
        return (x * y - this.β * z) * this.dt;
    },
    tracerColor: function () {
        return color(325, 100, 50);
    },
    particleColor: function () {
        return color(random(200, 256), 100, 50);
    },
    initialCoordinates: function () {
        let position = {};
        let x = round(random(-20, 20), 2);
        let y = round(random(-20, 20), 2);
        let z = round(random(-20, 20), 2);
        position["x"] = x;
        position["y"] = y;
        position["z"] = z;
        return position;
    },
};
const wangSun = {
    name: "Wang-Sun",
    dxdt: "",
    dydt: "",
    dzdt: "",
    alpha: 0.2,
    beta: -0.01,
    sigma: 1,
    delta: -0.4,
    epsilon: -1,
    zeta: -1,
    scl: 100,
    dt: 0.08,
    pathLength: 100,
    dx: function (x, y, z) {
        return (x * this.alpha + this.sigma * y * z) * this.dt;
    },
    dy: function (x, y, z) {
        return (this.beta * x + this.delta * y - x * z) * this.dt;
    },
    dz: function (x, y, z) {
        return (this.epsilon * z + this.zeta * x * y) * this.dt;
    },
    tracerColor: function () {
        return color(325, 100, 50);
    },
    particleColor: function () {
        return color(random(200, 256), 100, 50);
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
//sakarya similar to newton but it only creates one attractor instead of two like the newton
const sakarya = {
    name: "Sakarya",
    dxdt: "dx/dt = -x + y +yz",
    dydt: "dy/dt = -x - y + αxz",
    dzdt: "dz/dt = z -βxy",
    alpha: 0.4,
    beta: 0.3,
    scl: 10,
    dt: 0.005,
    pathLength: 100,
    dx: function (x, y, z) {
        return (-x + y + y * z) * this.dt;
    },
    dy: function (x, y, z) {
        return (-x - y + this.alpha * x * z) * this.dt;
    },
    dz: function (x, y, z) {
        return (z - this.beta * x * y) * this.dt;
    },
    tracerColor: function () {
        return color(325, 100, 50);
    },
    particleColor: function () {
        return color(random(200, 256), 100, 50);
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
const yuWang = {
    name: "Yu-Wang",
    dxdt: "",
    dydt: "",
    dzdt: "",
    alpha: 10,
    beta: 40,
    sigma: 2,
    delta: 2.5,
    scl: 20,
    dt: 0.0004,
    pathLength: 100,
    dx: function (x, y, z) {
        return 10 * (y - x) * this.dt;
    },
    dy: function (x, y, z) {
        return (40 * x - 2 * x * z) * this.dt;
    },
    dz: function (x, y, z) {
        return (2.71828 ** (x * y) - 2.5 * z) * this.dt;
    },
    tracerColor: function () {
        return color(230, 100, 76);
    },
    particleColor: function () {
        return color(random(160, 205), 100, 50);
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
const luChen = {
    name: "Lu-Chen",
    dxdt: "dx/dt = -βx + zy",
    dydt: "dy/dt = -αy + zx",
    dzdt: "dz/dt = δz - yx + ς",
    α: 10,
    β: 4,
    ς: 18.1,
    δ: 20 / 7,
    parameters:{
        α: "10",
        β: "4",
        ς: "18.1",
        δ: "20/7",
    },
    scl: 7,
    dt: 0.0035,
    pathLength: 100,
    dx: function (x, y, z) {
        return (-this.β * x + z * y) * this.dt;
        // return (this.δ*x - y*z  + this.ς)*this.dt;
    },
    dy: function (x, y, z) {
        return (-this.α * y + z * x) * this.dt;
    },
    dz: function (x, y, z) {
        // return (-this.beta*z  +x*y)*this.dt;
        return (this.δ * z - y * x + this.ς) * this.dt;
    },
    tracerColor: function () {
        return color(230, 100, 76);
    },
    particleColor: function () {
        return color(random(160, 205), 100, 50);
    },
    initialCoordinates: function () {
        let position = {};
        let x = round(random(-3, 3), 2);
        let y = round(random(-3, 3), 2);
        let z = round(random(-3, 3), 2);
        position["x"] = x;
        position["y"] = y;
        position["z"] = z;
        return position;
    },
};
const chua2 = {
    name: "Chua 2",
    dxdt: "dx/dt = α(y - x - δ(|x + 1|-|x - 1|))",
    dydt: "dy/dt = β(x - y + z)",
    dzdt: "dz/dt = -ςy",
    α: 15.6,
    β: 1,
    ς: 25.58,
    δ: -1,
    parameters:{
        α: "15.6",
        β: "1",
        ς: "25.58",
        δ: "-1",
    },
    dt: 0.01,
    scl: 70,
    pathLength: 100,
    dx: function (x, y, z) {
        return (
            this.α *
            (y - x - this.δ * (Math.abs(x + 1) - Math.abs(x - 1))) *
            this.dt
        );
    },
    dy: function (x, y, z) {
        return this.β * (x - y + z) * this.dt;
    },
    dz: function (x, y, z) {
        return -this.ς * y * this.dt;
    },
    tracerColor: function () {
        return color(230, 100, 76);
    },
    particleColor: function () {
        return color(random(1, 50), 100, 50);
    },
    initialCoordinates: function () {
        let position = {};
        let x = round(random(-0.5, 0.5), 2);
        let y = round(random(-0.5, 0.5), 2);
        let z = round(random(-0.5, 0.5), 2);
        position["x"] = x;
        position["y"] = y;
        position["z"] = z;
        return position;
    },
};
let c1;
let c2;
let tracers = [];
let particles = [];
let attractor;
// let attractors = {}
//wang sun is idential to fourwing
//yuwang exponential out of control
//hadley idential to lorenz83
let attractors = {
    // dequanLi:dequanLi,

    // wangSun:wangSun,
    // yuWang:yuWang,
    threeScroll1: threeScroll1,

    chua2: chua2,

    luChen: luChen,
    sakarya: sakarya,

    qiChen: qiChen,
    rucklidge: rucklidge,

    anishchenkoAstakhov: anishchenkoAstakhov,

    lorenzMod2: lorenzMod2,
    lorenzMod1: lorenzMod1,

    hadley: hadley,

    genesioTesi: genesioTesi,

    chua1: chua1,
    burkeShaw: burkeShaw,
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
    threeScroll2: threeScroll2,
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
    let dx = document.getElementById("dx");
    let dy = document.getElementById("dy");
    let dz = document.getElementById("dz");
    let params = document.querySelector(".para-list");
    let cnv = createCanvas(hld.offsetWidth, hld.offsetHeight, WEBGL);
    pause.addEventListener("click", () => {
        halt();
    });
    cnv.parent("holder");
    colorMode(HSL);
    const attractorNamesArray = Object.keys(attractors);
    const mainInfoContainer = document.querySelector(".navbar-nav");

    for (let i = 0; i < attractorNamesArray.length; i++) {
        // this is for the sidebar
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
    // attractor = attractors[random(attractorNamesArray)];
    attractor = lorenz
    title.textContent = attractor["name"];
    // attractor = lorenz;
    // title.textContent = attractor.name;
    dx.textContent += attractor.dxdt;
    dy.textContent += attractor.dydt;
    dz.textContent += attractor.dzdt;

    for (const key in attractor.parameters) {
        const li = document.createElement("li");
        li.textContent = `${key} = ${attractor.parameters[key]}`;
        params.append(li);
    }

    //random selection at start
    // attractor = attractors[random(attractorNamesArray)];
    // title.textContent = attractor["name"];

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
            attractor.initialCoordinates,
            attractor.pathLength
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
    att = name;
    let title = document.getElementById("attractor-name");
    let dx = document.getElementById("dx");
    let dy = document.getElementById("dy");
    let dz = document.getElementById("dz");
    let params = document.querySelector(".para-list");
    while(params.hasChildNodes()){
        params.removeChild(params.firstChild)
    }
    // console.log(attractors[att].parameters)
    for (const key in attractors[att].parameters) {
        const li = document.createElement("li");
        li.textContent = `${key} = ${attractors[att].parameters[key]}`;
        params.append(li);
    }
    let titleName = attractors[att].name;
    dx.textContent = attractors[att].dxdt;
    dy.textContent = attractors[att].dydt;
    dz.textContent = attractors[att].dzdt;

    title.textContent = titleName.charAt(0).toUpperCase() + titleName.slice(1);
    for (let p of particles) {
        let newParticleCoordinate = attractors[att].initialCoordinates();
        p.initialCoordinates = attractors[att].initialCoordinates;
        p.path = [];
        p.scl = attractors[att].scl;
        p.pathLength = attractors[att].pathLength;
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

    angleMode(DEGREES)

    stroke("red");
    line(0, 0, 0, 0, innerWidth / 2, 0); //y axis
    line(0, 0, 0, 0, -innerWidth / 2, 0); //y axis


    stroke("blue");
    line(0, 0, 0, 0, 0, innerWidth / 2); //z axis
    line(0, 0, 0, 0, 0, -innerWidth / 2); //z axis

    stroke("yellow");
    line(0, 0, 0, innerWidth / 2, 0, 0); //x axis
    line(0, 0, 0, -innerWidth / 2, 0, 0); //x axis

    stroke("purple");
    // line(0, 0, 0, 0, -innerWidth / 2, innerWidth / 2);
    line(0, 0, 0, 
    1*innerWidth / 2, 1*innerWidth / 2, 1*innerWidth / 2);
    
    stroke("magenta");
    line(0, 0, 0, 
    -1*innerWidth / 2, -1*innerWidth / 2, -1*innerWidth / 2);

    // rotateY(-135)
    // rotateX(90)
    // rotate(angle+=0.3,[0,0,1])
    // stroke("green");
    // line(0, 0, 0, 
    //     1*innerWidth / 2, 1*innerWidth / 2, 1*innerWidth / 2);
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
    console.log(particles[0].y,particles[0].x)
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
