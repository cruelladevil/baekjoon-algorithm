const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(/\r?\n/).map(Number);

const postorder = [];

const findPostorder = (left, right) => {
  if (left > right) {
    return;
  }

  let root = input[left];
  let index = -1;

  for (let i = left + 1; i < input.length; i += 1) {
    if (input[i] > root) {
      index = i;
      break;
    }
  }

  if (index === -1) {
    index = right + 1;
  }

  findPostorder(left + 1, index - 1);
  findPostorder(index, right);
  postorder.push(root);
};

findPostorder(0, input.length - 1);

console.log(postorder.join('\n'));
