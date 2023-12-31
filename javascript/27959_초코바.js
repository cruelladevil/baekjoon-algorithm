const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(' ');
const [coinCount, price] = input;

const COIN_UNIT = 100;

console.log(COIN_UNIT * coinCount >= price ? 'Yes' : 'No');
