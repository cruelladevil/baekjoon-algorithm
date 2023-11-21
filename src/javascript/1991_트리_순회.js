const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\r?\n/)
  .slice(1)
  .map((string) => string.split(' '));

const ROOT = 'A';
const LEAF = '.';

const tree = {};

input.forEach(([node, left, right]) => {
  tree[node] = { left, right };
});

const preorder = (node) => {
  const result = [];

  const preorderTraversal = (node) => {
    if (node === LEAF) return;

    const { left, right } = tree[node];

    result.push(node);
    preorderTraversal(left);
    preorderTraversal(right);
  };

  preorderTraversal(node);

  return result;
};

const inorder = (node) => {
  const result = [];

  const inorderTraversal = (node) => {
    if (node === LEAF) return;

    const { left, right } = tree[node];

    inorderTraversal(left);
    result.push(node);
    inorderTraversal(right);
  };

  inorderTraversal(node);

  return result;
};

const postorder = (node) => {
  const result = [];

  const postorderTraversal = (node) => {
    if (node === LEAF) return;

    const { left, right } = tree[node];

    postorderTraversal(left);
    postorderTraversal(right);
    result.push(node);
  };

  postorderTraversal(node);

  return result;
};

console.log(preorder(ROOT).join(''));
console.log(inorder(ROOT).join(''));
console.log(postorder(ROOT).join(''));
