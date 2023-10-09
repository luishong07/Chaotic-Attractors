const squared = "\u00B2";
const cubed = "\u00B3";

const lorenz = {
    name: "Lorenz",
    dxdt: "dx/dt = σ(y-x)",
    dydt: "dy/dt = x(ρ-z)-y",
    dzdt: "dz/dt = xy-βz",
    σ: 10,
    ρ: 28,
    β: 2.66,
    scl: 8,
    parameters: {
        σ: "10",
        ρ: "28",
        β: "2.66",
    },
    offSet: {
        x: 0,
        y: 0,
        z: -27*8,
    },
    motion: {
        vel: 0.01,
        axis: [0, 1, 0],
    },
    tilt: {
        x: 0,
        y: 0,
        z: 0,
        otherTilt: 0,
        otherAxis: [0, 1, 0],
    },
    dt: 0.01,
    pathLength: 75,
    dx: function (x, y) {
        return this.σ * (y - x) * this.dt;
    },
    dy: function (x, y, z) {
        return (-1 * x * z + this.ρ * x - y) * this.dt;
    },
    dz: function (x, y, z) {
        return (x * y - this.β * z) * this.dt;
    },
    tracerColor: () => {
        return color(188, 50, 50);
    },
    highHue: 120,
    lowHue: 60,
    particleColor: function () {
        return color(random(this.lowHue, this.highHue), 100, 50);
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
    offSet: {
        x: 0,
        y: 0,
        z: 0,
    },
    motion: {
        vel: 0.01,
        axis: [1, 0, 0],
    },
    tilt: {
        x: 0,
        y: 0,
        z: Math.PI / 2,
        otherTilt: 0,
        otherAxis: [0, 1, 0],
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
    highHue: 57,
    lowHue: 0,
    particleColor: function () {
        return color(random(this.lowHue, this.highHue), 100, 50);
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
    α: 1.89,
    parameters: {
        α: "1.89",
    },
    offSet: {
        x: 0,
        y: 0,
        z: 0,
    },
    motion: {
        vel: -0.01,
        axis: [1, 1, 1],
    },
    tilt: {
        x: 0,
        y: (Math.PI * 3) / 4,
        z: 0,
        otherTilt: Math.PI / 4,
        otherAxis: [1, 0, -1],
    },
    scl: 25,
    dt: 0.01,
    pathLength: 100,
    tracerColor: function () {
        return color(230, 100, 76);
    },
    dx: function (x, y, z) {
        return (-1 * this.α * x - 4 * y - 4 * z - y ** 2) * this.dt;
    },
    dy: function (x, y, z) {
        return (-1 * this.α * y - 4 * z - 4 * x - z ** 2) * this.dt;
    },
    dz: function (x, y, z) {
        return (-1 * this.α * z - 4 * x - 4 * y - x ** 2) * this.dt;
    },
    highHue: 205,
    lowHue: 160,
    particleColor: function () {
        return color(random(this.lowHue, this.highHue), 100, 50);
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
    α: 0.14,
    // gamma: 0.065,
    γ: 0.1,
    parameters: {
        α: "0.14",
        γ: "0.1",
    },
    offSet: {
        x: 0,
        y: 0,
        z: 0,
    },
    motion: {
        vel: -0.01,
        axis: [0, 0, 1],
    },
    tilt: {
        x: Math.PI / 2,
        y: 0,
        z: 0,
        otherTilt: 0,
        otherAxis: [0, 1, 0],
    },
    scl: 100,
    dt: 0.015,
    pathLength: 120,
    tracerColor: function () {
        return color(325, 100, 50);
    },
    dx: function (x, y, z) {
        return (y * (z - 1 + x ** 2) + this.γ * x) * this.dt;
    },
    dy: function (x, y, z) {
        return (x * (3 * z + 1 - x ** 2) + this.γ * y) * this.dt;
    },
    dz: function (x, y, z) {
        return -2 * z * (this.α + x * y) * this.dt;
    },
    highHue: 205,
    lowHue: 170,
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
    offSet: {
        x: -0.76,
        y: 0,
        z: 0,
    },
    motion: {
        vel: -0.01,
        axis: [0, 0, 1],
    },
    tilt: {
        x: Math.PI / 2,
        y: 0,
        z: 0,
        otherTilt: 0,
        otherAxis: [1, 0, 0],
    },
    scl: 100,
    dt: 0.05,
    pathLength: 135,
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
    highHue: 80,
    lowHue: 0,
    particleColor: function () {
        return color(random(this.lowHue, this.highHue), 100, 50);
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
    ρ: 3,
    σ: 2.7,
    τ: 1.7,
    ζ: 2,
    ε: 9,
    parameters: {
        ρ: "3",
        σ: "2.7",
        τ: "1.7",
        ζ: "2",
        ε: "9",
    },
    offSet: {
        x: 0,
        y: 0,
        z: 0,
    },
    motion: {
        vel: -0.01,
        axis: [1, 1, 1],
    },
    tilt: {
        x: 0,
        y: 0,
        z: 0,
        otherTilt: 0,
        otherAxis: [0, 1, 0],
    },
    scl: 20,
    dt: 0.01,
    pathLength: 120,
    tracerColor: function () {
        return color(282, 100, 84);
    },
    dx: function (x, y, z) {
        return (y - this.ρ * x + this.σ * y * z) * this.dt;
    },
    dy: function (x, y, z) {
        return (this.τ * y - x * z + z) * this.dt;
    },
    dz: function (x, y, z) {
        return (this.ζ * x * y - this.ε * z) * this.dt;
    },
    highHue: 120,
    lowHue: 0,
    particleColor: function () {
        return color(random(this.lowHue, this.highHue), 100, 50);
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
    dzdt:
        "dz/dt = γ + αz - z" +
        cubed +
        "/3 -(x" +
        squared +
        "-y" +
        squared +
        ")(1+εz)+ζzx" +
        cubed,
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
    offSet: {
        x: 0,
        y: 0,
        z: 0,
    },
    motion: {
        vel: -0.01,
        axis: [0, 0, 1],
    },
    tilt: {
        x: Math.PI / 2,
        y: 0,
        z: 0,
        otherTilt: 0,
        otherAxis: [0, 1, 0],
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
    highHue: 90,
    lowHue: 0,
    particleColor: function () {
        return color(random(this.lowHue, this.highHue), 100, 50);
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
    parameters: {
        α: "5",
        β: "-10",
        δ: "-0.38",
    },
    offSet: {
        x: 0,
        y: 0,
        z: 0,
    },
    motion: {
        vel: 0.01,
        axis: [0, 0, 1],
    },
    tilt: {
        x: Math.PI / 2,
        y: 0,
        z: 0,
        otherTilt: 0,
        otherAxis: [0, 1, 0],
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
    highHue: 180,
    lowHue: 60,
    particleColor: function () {
        return color(random(this.lowHue, this.highHue), 100, 50);
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
    // rotate(angle+=0.01,[1,1,1])
    name: "Thomas",
    dxdt: "dx/dt = sin(y) - βx",
    dydt: "dy/dt = sin(x) - βy",
    dzdt: "dz/dt = sin(z) - βz",
    // dt = 0.0001;
    // let dx = sin(p.y) - bee*p.x
    // let dy = sin(p.z) - bee*p.y
    // let dz = sin(p.x) - bee*p.z
    β: 0.208,
    parameters: {
        β: "0.208",
    },
    offSet: {
        x: 0,
        y: 0,
        z: 0,
    },
    motion: {
        vel: -0.01,
        axis: [1, 1, 1],
    },
    tilt: {
        x: 0,
        y: 0,
        z: 0,
        otherTilt: 0,
        otherAxis: [0, 1, 0],
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
    highHue: 50,
    lowHue: 0,
    particleColor: function () {
        return color(random(this.lowHue, this.highHue), 100, 50);
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
    // rotateX(PI/2)
    // rotate(angle+=0.01,[0,0,1])
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
    parameters: {
        α: "0.2",
        β: "0.2",
        ς: "5.7",
    },
    offSet: {
        x: 0,
        y: 0,
        z: 0,
    },
    motion: {
        vel: 0.01,
        axis: [0, 0, 1],
    },
    tilt: {
        x: Math.PI / 2,
        y: 0,
        z: 0,
        otherTilt: 0,
        otherAxis: [0, 1, 0],
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
    highHue: 200,
    lowHue: 75,
    particleColor: function () {
        return color(random(this.lowHue, this.highHue), 100, 50);
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
    // rotateX(PI/2)
    // rotate(angle+=0.01,[0,0,1])
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
    parameters: {
        α: "32.48",
        ς: "45.84",
        β: "1.18",
        δ: "0.13",
        ε: "0.57",
        ζ: "14.7",
    },
    offSet: {
        x: 0,
        y: 0,
        z: -40,
    },
    motion: {
        vel: 0.01,
        axis: [0, 0, 1],
    },
    tilt: {
        x: Math.PI / 2,
        y: 0,
        z: 0,
        otherTilt: 0,
        otherAxis: [0, 1, 0],
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
    highHue: 300,
    lowHue: 240,
    particleColor: function () {
        return color(random(this.lowHue, this.highHue), 100, 50);
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
    parameters: {
        α: "40",
        β: "0.833",
        δ: "0.5",
        ε: "0.65",
        ζ: "20",
    },
    offSet: {
        x: 0,
        y: 0,
        z: 0,
    },
    motion: {
        vel: -0.01,
        axis: [0, 0, 1],
    },
    tilt: {
        x: Math.PI / 2,
        y: 0,
        z: 0,
        otherTilt: 0,
        otherAxis: [0, 1, 0],
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
    highHue: 360,
    lowHue: 250,
    particleColor: function () {
        return color(random(this.lowHue, this.highHue), 100, 50);
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
    // rotateZ(-PI/2)
    // rotate(angle+=0.01,[1,0,0])
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
    offSet: {
        x: 0,
        y: 0,
        z: 0,
    },
    motion: {
        vel: -0.01,
        axis: [1, 0, 0],
    },
    tilt: {
        x: 0,
        y: 0,
        z: -Math.PI / 2,
        otherTilt: 0,
        otherAxis: [0, 1, 0],
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
    highHue: 60,
    lowHue: 30,
    particleColor: function () {
        return color(random(this.lowHue, this.highHue), 100, 49);
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
    // rotateY(-PI/2)
    // rotate(angle+=0.01,[0,0,1])
    name: "Newton Leipnik",
    dxdt: "dx/dt = -αx + y+ 10yz",
    dydt: "dy/dt = -x - αy + 5xz",
    dzdt: "dz/dt = βz - 5xy",
    //dt value contigent on initial conditions
    //for higher dt values like 0.03, smaller values better for initial conditions
    α: 0.4,
    β: 0.175,
    parameters: {
        α: "0.4",
        β: "0.175",
    },
    offSet: {
        x: 0,
        y: 0,
        z: 0,
    },
    motion: {
        vel: -0.01,
        axis: [0, 0, 1],
    },
    tilt: {
        x: 0,
        y: -Math.PI / 2,
        z: 0,
        otherTilt: 0,
        otherAxis: [0, 1, 0],
    },
    scl: 400,
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
    highHue: 60,
    lowHue: 30,
    particleColor: function () {
        return color(random(this.lowHue, this.highHue), 100, 49);
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
    // rotateX(-PI/2)
    // rotate(angle+=0.01,[0,0,-1])
    name: "Nose-Hoover",
    dxdt: "dx/dt = y",
    dydt: "dy/dt = -x + yz",
    dzdt: "dz/dt = α - y" + squared,
    // dx = y
    // dy = -x+y*z
    // dz = a-y*y
    // a = 1.5
    α: 1.5,
    parameters: {
        α: "1.5",
    },
    offSet: {
        x: 0,
        y: 0,
        z: 0,
    },
    motion: {
        vel: -0.01,
        axis: [0, 0, -1],
    },
    tilt: {
        x: -Math.PI / 2,
        y: 0,
        z: 0,
        otherTilt: 0,
        otherAxis: [0, 1, 0],
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
    highHue: 240,
    lowHue: 120,
    particleColor: function () {
        return color(random(this.lowHue, this.highHue), 100, 50);
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
    // -125 yOffSet
    // rotateZ(PI)
    // rotateX(PI/2)
    // rotate(angle+=0.01,[0,0,-1])
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
    parameters: {
        α: "0.3",
        ς: "1.0",
    },
    offSet: {
        x: 0,
        y: -5,
        z: 0,
    },
    motion: {
        vel: -0.01,
        axis: [0, 0, 1],
    },
    tilt: {
        x: -Math.PI / 2,
        y: 0,
        z: Math.PI,
        otherTilt: 0,
        otherAxis: [0, 1, 0],
    },
    scl: 35,
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
    highHue: 60,
    lowHue: 0,
    particleColor: function () {
        return color(random(this.lowHue, this.highHue), 100, 50);
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
    // rotateZ(-PI/2)
    // rotate(angle+=0.01,[1,0,0])
    name: "Coullet",
    dxdt: "dx/dt = y",
    dydt: "dy/dt = z",
    dzdt: "dz/dt = αx + βy + ςz + δx" + cubed,
    α: 0.8,
    β: -1.1,
    ς: -0.45,
    δ: -1,
    parameters: {
        α: "0.8",
        β: "-1.1",
        ς: "-0.45",
        δ: "-1",
    },
    offSet: {
        x: 0,
        y: 0,
        z: 0,
    },
    motion: {
        vel: -0.01,
        axis: [1, 0, 0],
    },
    tilt: {
        x: 0,
        y: 0,
        z: -Math.PI / 2,
        otherTilt: 0,
        otherAxis: [0, 1, 0],
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
        return (
            (this.α * x + this.β * y + this.ς * z + this.δ * x * x * x) *
            this.dt
        );
    },
    tracerColor: function () {
        return color(169, 100, 50);
    },
    highHue: 57,
    lowHue: 0,
    particleColor: function () {
        return color(random(this.lowHue, this.highHue), 100, 50);
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
    // rotate(angle+=0.01,[0,1,0])
    // +200 yOffSet
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
    parameters: {
        α: "0.001",
        β: "0.2",
        ς: "1.1",
    },
    offSet: {
        x: 0,
        y: 4,
        z: 0,
    },
    motion: {
        vel: -0.01,
        axis: [0, 1, 0],
    },
    tilt: {
        x: 0,
        y: 0,
        z: 0,
        otherTilt: 0,
        otherAxis: [0, 1, 0],
    },
    scl: 60,
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
    highHue: 57,
    lowHue: 0,
    particleColor: function () {
        return color(random(this.lowHue, this.highHue), 100, 50);
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
    // rotateX(PI/2)
    // rotate(angle+=0.01,[0,0,1])
    name: "Arneodo",
    dxdt: "dx/dt = y",
    dydt: "dy/dt = z",
    dzdt: "dz/dt = -αx - βy - z +δx" + cubed,
    α: -5.5,
    β: 3.5,
    δ: -1,
    parameters: {
        α: "-5.5",
        β: "3.5",
        δ: "-1",
    },
    offSet: {
        x: 0,
        y: 0,
        z: 0,
    },
    motion: {
        vel: -0.01,
        axis: [0, 0, 1],
    },
    tilt: {
        x: Math.PI / 2,
        y: 0,
        z: 0,
        otherTilt: 0,
        otherAxis: [0, 1, 0],
    },
    scl: 30,
    dt: 0.01,
    pathLength: 175,
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
    highHue: 205,
    lowHue: 160,
    particleColor: function () {
        return color(random(this.lowHue, this.highHue), 100, 50);
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
    // rotateX(-PI/2)
    // rotate(angle+=0.01,[0,0,1])
    // -110 zOffSet
    name: "Rayleigh-Benard",
    dxdt: "dx/dt = -αx + αy",
    dydt: "dy/dt = τx - y - xz",
    dzdt: "dz/dt = xy - βz",
    α: 9.0,
    β: 12,
    τ: 0.5,
    parameters: {
        α: "9.0",
        β: "12",
        τ: "0.5",
    },
    offSet: {
        x: 0,
        y: 0,
        z: -10,
    },
    motion: {
        vel: -0.01,
        axis: [0, 0, 1],
    },
    tilt: {
        x: -Math.PI / 2,
        y: 0,
        z: 0,
        otherTilt: 0,
        otherAxis: [0, 1, 0],
    },
    scl: 20,
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
    highHue: 240,
    lowHue: 180,
    particleColor: function () {
        return color(random(this.lowHue, this.highHue), 100, 50);
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
    // rotate(angle+=0.01,[0,1,0])
    // rotate(PI*7/16,[1,0,-1])
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
    offSet: {
        x: 0,
        y: 0,
        z: 0,
    },
    motion: {
        vel: -0.01,
        axis: [1, 0, 1],
    },
    tilt: {
        x: Math.PI / 2,
        y: -Math.PI / 4,
        z: 0,
        otherTilt: 0,
        otherAxis: [0, 1, 0],
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
        return (-x + this.α * y + this.β * z + x * x) * this.dt;
    },
    tracerColor: () => {
        return color(188, 50, 50);
    },
    highHue: 180,
    lowHue: 120,
    particleColor: function () {
        return color(random(this.lowHue, this.highHue), 100, 50);
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
    // rotateX(-PI/2)
    // rotate(angle+=0.01,[0,0,-1])
    name: "Burke-Shaw",
    dxdt: "dx/dt = -η(x+y)",
    dydt: "dy/dt = -y-ηxz",
    dzdt: "dz/dt = ηxy + μ",
    η: 10, //eta
    μ: 4.272, //mu
    parameters: {
        η: "10", //eta
        μ: "4.272", //mu
    },
    offSet: {
        x: 0,
        y: 0,
        z: 0,
    },
    motion: {
        vel: -0.01,
        axis: [0, 0, -1],
    },
    tilt: {
        x: -Math.PI / 2,
        y: 0,
        z: 0,
        otherTilt: 0,
        otherAxis: [0, 1, 0],
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
    highHue: 220,
    lowHue: 160,
    particleColor: function () {
        return color(random(this.lowHue, this.highHue), 100, 50);
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
    // rotateX(-PI/2)
    // rotate(angle+=0.01,[0,0,-1])
    // -100 zOffset
    name: "Chua 1",
    dxdt: "dx/dt = α(y - x)",
    dydt: "dy/dt = -εx -xz + λy",
    dzdt: "dz/dt = xy - μz",
    α: 40,
    ε: 12,
    λ: 28,
    μ: 3,
    parameters: {
        α: "40",
        ε: "12",
        λ: "28",
        μ: "3",
    },
    offSet: {
        x: 0,
        y: 0,
        z: -15,
    },
    motion: {
        vel: -0.01,
        axis: [0, 0, 1],
    },
    tilt: {
        x: -Math.PI / 2,
        y: 0,
        z: 0,
        otherTilt: 0,
        otherAxis: [0, 1, 0],
    },
    dt: 0.005,
    scl: 8,
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
    highHue: 360,
    lowHue: 300,
    particleColor: function () {
        return color(random(this.lowHue, this.highHue), 100, 50);
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
    // rotateZ(PI/2)
    // rotate(angle+=0.01,[1,0,0])
    name: "Hadley",
    dxdt: "dx/dt = -y" + squared + " - z" + squared + " - αx + αζ",
    dydt: "dy/dt = -xy - βxz -y + δ",
    dzdt: "dz/dt = βxy + xz - z",
    α: 0.2,
    β: 4,
    ζ: 8,
    δ: 1,
    parameters: {
        α: "0.2",
        β: "4",
        ζ: "8",
        δ: "1",
    },
    offSet: {
        x: 0,
        y: 0,
        z: 0,
    },
    motion: {
        vel: -0.01,
        axis: [1, 0, 0],
    },
    tilt: {
        x: 0,
        y: 0,
        z: Math.PI / 2,
        otherTilt: 0,
        otherAxis: [0, 1, 0],
    },
    pathLength: 100,
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
    highHue: 320,
    lowHue: 240,
    particleColor: function () {
        return color(random(this.lowHue, this.highHue), 100, 50);
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
    // rotateY(PI/2)
    // rotate(angle+=0.01,[-1,0,0])
    name: "Lorenz Mod 1",
    dxdt: "dx/dt = -αx + y" + squared + " - z" + squared + " + αζ",
    dydt: "dy/dt = x(y - βz) + δ",
    dzdt: "dz/dt = z + x(βy + z)",
    α: 0.1,
    β: 4,
    ζ: 14,
    δ: 0.08,
    parameters: {
        α: "0.1",
        β: "4",
        ζ: "14",
        δ: "0.08",
    },
    offSet: {
        x: 0,
        y: 0,
        z: 0,
    },
    motion: {
        vel: -0.01,
        axis: [1, 0, 0],
    },
    tilt: {
        x: 0,
        y: Math.PI / 2,
        z: 0,
        otherTilt: 0,
        otherAxis: [0, 1, 0],
    },
    dt: 0.005,
    scl: 10,
    pathLength: 80,
    dx: function (x, y, z) {
        return (-this.α * x + y * y - z * z + this.α * this.ζ) * this.dt;
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
    highHue: 220,
    lowHue: 150,
    particleColor: function () {
        return color(random(this.lowHue, this.highHue), 100, 50);
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
    // rotate(angle+=0.01,[0,1,0])
    // rotateX(-PI/4)
    name: "Lorenz Mod 2",
    dxdt: "dx/dt = -αx + y" + squared + " - z" + squared + " + αζ",
    dydt: "dy/dt = α(y - βz) + δ",
    dzdt: "dz/dt = -z + x(βy + z)",
    α: 0.9,
    β: 5,
    ζ: 9.9,
    δ: 1,
    parameters: {
        α: "0.9",
        β: "5",
        ζ: "9.9",
        δ: "1",
    },
    offSet: {
        x: 0,
        y: 0,
        z: 0,
    },
    motion: {
        vel: -0.01,
        axis: [0, 1, 0],
    },
    tilt: {
        x: -Math.PI / 4,
        y: 0,
        z: 0,
        otherTilt: 0,
        otherAxis: [0, 1, 0],
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
    highHue: 280,
    lowHue: 150,
    particleColor: function () {
        return color(random(this.lowHue, this.highHue), 100, 50);
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
    dxdt: "dx/dt = μx + y - xz",
    dydt: "dy/dt = -x",
    dzdt: "dz/dt = -ηz + ηI(x)x" + squared,
    μ: 1.2,
    η: 0.5,
    parameters: {
        μ: "1.2",
        η: "0.5",
        "I(x)": "{1 ,x > 0; 0, x <= 0 }",
    },
    offSet: {
        x: 0,
        y: -2,
        z: -1,
    },
    motion: {
        vel: -0.01,
        axis: [0, 1, 0],
    },
    tilt: {
        x: 0,
        y: 0,
        z: 0,
        otherTilt: 0,
        otherAxis: [1, 0, 0],
    },
    scl: 40,
    dt: 0.03,
    pathLength: 200,
    dx: function (x, y, z) {
        return (this.μ * x + y - x * z) * this.dt;
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
        return (-this.η * z + this.η * newX * x * x) * this.dt;
    },
    tracerColor: function () {
        return color(325, 100, 50);
    },
    lowHue: 170,
    highHue: 205,
    particleColor: function () {
        return color(random(this.lowHue, this.highHue), 100, 50);
    },
    initialCoordinates: function () {
        let position = {};
        let x = round(random(-1, 0), 2);
        let y = round(random(0, 5), 2);
        let z = round(random(0, 0), 2);
        position["x"] = x;
        position["y"] = y;
        position["z"] = z;
        return position;
    },
};
const rucklidge = {
    // rotateX(PI/2)
    // rotate(angle+=0.01,[0,0,-1])
    // -140 zOffSet
    name: "Rucklidge",
    dxdt: "dx/dt = -κx + αy - yz",
    dydt: "dy/dt = x",
    dzdt: "dz/dt = -z + y" + squared,
    κ: 2,
    α: 6.7,
    parameters: {
        κ: "2",
        α: "6.7",
    },
    offSet: {
        x: 0,
        y: 0,
        z: -7,
    },
    motion: {
        vel: -0.01,
        axis: [0, 0, 1],
    },
    tilt: {
        x: Math.PI / 2,
        y: 0,
        z: 0,
        otherTilt: 0,
        otherAxis: [0, 1, 0],
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
    highHue: 257,
    lowHue: 200,
    particleColor: function () {
        return color(random(this.lowHue, this.highHue), 100, 50);
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
    // rotateX(PI/2)
    // rotate(angle+=0.01,[0,0,-1])
    name: "Qi-Chen",
    dxdt: "dx/dt = α(y - x) + yz",
    dydt: "dy/dt = ςx + y - xz",
    dzdt: "dz/dt = xy - βz",
    α: 38,
    β: 2.66,
    ς: 80,
    scl: 3,
    dt: 0.001,
    pathLength: 100,
    highHue: 270,
    lowHue: 200,
    parameters: {
        α: "38",
        β: "2.66",
        ς: "80",
    },
    offSet: {
        x: 0,
        y: 0,
        z: -100,
    },
    motion: {
        vel: 0.01,
        axis: [0, 0, 1],
    },
    tilt: {
        x: -Math.PI / 2,
        y: 0,
        z: 0,
        otherTilt: 0,
        otherAxis: [0, 1, 0],
    },
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
        return color(random(this.lowHue, this.highHue), 100, 50);
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
const sakarya = {
    // rotateZ(PI/2)
    // rotate(angle+=0.01,[-1,0,0])
    name: "Sakarya",
    dxdt: "dx/dt = -x + y +yz",
    dydt: "dy/dt = -x - y + αxz",
    dzdt: "dz/dt = z -βxy",
    α: 0.4,
    β: 0.3,
    parameters: {
        α: "0.4",
        β: "0.3",
    },
    offSet: {
        x: 0,
        y: 0,
        z: 0,
    },
    motion: {
        vel: 0.01,
        axis: [-1, 0, 0],
    },
    tilt: {
        x: 0,
        y: 0,
        z: Math.PI / 2,
        otherTilt: 0,
        otherAxis: [0, 1, 0],
    },
    scl: 10,
    dt: 0.005,
    pathLength: 100,
    dx: function (x, y, z) {
        return (-x + y + y * z) * this.dt;
    },
    dy: function (x, y, z) {
        return (-x - y + this.α * x * z) * this.dt;
    },
    dz: function (x, y, z) {
        return (z - this.β * x * y) * this.dt;
    },
    tracerColor: function () {
        return color(325, 100, 50);
    },
    highHue: 360,
    lowHue: 270,
    particleColor: function () {
        return color(random(this.lowHue, this.highHue), 100, 50);
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
    dxdt: "α(y - x)",
    dydt: "βx - ςxz",
    dzdt: "",
    α: 10,
    β: 40,
    ς: 2,
    δ: 2.5,
    parameters: {
        α: "10",
        β: "40",
        ς: "2",
        δ: "2.5",
    },
    offSet: {
        x: 0,
        y: 0,
        z: 0,
    },
    motion: {
        vel: 0.0,
        axis: [-1, 0, 0],
    },
    tilt: {
        x: 0,
        y: 0,
        z: 0,
        otherTilt: 0,
        otherAxis: [0, 1, 0],
    },
    scl: 20,
    dt: 0.001,
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
    highHue: 360,
    lowHue: 270,
    particleColor: function () {
        return color(random(this.lowHue, this.highHue), 100, 50);
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
const luChen = {
    // rotateX(PI/2)
    // rotate(angle+=0.01,[0,0,-1])
    name: "Lu-Chen",
    dxdt: "dx/dt = -βx + zy",
    dydt: "dy/dt = -αy + zx",
    dzdt: "dz/dt = δz - yx + ς",
    α: 10,
    β: 4,
    ς: 18.1,
    δ: 2.85,
    parameters: {
        α: "10",
        β: "4",
        ς: "18.1",
        δ: "2.85",
    },
    offSet: {
        x: 0,
        y: 0,
        z: 0,
    },
    motion: {
        vel: 0.01,
        axis: [0, 0, -1],
    },
    tilt: {
        x: Math.PI / 2,
        y: 0,
        z: 0,
        otherTilt: 0,
        otherAxis: [0, 1, 0],
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
    highHue: 205,
    lowHue: 160,
    particleColor: function () {
        return color(random(this.lowHue, this.highHue), 100, 50);
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
    // rotateX(PI/2)
    // rotate(angle+=0.01,[0,0,-1])
    name: "Chua 2",
    dxdt: "dx/dt = α(y - x - δ(|x + 1|-|x - 1|))",
    dydt: "dy/dt = β(x - y + z)",
    dzdt: "dz/dt = -ςy",
    α: 15.6,
    β: 1,
    ς: 25.58,
    δ: -1,
    parameters: {
        α: "15.6",
        β: "1",
        ς: "25.58",
        δ: "-1",
    },
    offSet: {
        x: 0,
        y: 0,
        z: 0,
    },
    motion: {
        vel: 0.01,
        axis: [0, 0, -1],
    },
    tilt: {
        x: Math.PI / 2,
        y: 0,
        z: 0,
        otherTilt: 0,
        otherAxis: [0, 1, 0],
    },
    dt: 0.01,
    scl: 55,
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
    highHue: 57,
    lowHue: 0,
    particleColor: function () {
        return color(random(this.lowHue, this.highHue), 100, 50);
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
const shimizuMorioka = {
    name: "Shimizo-Morioka",
    dxdt: "dx/dt =  y",
    dydt: "dy/dt = (1 - z)x - αy",
    dzdt: "dz/dt = -βz + x" + squared,
    α: 0.75,
    β: 0.45,
    parameters: {
        α: "0.75",
        β: "0.45",
    },
    offSet: {
        x: 0,
        y: 0,
        z: -2,
    },
    motion: {
        vel: -0.01,
        axis: [0, 0, -1],
    },
    tilt: {
        x: Math.PI / 2,
        y: 0,
        z: 0,
        otherTilt: 0,
        otherAxis: [0, 0, 1],
    },
    dt: 0.1,
    scl: 150,
    pathLength: 150,
    dx: function (x, y, z) {
        return y * this.dt;
    },
    dy: function (x, y, z) {
        return ((1 - z) * x - this.α * y) * this.dt;
    },
    dz: function (x, y, z) {
        return (x * x - z * this.β) * this.dt;
    },
    tracerColor: function () {
        return color(230, 100, 76);
    },
    highHue: 57,
    lowHue: 0,
    particleColor: function () {
        return color(random(this.lowHue, this.highHue), 100, 50);
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
const liuChen = {
    // rotateX(PI/2)
    // rotate(angle+=0.01,[0,0,-1])
    name: "Chua 2",
    dxdt: "dx/dt = α(y - x - δ(|x + 1|-|x - 1|))",
    dydt: "dy/dt = β(x - y + z)",
    dzdt: "dz/dt = -ςy",
    α: 15.6,
    β: 1,
    ς: 25.58,
    δ: -1,
    parameters: {
        α: "15.6",
        β: "1",
        ς: "25.58",
        δ: "-1",
    },
    offSet: {
        x: 0,
        y: 0,
        z: 0,
    },
    motion: {
        vel: 0.01,
        axis: [0, 0, -1],
    },
    tilt: {
        x: Math.PI / 2,
        y: 0,
        z: 0,
        otherTilt: 0,
        otherAxis: [0, 1, 0],
    },
    dt: 0.01,
    scl: 55,
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
    highHue: 57,
    lowHue: 0,
    particleColor: function () {
        return color(random(this.lowHue, this.highHue), 100, 50);
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
const bouali2 = {
    // rotateX(PI/2)
    // rotate(angle+=0.01,[0,0,-1])
    name: "Bouali 2",
    dxdt: "dx/dt = αx(1 - y) - βz",
    dydt: "dy/dt = -γy(1 - x" + squared + ")",
    dzdt: "dz/dt = μx",
    α: 3,
    β: 2.2,
    γ: 1,
    μ: 0.001,
    parameters: {
        α: "3",
        β: "2.2",
        γ: "1",
        μ: "0.001",
    },
    offSet: {
        x: 0,
        y: -1,
        z: 0,
    },
    motion: {
        vel: 0.01,
        axis: [0, 1, 0],
    },
    tilt: {
        x: 0,
        y: 0,
        z: Math.PI,
        otherTilt: 0,
        otherAxis: [0, 1, 0],
    },
    dt: 0.02,
    scl: 100,
    pathLength: 100,
    dx: function (x, y, z) {
        return (this.α * x * (1 - y) - this.β * z) * this.dt;
    },
    dy: function (x, y, z) {
        return -this.γ * y * (1 - x * x) * this.dt;
    },
    dz: function (x, y, z) {
        return this.μ * x * this.dt;
    },
    tracerColor: function () {
        return color(230, 100, 76);
    },
    highHue: 57,
    lowHue: 0,
    particleColor: function () {
        return color(random(this.lowHue, this.highHue), 100, 50);
    },
    initialCoordinates: function () {
        let position = {};
        let x = round(random(-2, 2), 2);
        let y = round(random(0, 2), 2);
        let z = round(random(-0.2, 0.2), 2);
        position["x"] = x;
        position["y"] = y;
        position["z"] = z;
        return position;
    },
};

let angle = 0;
let vel = 0;
let axis = [0, 0, 0];

let particles = [];
let attractor;
let omega = 0;
//wang sun is idential to fourwing
//yuwang exponential out of control
//hadley idential to lorenz83
let attractors = {
    lorenz: lorenz,
    shimizuMorioka: shimizuMorioka,
    bouali2: bouali2,
    rayleighBenard: rayleighBenard,
    anishchenkoAstakhov: anishchenkoAstakhov,
    qiChen: qiChen,
    sprott: sprott,
    chua1: chua1,
    finance: finance,
    bouali: bouali,
    hadley: hadley,
    chua2: chua2,
    aizawa: aizawa,
    luChen: luChen,


    thomas: thomas,
    halvorsen: halvorsen,

    rucklidge: rucklidge,

    lorenzMod2: lorenzMod2,
    lorenzMod1: lorenzMod1,

    sakarya: sakarya,
    threeScroll1: threeScroll1,
    genesioTesi: genesioTesi,

    arneodo: arneodo,
    burkeShaw: burkeShaw,
    newtonLeipnik: newtonLeipnik,
    coullet: coullet,
    fourwing: fourwing,
    rabinovichFabrikant: rabinovichFabrikant,
    dadras: dadras,
    chen: chen,
    rossler: rossler,
    threeScroll2: threeScroll2,
    lorenz83: lorenz83,

    noseHoover: noseHoover,
};

function setup() {
    initialSetUp();
}

function initialSetUp() {
    let hld = document.getElementById("holder");
    let pause = document.querySelector(".logo");
    let title = document.getElementById("attractor-name");
    let dx = document.getElementById("dx");
    let dy = document.getElementById("dy");
    let dz = document.getElementById("dz");
    let r = document.querySelector(":root");
    let addParticleButton = document.querySelector(".particle-button");

    // let resetBtn = document.querySelector('.reset-btn')
    // resetBtn.addEventListener('click',()=>{
    //     resetDrawing()
    // })
    let cnv = createCanvas(hld.offsetWidth, hld.offsetHeight, WEBGL);
    pause.addEventListener("click", () => {
        halt();
    });
    addParticleButton.addEventListener("click", () => {
        addNewParticle();
    });
    title.addEventListener("click", () => {
        snapShot();
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
        a.addEventListener("mouseenter", () => {
            colorHover(
                attractors[attractorNamesArray[i]].highHue,
                attractors[attractorNamesArray[i]].lowHue
            );
        });
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
    attractor = shimizuMorioka
    // attractor = attractors[random(attractorNamesArray)];
    title.textContent = attractor["name"]; //setting title card name
    //setting equations on card
    dx.textContent += attractor.dxdt;
    dy.textContent += attractor.dydt;
    dz.textContent += attractor.dzdt;
    //calculating opposite hue
    let newHighHue = complementaryHue(attractor.highHue);
    let newLowHue = complementaryHue(attractor.lowHue);
    //setting new hues
    r.style.setProperty("--hiHue", `hsl(${newHighHue}, 100%,50%)`);
    r.style.setProperty("--lowHue", `hsl(${newLowHue}, 100%,50%)`);

    renderParams(attractor);

    //creating particles
    for (let i = 0; i < 10; i++) {
        let p = new Particle(
            attractor.particleColor(),
            attractor.scl,
            attractor.initialCoordinates,
            attractor.pathLength,
            attractor.offSet
        );
        particles.push(p);
    }
    omega = attractor.motion.vel;
}
function addNewParticle() {
    let newColor = document.querySelector("#colorpicker");
    console.log("new particle");
    console.log(
        attractor.scl,
        attractor.offSet,
        attractor.pathLength,
        attractor.initialCoordinates,
        );
    // const newParticle = new Particle(
    //     newColor.value,
    //     attractor.scl,
    //     attractor.initialCoordinates,
    //     attractor.pathLength,
    //     attractor.offSet
    // );
    // particles.push(newParticle)
    // console.log(attractor.scl,
    //     attractor.initialCoordinates,
    //     attractor.pathLength,
    //     attractor.offSet);
}
function toggleSpin() {
    if (omega != 0) {
        omega = 0;
    } else {
        omega = attractor.motion.vel;
    }
}
function resetDrawing() {
    console.log("reset");
    renderParams(attractor);
}
function colorHover(high, low) {
    let r = document.querySelector(":root");
    r.style.setProperty("--cardHiHue", `hsl(${high}, 100%,50%)`);
    r.style.setProperty("--cardLowHue", `hsl(${low}, 100%,50%)`);
}
function snapShot() {
    console.log("click");
    toggleSpin();
    // saveCanvas("canvas")
}
function halt() {
    //pause the whole drawing
    if (isLooping()) {
        noLoop();
    } else {
        loop();
    }
}
function complementaryHue(h) {
    let newHue = h + 180;
    if (newHue > 360) {
        newHue -= 360;
    }
    return newHue;
}
function windowResized() {
    let hld = document.getElementById("holder");
    resizeCanvas(hld.offsetWidth, hld.offsetHeight);
}

function renderParams(attractor) {
    let params = document.querySelector(".para-list");
    while (params.hasChildNodes()) {
        params.removeChild(params.firstChild);
    }
    const parameters = attractor.parameters;
    const newParams = [];
    for (const [key, value] of Object.entries(parameters)) {
        const singleParam = value;
        const pairContainer = document.createElement("div");
        const div = document.createElement("div");
        let slider = "";
        let extra = document.createElement("div");
        attractor[key] = parseFloat(value);
        if (parseFloat(value)) {
            div.textContent = `${key} = ${value}`;
            pairContainer.append(div);
            slider = document.createElement("input");
            slider.type = "range";
            slider.min = singleParam < 0 ? 2 * singleParam : 0;
            slider.max = singleParam < 0 ? 0 : 2 * singleParam;
            slider.step = Math.abs(singleParam * 0.05);
            slider.value = singleParam;
            slider.addEventListener("input", (e) => {
                div.textContent = `${key} = ${e.target.value}`;
                console.log(typeof e.target.value);
                attractor[key] = parseFloat(e.target.value);
            });
            pairContainer.append(slider);
            newParams.push(pairContainer);
            params.append(pairContainer);
        } else {
            console.log("poop");
            extra.textContent = `${key} = ${value}`;
            extra.classList.add("param-value");
            newParams.push(extra);
            params.append(extra);
        }
        // extra.classList.add('param-pair')
        div.classList.add("param-value");
        pairContainer.classList.add("param-pair");
    }
}

function changeAttractor(name) {
    att = name;
    const incomingAttractor = attractors[att];
    if (attractor.name == incomingAttractor.name) {
        //if trying to click on current attractor just return and do nothing
        return;
    }
    //getting elements from dom
    let r = document.querySelector(":root");
    let title = document.getElementById("attractor-name");
    let dx = document.getElementById("dx");
    let dy = document.getElementById("dy");
    let dz = document.getElementById("dz");
    let params = document.querySelector(".para-list");
    //calculating new hues
    let newHighHue = complementaryHue(incomingAttractor.highHue);
    let newLowHue = complementaryHue(incomingAttractor.lowHue);
    //setting hues
    r.style.setProperty("--hiHue", `hsl(${newHighHue}, 100%,50%)`);
    r.style.setProperty("--lowHue", `hsl(${newLowHue}, 100%,50%)`);
    //removing current params
    while (params.hasChildNodes()) {
        params.removeChild(params.firstChild);
    }
    //adding new params
    renderParams(incomingAttractor);

    //setting new names and equations

    title.textContent = incomingAttractor.name;
    dx.textContent = incomingAttractor.dxdt;
    dy.textContent = incomingAttractor.dydt;
    dz.textContent = incomingAttractor.dzdt;
    //applying scale to the offset in all three axes///Major bug as numbers keep multiplying every the attractor is selected again
    console.log(incomingAttractor.offSet);
    // for (const axis in incomingAttractor.offSet) {
    //     incomingAttractor.offSet[axis] =
    //         incomingAttractor.offSet[axis] * incomingAttractor.scl;
    // }
    console.log(incomingAttractor.offSet);

    for (let p of particles) {
        //changing the properties of particles
        let newParticleCoordinate = incomingAttractor.initialCoordinates();
        p.initialCoordinates = incomingAttractor.initialCoordinates;
        p.path = [];
        p.offSet = incomingAttractor.offSet;
        p.scl = incomingAttractor.scl;
        p.pathLength = incomingAttractor.pathLength;
        p.color = incomingAttractor.particleColor();
        p.x = newParticleCoordinate.x;
        p.y = newParticleCoordinate.y;
        p.z = newParticleCoordinate.z;
    }
    attractor = incomingAttractor;
}

function draw() {
    background("black");
    frameRate(30);
    orbitControl();
    // omega = attractor.motion.vel
    // angleMode(DEGREES)

    stroke("red");
    line(0, 0, 0, 0, innerWidth / 2, 0); //y axis
    line(0, 0, 0, 0, -innerWidth / 2, 0); //y axis

    stroke("blue");
    line(0, 0, 0, 0, 0, innerWidth / 2); //z axis
    line(0, 0, 0, 0, 0, -innerWidth / 2); //z axis

    stroke("yellow");
    line(0, 0, 0, innerWidth / 2, 0, 0); //x axis
    line(0, 0, 0, -innerWidth / 2, 0, 0); //x axis

    // stroke("purple");
    // // line(0, 0, 0, 0, -innerWidth / 2, innerWidth / 2);
    // line(
    //     0,
    //     0,
    //     0,
    //     (1 * innerWidth) / 2,
    //     0,
    //     (1 * innerWidth) / 2
    // );

    // stroke("magenta");
    // line(
    //     0,
    //     0,
    //     0,
    //     (-1 * innerWidth) / 2,
    //     (-1 * innerWidth) / 2,
    //     (-1 * innerWidth) / 2
    // );
    // rotate(angle+=0.01,[0,1,0])
    // rotateX(PI/2)
    // rotate(angle+=0.01,[0,0,-1])
    // rotate(I*7/16,[1,0,-1])
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
    // console.log(particles[0].y,particles[0].x)
    // rotate(angle+=0.01,[0,1,0])
    // attractor.motion
    if (angle > TWO_PI) {
        //keeping angle within a cycle
        angle = 0;
    }

    rotateX(attractor.tilt.x);
    rotateY(attractor.tilt.y);
    rotateZ(attractor.tilt.z);
    rotate(attractor.tilt.otherTilt, attractor.tilt.otherAxis);
    rotate((angle += omega), attractor.motion.axis);

    for (let p of particles) {
        let dx = attractor.dx(p.x, p.y, p.z);
        let dy = attractor.dy(p.x, p.y, p.z);
        let dz = attractor.dz(p.x, p.y, p.z);

        let newX = p.x + dx;
        let newY = p.y + dy;
        let newZ = p.z + dz;
        p.show(newX, newY, newZ);
    }
    // noLoop()
}
