let x = 0.01;
let y = 0;
let z = 0;

let sigma = 10;
let rho = 28;
let beta = 8 / 3;
let points = [];

function setup() {
    createCanvas(innerWidth, innerHeight, WEBGL);

    colorMode(HSB);
}
let angle = 0;
function draw() {
    background("black");

    dt = 0.01;
    let dx = sigma * (y - x) * dt;
    let dy = (x * (rho - z) - y) * dt;
    let dz = (x * y - beta * z) * dt;
    x = x + dx;
    y = y + dy;
    z = z + dz;

    // points.push(createVector(x, y, z));
    points.push(new p5.Vector(x, y , z));
    translate(0, 0, 0);
    if(points.length >1500 ){
        points.shift()
    }
    angle += 0.005;
    rotateY(angle);
    rotateX(PI/2)
    scale(8);
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
