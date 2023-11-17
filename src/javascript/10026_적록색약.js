const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split('\n')
  .slice(1)
  .map((string) => string.split(''));

const n = input.length;
const allColorMatrix = input.map((row) => [...row]);
const redGreenBlindnessMatrix = input.map((row) => row.map((color) => (color === 'R' ? 'G' : color)));

const MARKED = 'M';

const markColor = (matrix, row, col, color) => {
  const isOutOfMatrix = row < 0 || row >= n || col < 0 || col >= n;

  if (isOutOfMatrix || matrix[row][col] !== color) {
    return;
  }

  matrix[row][col] = MARKED;

  markColor(matrix, row - 1, col, color);
  markColor(matrix, row + 1, col, color);
  markColor(matrix, row, col - 1, color);
  markColor(matrix, row, col + 1, color);
};

let rgbColorArea = 0;
let redGreenBlindnessArea = 0;

for (let row = 0; row < n; row += 1) {
  for (let col = 0; col < n; col += 1) {
    if (allColorMatrix[row][col] !== MARKED) {
      markColor(allColorMatrix, row, col, allColorMatrix[row][col]);
      rgbColorArea += 1;
    }

    if (redGreenBlindnessMatrix[row][col] !== MARKED) {
      markColor(redGreenBlindnessMatrix, row, col, redGreenBlindnessMatrix[row][col]);
      redGreenBlindnessArea += 1;
    }
  }
}

console.log(rgbColorArea, redGreenBlindnessArea);
