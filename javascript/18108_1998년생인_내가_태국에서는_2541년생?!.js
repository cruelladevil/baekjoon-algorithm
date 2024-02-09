const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim();
const year = Number(input);

const BUDDHA_YEAR = 543;

console.log(year - BUDDHA_YEAR);
