const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\r?\n/)
  .flatMap((string) => string.split(' ').map(Number));
const [, k, ...numbers] = input;
const coins = numbers.sort((a, b) => b - a);

let money = k;

const totalCoinCount = coins.reduce((totalCount, coin) => {
  const quotient = Math.floor(money / coin);
  money %= coin;

  return totalCount + quotient;
}, 0);

console.log(totalCoinCount);
