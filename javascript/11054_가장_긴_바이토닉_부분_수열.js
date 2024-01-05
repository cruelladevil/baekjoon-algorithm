const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\r?\n/)
  .map((string) => string.split(' ').map(Number));
const [[n], [...numbers]] = input;

const dpIncrease = Array.from({ length: n }, () => 0);
const dpDecrease = Array.from({ length: n }, () => 0);

for (let i = 0; i < n; i += 1) {
  const curr = numbers[i];
  let count = 1;

  for (let j = 0; j < i; j += 1) {
    const prev = numbers[j];

    if (curr > prev) {
      count = Math.max(count, dpIncrease[j] + 1);
    }
  }

  dpIncrease[i] = count;
}

for (let i = n - 1; i >= 0; i -= 1) {
  const curr = numbers[i];
  let count = 1;

  for (let j = i + 1; j < n; j += 1) {
    const next = numbers[j];

    if (curr > next) {
      count = Math.max(count, dpDecrease[j] + 1);
    }
  }

  dpDecrease[i] = count;
}

console.log(Math.max(...Array.from({ length: n }, (_, i) => dpIncrease[i] + dpDecrease[i])) - 1);
