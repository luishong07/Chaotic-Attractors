let x = 0.001;
let y = 0;
let z = 0;

let sigma = 10;
let rho = 28;
let beta = 8 / 3;

let a = 1/5;
let b = 1/5;
let c = 5.7;
let points = [];
let cell

let bee = 0.208186
function setup() {
    createCanvas(innerWidth, innerHeight, WEBGL);
    // strokeWeight(2)
    // line(0,0,0,0,1,0)
    colorMode(HSB);
    cell = new Cell()
}
let angle = 0;
function draw() {
    orbitControl()
    background("black");

    //thomas
    // dt = 0.0001
    // let dx = sin(y) - bee*x
    // let dy = sin(z) - bee*y
    // let dz = sin(x) - bee*z


    //lorenz
    // dt = 0.01;
    // let dx = sigma * (y - x) * dt;
    // let dy = (x * (rho - z) - y) * dt;
    // let dz = (x * y - beta * z) * dt;
    // x = x + dx;
    // y = y + dy;
    // z = z + dz;

    //rossler
    // dt = 0.05;
    // let dx = (-y - z) * dt;
    // let dy = (x + a * y) * dt;
    // let dz = (b + z * (x - c)) * dt;

    x = x + dx;
    y = y + dy;
    z = z + dz;
    // console.log(x,y,z)
    // cell.show(x,y,z)
    // points.push(createVector(x, y, z));
    points.push(new p5.Vector(x, y, z));
    translate(0, 0, 0);
    if (points.length > 3000) {
        points.shift();
    }
    // angle += 0.005;
    rotateY(angle);
    // rotateX(PI / 2);
    scale(15);

    stroke(255);
    noFill();

    let hu = 0;

    beginShape();

    for (let v of points) {
        stroke(hu, 255, 255);
        point(v.x, v.y, v.z);

        hu += 1;
        if (hu > 255) {
            hu = 0;
        }
    }


    endShape();
    
}
