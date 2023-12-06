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
  const visited = Array.from({ length: n + 1 }, () => false);
  const stack = [start];
  const result = [];

  while (stack.length > 0) {
    const node = stack.pop();

    if (visited[node] === false) {
      visited[node] = true;
      stack.push(...graph.get(node));
      result.push(node);
    }
  }

  return result;
};

const bfs = (start) => {
  const visited = Array.from({ length: n + 1 }, () => false);
  const queue = [start];
  const result = [];

  while (queue.length > 0) {
    const node = queue.shift();

    if (visited[node] === false) {
      visited[node] = true;
      queue.push(...graph.get(node));
      result.push(node);
    }
  }

  return result;
};

graph.forEach((nodes) => nodes.sort((a, b) => b - a));
console.log(dfs(v).join(' '));

graph.forEach((nodes) => nodes.sort((a, b) => a - b));
console.log(bfs(v).join(' '));
