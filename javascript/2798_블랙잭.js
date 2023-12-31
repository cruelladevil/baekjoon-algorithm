const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split('\n')
  .map((string) => string.split(' ').map(Number));

const [[n, max], cards] = input;

const blackjackFactory = (cards) => {
  let maxSum = 0;

  return function maxBlackjackSum(n, k, start = 0, curr = []) {
    if (curr.length === k) {
      const sum = curr.map((index) => cards[index]).reduce((acc, cur) => acc + cur, 0);

      if (sum <= max && sum > maxSum) {
        maxSum = sum;
      }

      return;
    }

    for (let i = start; i < n; i += 1) {
      curr.push(i);
      maxBlackjackSum(n, k, i + 1, curr);
      curr.pop();
    }

    return maxSum;
  };
};

const maxBlackjackSum = blackjackFactory(cards);

console.log(maxBlackjackSum(n, 3));
