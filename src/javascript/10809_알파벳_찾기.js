const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim();

const indexes = Array
  .from({ length: 26 }, (_, i) => String.fromCharCode('a'.charCodeAt() + i))
  .map((char) => input.indexOf(char));

console.log(indexes.join(' '));
