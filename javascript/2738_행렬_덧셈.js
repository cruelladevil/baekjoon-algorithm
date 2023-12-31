const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(/\n/);

const [size, ...matrices] = input;
const [n, m] = size.split(' ');

const matrixA = matrices.slice(0, n).map((string) => string.split(' ').map(Number));
const matrixB = matrices.slice(n).map((string) => string.split(' ').map(Number));

const sumMatrix = Array.from({ length: n }, (_, i) => {
  return Array.from({ length: m }, (_, j) => matrixA[i][j] + matrixB[i][j]);
});

console.log(sumMatrix.map((row) => row.join(' ')).join('\n'));
