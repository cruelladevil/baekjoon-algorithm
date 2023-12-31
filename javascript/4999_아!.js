const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(/\n/);
const [jaehwan, doctor] = input;

console.log(jaehwan.length >= doctor.length ? 'go' : 'no');
