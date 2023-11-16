const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split('\n')
  .map((string) => string.split(' ').map(Number));
const [[n, , v], ...edges] = input;

const graph = new Map(Array.from({ length: n }, (_, i) => [i + 1, []]));

edges.forEach(([from, to]) => {
  graph.get(from).push(to);
  graph.get(to).push(from);
});

const dfs = (start) => {
  const visited = new Set();
  const result = [];
  const stack = [start];

  while (stack.length > 0) {
    const node = stack.pop();

    if (!visited.has(node)) {
      stack.push(...graph.get(node));
      result.push(node);
      visited.add(node);
    }
  }

  return result;
};

const bfs = (start) => {
  const visited = new Set();
  const result = [];
  const queue = [start];

  while (queue.length > 0) {
    const node = queue.shift();

    if (!visited.has(node)) {
      queue.push(...graph.get(node));
      result.push(node);
      visited.add(node);
    }
  }

  return result;
};

graph.forEach((nodes) => nodes.sort((a, b) => b - a));
console.log(dfs(v).join(' '));

graph.forEach((nodes) => nodes.sort((a, b) => a - b));
console.log(bfs(v).join(' '));
