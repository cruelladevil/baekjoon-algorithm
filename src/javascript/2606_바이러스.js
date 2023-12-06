const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\r?\n/)
  .map((string) => string.split(' ').map(Number));
const [[n], , ...edges] = input;

const START = 1;

const graph = new Map(Array.from({ length: n }, (_, i) => [i + 1, []]));

edges.forEach(([from, to]) => {
  graph.get(from).push(to);
  graph.get(to).push(from);
});

const dfs = (start) => {
  const visited = Array.from({ length: n + 1 }, () => false);
  const stack = [start];
  const infectedComputers = [];

  while (stack.length > 0) {
    const node = stack.pop();

    if (visited[node] === false) {
      visited[node] = true;
      stack.push(...graph.get(node));
      infectedComputers.push(node);
    }
  }

  return infectedComputers.length - 1;
};

console.log(dfs(START));
