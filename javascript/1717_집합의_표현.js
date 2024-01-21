const fs = require('fs');
const input = fs
  .readFileSync(0, 'utf-8')
  .trim()
  .split(/\r?\n/)
  .map((string) => string.split(' ').map(Number));
const [[n], ...actions] = input;

const UNION = 0;
const FIND = 1;

const parents = Array.from({ length: n + 1 }, (_, i) => i);

const find = (x) => {
  if (parents[x] === x) {
    return x;
  }

  parents[x] = find(parents[x]);

  return parents[x];
};

const union = (a, b) => {
  const rootA = find(a);
  const rootB = find(b);

  if (rootA !== rootB) {
    parents[rootA] = rootB;
  }
};

const result = [];

actions.forEach(([action, a, b]) => {
  if (action === UNION) {
    union(a, b);
  } else if (action === FIND) {
    result.push(find(a) === find(b) ? 'YES' : 'NO');
  }
});

console.log(result.join('\n'));
