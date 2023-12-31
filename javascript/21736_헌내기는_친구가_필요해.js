const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');
const [size, ...matrix] = input;
const [n, m] = size.split(' ').map(Number);
const campus = matrix.map((string) => string.split(''));

const WALL = 'X';
const DOYEON = 'I';
const PERSON = 'P';
const MARKED = 'M';

const NO_MEET = 'TT';

let visitedPeopleCount = 0;

const move = (row, col) => {
  const isOutOfCampus = row < 0 || row >= n || col < 0 || col >= m;

  if (isOutOfCampus || campus[row][col] === WALL || campus[row][col] === MARKED) {
    return;
  }

  if (campus[row][col] === PERSON) {
    visitedPeopleCount += 1;
  }

  campus[row][col] = MARKED;

  move(row - 1, col);
  move(row + 1, col);
  move(row, col - 1);
  move(row, col + 1);
};

for (let row = 0; row < n; row += 1) {
  for (let col = 0; col < m; col += 1) {
    if (campus[row][col] === DOYEON) {
      move(row, col);
    }
  }
}

console.log(visitedPeopleCount > 0 ? visitedPeopleCount : NO_MEET);
