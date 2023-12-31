const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim();
const n = Number(input);

const calCrossedRoomCount = (number) => {
  let num = number - 1;
  let count = 1;

  while (num > 0) {
    num -= 6 * count;
    count += 1;
  }

  return count;
};

console.log(calCrossedRoomCount(n));
