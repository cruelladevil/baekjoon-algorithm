const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(' ').map(Number);
const [a, b] = input;

const calGCD = (a, b) => {
  return a % b === 0 ? b : calGCD(b, a % b);
};

const calLCM = (a, b) => {
  return (a * b) / calGCD(a, b);
};

console.log(calGCD(a, b));
console.log(calLCM(a, b));
