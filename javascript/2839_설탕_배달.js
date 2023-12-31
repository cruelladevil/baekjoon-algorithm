const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

let sugarWeight = Number(input);
let bagCount = 0;

while (sugarWeight > 0) {
  if (sugarWeight % 5 === 0) {
    bagCount += sugarWeight / 5;
    sugarWeight = 0;
  } else {
    bagCount += 1;
    sugarWeight -= 3;
  }
}

console.log(sugarWeight === 0 ? bagCount : -1);
