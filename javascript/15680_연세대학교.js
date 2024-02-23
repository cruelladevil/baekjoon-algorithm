const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim();

console.log(Number(input) === 0 ? 'YONSEI' : 'Leading the Way to the Future');
