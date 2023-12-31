const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(' ').map(Number);
const [n, k] = input;

const hideAndSeek = (tagger, target) => {
  const NOT_VISITED = -1;

  const times = Array.from({ length: 100001 }, () => NOT_VISITED);
  const queue = [[tagger]];
  let time = 0;

  while (times[target] === NOT_VISITED) {
    const positions = queue.shift();
    const nextPositions = [];

    positions.forEach((position) => {
      if (times[position] === NOT_VISITED && 0 <= position && position <= 100000) {
        nextPositions.push(position - 1, position + 1, position * 2);
        times[position] = time;
      }
    });

    queue.push(nextPositions);
    time += 1;
  }

  return times[target];
};

console.log(hideAndSeek(n, k));
