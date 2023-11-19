const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\r?\n/)
  .map((string) => string.split(' ').map(Number));
const [[n, m], [...numbers]] = input;

numbers.sort((a, b) => a - b);

const permutation = new Set();

const permute = (curr = []) => {
  if (curr.length === m) {
    const isNonDecreasingOrder = curr.every((number, i) => (curr[i - 1] ?? Number.MIN_SAFE_INTEGER) <= number);

    if (isNonDecreasingOrder) {
      permutation.add(curr.join(' '));
    }

    return;
  }

  for (let i = 0; i < n; i += 1) {
    curr.push(numbers[i]);
    permute(curr);
    curr.pop();
  }
};

permute();

console.log(Array.from(permutation).join('\n'));
