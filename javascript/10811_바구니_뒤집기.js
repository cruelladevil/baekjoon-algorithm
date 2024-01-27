const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\r?\n/)
  .map((string) => string.split(' ').map(Number));
const [[n], ...actions] = input;

const basket = Array.from({ length: n }, (_, i) => i + 1);

actions.forEach(([start, end]) => {
  const left = start - 1;
  const right = end - 1;

  for (let i = 0; i < (right - left) / 2; i += 1) {
    [basket[left + i], basket[right - i]] = [basket[right - i], basket[left + i]];
  }
});

console.log(basket.join(' '));
