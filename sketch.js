// const sigma = 10;
// const rho = 28;
// const beta = 8 / 3;

// let a = 1 / 5;
// let b = 1 / 5;
// let C = 5.7;

// let a = 0.2;
// let b = 0.01;
// let C = -0.4;

//aizawa constants
const a = 0.95
const b = 0.7
const c = 0.6
const d = 3.5
const e = 0.25
const f = 0.1


let points = [];
let c1;
let c2;
let cells = [];
let bee = 0.208186;
function setup() {
    createCanvas(innerWidth, innerHeight, WEBGL);
    colorMode(HSB);
    c1 = new Cell(0.1, 0, 0, "red");
    c2 = new Cell(0.1, 0, 0.2, "blue");
    c3 = new Cell(0, 0.1, 0.3, "green");
    cells.push(c1);
    cells.push(c2);
    cells.push(c3);
}
let angle = 0;
function draw() {
    orbitControl();
    background("black");

    //four wing
    // let dx = (a*x + y*z)*dt
    // let dy = (b*x + C*y + x*z)*dt
    // let dz = (-z -x*y)*dt

    //thomas
    // dt = 0.0001;
    // let dx = sin(y) - bee*x
    // let dy = sin(z) - bee*y
    // let dz = sin(x) - bee*z

    dt = 0.01;
    for (let p of cells) {


        // let dx = sigma * (p.y - p.x) * dt;
        // let dy = (p.x * (rho - p.z) - p.y) * dt;
        // let dz = (p.x * p.y - beta * p.z) * dt;

        let dx = ((p.z-b)*p.x - d*p.y)*dt
        let dy = ((d*p.x) + p.y*(p.z - b))*dt
        let dz = (c + (a*p.z) -((p.z*p.z*p.z)/3) - (((p.x*p.x)+(p.y*p.y))*(1+(e*p.z))) +(f*p.z*p.x*p.x*p.x))*dt

        let newX = p.x + dx;
        let newY = p.y + dy;
        let newZ = p.z + dz;
        console.log(newX, newY, newZ)
        p.show(newX, newY, newZ);
    }
    //lorenz
    // let dx = sigma * (y - x) * dt;
    // let dy = (x * (rho - z) - y) * dt;
    // let dz = (x * y - beta * z) * dt;

    //rossler
    // dt = 0.05;
    // let dx = (-y - z) * dt;
    // let dy = (x + a * y) * dt;
    // let dz = (b + z * (x - c)) * dt;

    translate(0, 0, 0);
    if (points.length > 500) {
        points.shift();
    }
    // angle += 0.005;
    // rotateY(angle);
    // rotateX(PI / 2);
    // console.log(angle)
    scale(30);
    stroke(255);
    noFill();
    let hu = 0;
}
