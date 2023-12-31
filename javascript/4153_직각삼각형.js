const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\n/)
  .slice(0, -1)
  .map((string) => string.split(' ').map(Number));

const isRightTriangle = (triangle) => {
  const [a, b, c] = triangle.sort((a, b) => a - b);

  return a ** 2 + b ** 2 === c ** 2;
};

console.log(input.map((triangle) => (isRightTriangle(triangle) ? 'right' : 'wrong')).join('\n'));
