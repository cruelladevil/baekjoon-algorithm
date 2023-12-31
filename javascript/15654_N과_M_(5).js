const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\r?\n/)
  .map((string) => string.split(' ').map(Number));
const [[n, m], [...numbers]] = input;

numbers.sort((a, b) => a - b);

const permutation = new Set();

const permute = (curr = new Set()) => {
  if (curr.size === m) {
    permutation.add(Array.from(curr, (index) => numbers[index]).join(' '));
    return;
  }

  for (let i = 0; i < n; i += 1) {
    if (!curr.has(i)) {
      curr.add(i);
      permute(curr);
      curr.delete(i);
    }
  }
};

permute();

console.log(Array.from(permutation).join('\n'));
