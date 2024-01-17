const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\r?\n/)
  .map((string) => string.split(' ').map(Number));
const [[v], ...edges] = input;

const graph = Array.from({ length: v + 1 }, () => []);

edges.forEach((edge) => {
  const [from, ...rest] = edge.slice(0, -1);

  for (let i = 0; i < rest.length; i += 2) {
    const to = rest[i];
    const distance = rest[i + 1];

    graph[from].push({ node: to, distance });
  }
});

let maxDistance = 0;
let maxNode = 0;

const dfs = (node) => {
  const visited = Array.from({ length: v + 1 }, () => false);
  const stack = [{ node, distance: 0 }];

  while (stack.length > 0) {
    const { node: curr, distance } = stack.pop();

    visited[curr] = true;

    if (maxDistance < distance) {
      maxDistance = distance;
      maxNode = curr;
    }

    graph[curr].forEach(({ node: next, distance: d }) => {
      if (!visited[next]) {
        stack.push({ node: next, distance: distance + d });
      }
    });
  }
};

dfs(1);
dfs(maxNode);

console.log(maxDistance);
