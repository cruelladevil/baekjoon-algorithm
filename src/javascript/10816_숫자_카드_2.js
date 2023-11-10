const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split('\n')
  .map((string) => string.split(' ').map(Number));
const [, cards, , numbers] = input;

const counter = new Map();

cards.forEach((number) => {
  if (counter.has(number)) {
    counter.set(number, counter.get(number) + 1);
  } else {
    counter.set(number, 1);
  }
});

console.log(numbers.map((number) => counter.get(number) ?? 0).join(' '));
