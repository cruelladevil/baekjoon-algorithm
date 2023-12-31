const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(' ').map(Number);
const [n, k] = input;

const calJosephusPermutation = (n, k) => {
  const array = Array.from({ length: n }, (_, i) => i + 1);
  const josephusPermutation = [];

  let i = 0;

  while (array.length > 0) {
    const index = (i + k - 1) % array.length;
    const curr = array[index];

    josephusPermutation.push(curr);
    array.splice(index, 1);
    i = index;
  }

  return josephusPermutation;
};

console.log(`<${calJosephusPermutation(n, k).join(', ')}>`);
