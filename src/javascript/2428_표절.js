const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\r?\n/)
  .map((string) => string.split(' ').map(Number));
const [[n], [...fileSizes]] = input;

fileSizes.sort((a, b) => b - a);

const calCheckingPairCountFrom = (index) => {
  const fileSize = fileSizes[index];
  let left = index;
  let right = n - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (fileSizes[middle] >= fileSize * 0.9) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return left - index - 1;
};

console.log(fileSizes.reduce((acc, _, index) => acc + calCheckingPairCountFrom(index), 0));
