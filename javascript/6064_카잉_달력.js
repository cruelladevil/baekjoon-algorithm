const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\r?\n/)
  .slice(1)
  .map((string) => string.split(' ').map(Number));

const calGCD = (a, b) => {
  return a % b === 0 ? b : calGCD(b, a % b);
};

const calLCM = (a, b) => {
  return (a * b) / calGCD(a, b);
};

const convertCainCalendarToYear = ([m, n, x, y]) => {
  const maxYear = calLCM(m, n);
  let year = x;

  while (year <= maxYear) {
    if ((year - y) % n === 0) {
      break;
    }

    year += m;
  }

  if (year > maxYear) {
    return -1;
  }

  return year;
};

console.log(input.map(convertCainCalendarToYear).join('\n'));
