const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split('\n')
  .map((string) => string.split(' ').map(Number));
const [n] = input;

const getPrintedIndex = (priorities, targetIndex) => {
  const queue = priorities.map((priority, index) => ({ priority, index }));
  const printed = [];

  while (queue.length > 0) {
    const curr = queue.shift();

    if (queue.some((doc) => doc.priority > curr.priority)) {
      queue.push(curr);
    } else {
      printed.push(curr);
    }
  }

  return printed.findIndex(({ index }) => index === targetIndex) + 1;
};

const result = Array.from({ length: n }, (_, i) => {
  const [, targetIndex] = input[2 * i + 1];
  const priorities = input[2 * i + 2];

  return getPrintedIndex(priorities, targetIndex);
});

console.log(result.join('\n'));
