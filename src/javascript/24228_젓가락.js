const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(' ').map(BigInt);
const [n, r] = input;

const pairCount = BigInt(2) * r;
const worstRemainder = n - BigInt(1);

console.log((pairCount + worstRemainder).toString());
