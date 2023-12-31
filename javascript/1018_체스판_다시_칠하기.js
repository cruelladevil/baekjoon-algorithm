const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n').slice(1);

const WHITE = 'W';
const BLACK = 'B';
const SLICED_BOARD_SIDE_LENGTH = 8;

const n = input.length;
const m = input[0].length;

const calMinPaintCountOnSquare = (board, rowStart, colStart, sideLength) => {
  let paintCount = 0;

  for (let row = rowStart; row < rowStart + sideLength; row += 1) {
    const isEvenRow = (row & 1) === 0;
    const isOddRow = (row & 1) === 1;

    for (let col = colStart; col < colStart + sideLength; col += 1) {
      const isEvenCol = (col & 1) === 0;
      const isOddCol = (col & 1) === 1;
      const curr = board[row][col];

      const whiteArea = (isEvenRow && isEvenCol) || (isOddRow && isOddCol);

      if (whiteArea && curr !== WHITE) {
        paintCount += 1;
      }
      if (!whiteArea && curr !== BLACK) {
        paintCount += 1;
      }
    }
  }

  return paintCount < sideLength ** 2 / 2 ? paintCount : sideLength ** 2 - paintCount;
};

let minPaintCount = Number.MAX_SAFE_INTEGER;

for (let row = 0; row <= n - SLICED_BOARD_SIDE_LENGTH; row += 1) {
  for (let col = 0; col <= m - SLICED_BOARD_SIDE_LENGTH; col += 1) {
    minPaintCount = Math.min(minPaintCount, calMinPaintCountOnSquare(input, row, col, SLICED_BOARD_SIDE_LENGTH));
  }
}

console.log(minPaintCount);
