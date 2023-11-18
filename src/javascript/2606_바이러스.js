const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\r?\n/)
  .map((string) => string.split(' ').map(Number));
const [[n], , ...edges] = input;

const graph = new Map(Array.from({ length: n }, (_, i) => [i + 1, []]));

edges.forEach(([from, to]) => {
  graph.get(from).push(to);
  graph.get(to).push(from);
});

const dfs = (start) => {
  const stack = [start];
  const visited = new Set();
  const infectedComputers = [];

  while (stack.length > 0) {
    const node = stack.pop();

    if (!visited.has(node)) {
      stack.push(...graph.get(node));
      visited.add(node);
      infectedComputers.push(node);
    }
  }

  return infectedComputers.length - 1;
};

console.log(dfs(1));
