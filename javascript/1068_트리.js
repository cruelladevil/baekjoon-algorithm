const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\r?\n/)
  .map((string) => string.split(' ').map(Number));
const [[n], parents, [deletedNode]] = input;

const ROOT_PARENT = -1;

const tree = Array.from({ length: n }, () => []);

parents.forEach((parent, node) => {
  if (parent !== ROOT_PARENT) {
    tree[parent].push(node);
  }
});

const visited = Array.from({ length: n }, () => false);
let leafCount = 0;

const dfs = (node) => {
  if (visited[node] || node === deletedNode) {
    return;
  }

  visited[node] = true;

  const children = tree[node].filter((child) => child !== deletedNode);

  if (children.length > 0) {
    children.forEach((child) => {
      dfs(child);
    });
  } else {
    leafCount += 1;
  }
};

const root = parents.indexOf(ROOT_PARENT);

dfs(root);

console.log(leafCount);
