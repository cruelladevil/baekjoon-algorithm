const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim();
const year = Number(input);

const checkLeapYear = (year) => {
  if (year % 4 === 0 && year % 100 !== 0) return true;
  if (year % 400 === 0) return true;

  return false;
};

console.log(checkLeapYear(year) ? 1 : 0);
