const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\r?\n/)
  .slice(1)
  .map((string) => string.split(' ').map(Number));

const fnD = (n) => (n * 2) % 10000;
const fnS = (n) => (n === 0 ? 9999 : n - 1);
const fnL = (n) => (n % 1000) * 10 + Math.floor(n / 1000);
const fnR = (n) => (n % 10) * 1000 + Math.floor(n / 10);

const bfs = (start, target) => {
  const visited = Array.from({ length: 10000 }, () => false);
  const queue = [[start, '']];

  visited[start] = true;

  const visitNext = (next, path) => {
    if (visited[next] === false) {
      visited[next] = true;
      queue.push([next, path]);
    }
  };

  while (queue.length > 0) {
    const [curr, path] = queue.shift();

    if (curr === target) {
      return path;
    }

    visitNext(fnD(curr), path + 'D');
    visitNext(fnS(curr), path + 'S');
    visitNext(fnL(curr), path + 'L');
    visitNext(fnR(curr), path + 'R');
  }
};

console.log(input.map(([start, target]) => bfs(start, target)).join('\n'));
