const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\r?\n/)
  .slice(1)
  .map((string) => string.split(' ').map(BigInt));
const [arrayA, arrayB] = input;

const ascending = (a, b) => {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
};

const descending = (a, b) => {
  if (a < b) {
    return 1;
  } else if (a > b) {
    return -1;
  } else {
    return 0;
  }
};

arrayA.sort(ascending);
arrayB.sort(descending);

const sum = arrayA.reduce((acc, cur, i) => acc + cur * arrayB[i], BigInt(0));

console.log(sum.toString());
