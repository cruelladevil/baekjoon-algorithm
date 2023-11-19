const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(' ').map(Number);
const [n, m] = input;

const permutation = new Set();

const permute = (curr = new Set()) => {
  if (curr.size === m) {
    const numbers = Array.from(curr);
    const isIncreasingOrder = numbers.every((number, i) => (numbers[i - 1] ?? Number.MIN_SAFE_INTEGER) < number);

    if (isIncreasingOrder) {
      permutation.add(Array.from(curr).join(' '));
    }

    return;
  }

  for (let i = 1; i <= n; i += 1) {
    if (!curr.has(i)) {
      curr.add(i);
      permute(curr);
      curr.delete(i);
    }
  }
};

permute();

console.log(Array.from(permutation).join('\n'));
