const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(/\r?\n/);
const [size, ...numbers] = input;
const n = Number(size);
const matrix = numbers.map((string) => string.split('').map(Number));

const HOUSE = 1;
const MARKED = -1;

const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const calApartmentArea = (row, col) => {
  const isOutOfMatrix = row < 0 || row >= n || col < 0 || col >= n;

  if (isOutOfMatrix || matrix[row][col] !== HOUSE) {
    return 0;
  }

  matrix[row][col] = MARKED;

  return 1 + directions.reduce((totalArea, [dRow, dCol]) => totalArea + calApartmentArea(row + dRow, col + dCol), 0);
};

const apartmentAreas = [];

for (let row = 0; row < n; row += 1) {
  for (let col = 0; col < n; col += 1) {
    if (matrix[row][col] === HOUSE) {
      apartmentAreas.push(calApartmentArea(row, col));
    }
  }
}

apartmentAreas.sort((a, b) => a - b);

console.log(apartmentAreas.length);
console.log(apartmentAreas.join('\n'));
