const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\r?\n/)
  .map((string) => string.split(' ').map(Number));
const [[n], ...edges] = input;

const graph = new Map(Array.from({ length: n }, (_, i) => [i + 1, []]));

edges.forEach(([from, to]) => {
  graph.get(from).push(to);
  graph.get(to).push(from);
});

const visited = Array.from({ length: n + 1 }, () => false);

const dfs = (node) => {
  visited[node] = true;

  graph.get(node).forEach((node) => {
    if (!visited[node]) {
      dfs(node);
    }
  });
};

const isolatedCount = Array
  .from({ length: n }, (_, i) => i + 1)
  .reduce((count, node) => {
    if (visited[node]) {
      return count;
    }
    dfs(node);
    return count + 1;
  }, 0);

console.log(isolatedCount);
