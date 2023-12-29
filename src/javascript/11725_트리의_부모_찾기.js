const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\r?\n/)
  .map((string) => string.split(' ').map(Number));
const [[n], ...edges] = input;

const graph = Array.from({ length: n + 1 }, () => []);

edges.forEach(([from, to]) => {
  graph[from].push(to);
  graph[to].push(from);
});

const visited = Array.from({ length: n + 1 }, () => false);
const parents = Array.from({ length: n + 1 }, () => 0);

const dfs = (parent) => {
  visited[parent] = true;

  graph[parent].forEach((children) => {
    if (!visited[children]) {
      parents[children] = parent;
      dfs(children);
    }
  });
};

dfs(1);

console.log(parents.slice(2).join('\n'));
