const sigma = 10;
const rho = 28;
const beta = 8 / 3;
const dt = 0.01
const dx = sigma * (y - x) * dt;
const dy = (x * (rho - z) - y) * dt;
const dz = (x * y - beta * z) * dt;

export default sigma
