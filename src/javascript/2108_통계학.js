const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n').map(Number);
const [n, ...numbers] = input;

numbers.sort((a, b) => a - b);

const getMean = (numbers) => {
  const mean = Math.round(numbers.reduce((acc, cur) => acc + cur / n, 0));

  return mean !== 0 ? mean : 0;
};

const getMedian = (numbers) => {
  return numbers[Math.floor(n / 2)];
};

const getMode = (numbers) => {
  const counter = new Map();

  numbers.forEach((number) => {
    if (counter.has(number)) {
      counter.set(number, counter.get(number) + 1);
    } else {
      counter.set(number, 1);
    }
  });

  const counts = Array
    .from(counter, ([number, count]) => ({ number, count }))
    .sort(({ count: countA }, { count: countB }) => countB - countA);

  const max = counts[0];
  const second = counts[1];

  return max.count === second?.count ? second.number : max.number;
};

const getRange = (numbers) => {
  return numbers[n - 1] - numbers[0];
};

console.log(getMean(numbers));
console.log(getMedian(numbers));
console.log(getMode(numbers));
console.log(getRange(numbers));
