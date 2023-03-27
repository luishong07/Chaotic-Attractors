
let x = 0.001;
let y = 0;
let z = 0;


// let a = 1 / 5;
// let b = 1 / 5;
// let C = 5.7;
let a = 0.2
let b = 0.01
let C = -0.4

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
    c1 = new Cell(0.1, 0.1, 0.1, "red");
    c2 = new Cell(0.1, 0, 0.2, "blue");
    c3 = new Cell(0, 0.1, 0.3, "green");
    cells.push(c1);
    cells.push(c2);
    cells.push(c3);
}
let angle = 0;
function draw() {
    // frameRate(20)
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

    dt = 0.1;
    for (let c of cells) {
        let dx = (a*c.x + c.y*c.z)*dt
        let dy = (b*c.x + C*c.y - c.x*c.z)*dt
        let dz = (-c.z -c.x*c.y)*dt

        let newX = c.x + dx;
        let newY = c.y + dy;
        let newZ = c.z + dz;
        // console.log(newX, newY, newZ)
        c.show(newX, newY, newZ);
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

    // x = x + dx;
    // y = y + dy;
    // z = z + dz;

    // x = x + dx
    // console.log(x,y,z)
    // c1.show(x, y, z);
    // c3.show(x2, y2, z2)
    points.push(createVector(x, y, z));
    points.push(new p5.Vector(x, y, z));

    translate(0, 0, 0);
    if (points.length > 500) {
        points.shift();
    }
    // angle += 0.005;
    // rotateY(angle);
    // rotateX(PI / 2);
    // console.log(angle)
    scale(20);
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
