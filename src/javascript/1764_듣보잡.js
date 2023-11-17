const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const [size, ...names] = input;
const [n] = size.split(' ').map(Number);

const notHeard = names.slice(0, n);
const notSeen = names.slice(n);

const notHeardSet = new Set(notHeard);

const notHeardNotSeen = notSeen
  .filter((person) => notHeardSet.has(person))
  .sort((a, b) => a.localeCompare(b));

console.log(notHeardNotSeen.length);
console.log(notHeardNotSeen.join('\n'));
