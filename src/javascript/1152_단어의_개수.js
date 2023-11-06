const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim();

const wordCount = input.split(' ').filter((word) => word !== '').length;

console.log(wordCount);
