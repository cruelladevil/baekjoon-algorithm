const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(' ').map(Number);
const [a, b] = input;

const generateComparisonResult = (a, b) => {
  if (a === b) {
    return '==';
  }

  return a > b ? '>' : '<';
};

console.log(generateComparisonResult(a, b));
