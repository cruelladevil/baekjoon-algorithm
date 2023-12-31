const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim();
const n = Number(input);

const MAX_CURRENT_WEIGHT = 50000;

const checkPossibleWeight = (weight) => {
  let left = 1;
  let right = weight;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    const target = weight ** 2 - middle ** 2;

    if (target === n) {
      return true;
    }

    if (target > n) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return false;
};

const possibleWeights = Array.from({ length: MAX_CURRENT_WEIGHT }, (_, i) => i + 1).filter(checkPossibleWeight);

console.log(possibleWeights.length > 0 ? possibleWeights.join('\n') : -1);
