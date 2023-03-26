let x = 0.001;
let y = 0;
let z = 0;

let x2 = 0.002;
let y2 = 0;
let z2 = 0;

let sigma = 10;
let rho = 28;
let beta = 8 / 3;

let a = 1 / 5;
let b = 1 / 5;
let c = 5.7;
let points = [];
let c1;
let c2;
let cells = [];
let bee = 0.208186;
function setup() {
    createCanvas(innerWidth, innerHeight, WEBGL);
    // strokeWeight(2)
    // line(0,0,0,0,1,0)
    colorMode(HSB);
    c1 = new Cell(0, 0, 0.1, "red");
    c2 = new Cell(0, 0, 0.02, "blue");
    c3 = new Cell(0, 0, 0.01, "green");
    cells.push(c1);
    cells.push(c2);
    cells.push(c3);
}
let angle = 0;
function draw() {
    orbitControl();
    background("black");
    // dt = 0.0000001
    //thomas
    // dt = 0.0001;
    // let dx = sin(y) - bee*x
    // let dy = sin(z) - bee*y
    // let dz = sin(x) - bee*z

    dt = 0.05;
    for (let c of cells) {
        console.log(c.x,c.y,c.z)
        let dx = (-c.y - c.z) * dt;
        let dy = (c.x + a * c.y) * dt;
        let dz = (b + c.z * (c.x - c)) * dt;

        // let dx = sigma * (c.y - c.x) * dt;
        // let dy = (c.x * (rho - c.z) - c.y) * dt;
        // let dz = (c.x * c.y - beta * c.z) * dt;
        let newX = c.x + dx;
        let newY = c.y + dy;
        let newZ = c.z + dz;
        // console.log(newX, newY, newZ);
        c.show(newX, newY, newZ);
    }
    //lorenz
    // let dx = sigma * (y - x) * dt;
    // let dy = (x * (rho - z) - y) * dt;
    // let dz = (x * y - beta * z) * dt;

    // let dx2 = sigma * (y2 - x2) * dt;
    // let dy2 = (x2 * (rho - z2) - y2) * dt;
    // let dz2 = (x2 * y2 - beta * z2) * dt;

    //rossler
    // dt = 0.05;
    // let dx = (-y - z) * dt;
    // let dy = (x + a * y) * dt;
    // let dz = (b + z * (x - c)) * dt;

    // x2 = x2 + dx2;
    // y2 = y2 + dy2;
    // z2 = z2 + dz2;

    // x = x + dx 
    // console.log(x,y,z)
    // c2.show(x, y, z);
    // c3.show(x2, y2, z2)
    points.push(createVector(x, y, z));
    points.push(new p5.Vector(x, y, z));

    translate(0, 0, 0);
    if (points.length > 500) {
        points.shift();
    }
    angle += 0.005;
    rotateY(angle);
    // rotateX(PI / 2);
    // console.log(angle)
    scale(15);
    stroke(255);
    noFill();
    let hu = 0;
    // beginShape();

    // for (let v of points) {
    //     stroke(hu, 255, 255);
    //     point(v.x, v.y, v.z);

    //     hu += 1;
    //     if (hu > 255) {
    //         hu = 0;
    //     }
    // }

    // endShape();
}
