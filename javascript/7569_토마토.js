const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\r?\n/)
  .map((string) => string.split(' ').map(Number));
const [[m, n, h], ...matrices] = input;

const RIPPED_TOMATO = 1;
const TOMATO = 0;

const directions = [
  [-1, 0, 0],
  [1, 0, 0],
  [0, -1, 0],
  [0, 1, 0],
  [0, 0, -1],
  [0, 0, 1],
];
const tensor = Array.from({ length: h }, (_, i) => matrices.slice(n * i, n * (i + 1)));

const ripen = () => {
  const queue = [];
  let minDay = 0;

  for (let height = 0; height < h; height += 1) {
    for (let row = 0; row < n; row += 1) {
      for (let col = 0; col < m; col += 1) {
        if (tensor[height][row][col] === RIPPED_TOMATO) {
          queue.push([[height, row, col], 0]);
        }
      }
    }
  }

  for (let i = 0; i < queue.length; i += 1) {
    const [[height, row, col], day] = queue[i];

    directions.forEach(([dHeight, dRow, dCol]) => {
      const newHeight = height + dHeight;
      const newRow = row + dRow;
      const newCol = col + dCol;
      const isInTensor = newHeight >= 0 && newHeight < h && newRow >= 0 && newRow < n && newCol >= 0 && newCol < m;

      if (isInTensor && tensor[newHeight][newRow][newCol] === TOMATO) {
        queue.push([[newHeight, newRow, newCol], day + 1]);
        tensor[newHeight][newRow][newCol] = RIPPED_TOMATO;
        minDay = day + 1;
      }
    });
  }

  for (let height = 0; height < h; height += 1) {
    for (let row = 0; row < n; row += 1) {
      for (let col = 0; col < m; col += 1) {
        if (tensor[height][row][col] === TOMATO) {
          return -1;
        }
      }
    }
  }

  return minDay;
};

console.log(ripen());
