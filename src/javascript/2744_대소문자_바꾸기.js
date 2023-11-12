const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim();

console.log(
  Array
    .from(input, (char) => (char === char.toLowerCase() ? char.toUpperCase() : char.toLocaleLowerCase()))
    .join(''),
);
