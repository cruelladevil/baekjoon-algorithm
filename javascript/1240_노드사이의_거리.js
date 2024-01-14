const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\r?\n/)
  .map((string) => string.split(' ').map(Number));
const [[n], ...rest] = input;
const edges = rest.slice(0, n - 1);
const nodes = rest.slice(n - 1);

const graph = Array.from({ length: n + 1 }, () => []);

edges.forEach(([from, to, distance]) => {
  graph[from].push({ node: to, distance });
  graph[to].push({ node: from, distance });
});

const bfs = (start, end) => {
  const queue = [{ node: start, distance: 0 }];
  const visited = Array.from({ length: n + 1 }, () => false);

  for (let i = 0; i < queue.length; i += 1) {
    const { node, distance } = queue[i];

    visited[node] = true;

    if (node === end) {
      return distance;
    }

    graph[node].forEach(({ node: child, distance: d }) => {
      if (!visited[child]) {
        queue.push({ node: child, distance: distance + d });
      }
    });
  }
};

console.log(nodes.map(([start, end]) => bfs(start, end)).join('\n'));
