const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\r?\n/)
  .map((string) => string.split(' ').map(Number));
const [dataStructureTypes, initialElements] = input.slice(1, 3);
const [[m], elements] = input.slice(3, 5);

const QUEUE = 0;

const initialQueueElements = initialElements.filter((_, i) => dataStructureTypes[i] === QUEUE);

console.log([...initialQueueElements.reverse(), ...elements].slice(0, m).join(' '));
