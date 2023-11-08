const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(' ').map(Number);
const [n, k] = input;

const combinationFactory = () => {
  let combinationCount = 0;

  return function calCombination(n, k, start = 0, curr = []) {
    if (curr.length === k) {
      combinationCount += 1;
      return combinationCount;
    }

    for (let i = start; i < n; i += 1) {
      curr.push(i);
      calCombination(n, k, i + 1, curr);
      curr.pop();
    }

    return combinationCount;
  };
};

const calCombination = combinationFactory();

console.log(calCombination(n, k));
