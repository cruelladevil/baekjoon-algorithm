const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\r?\n/)
  .slice(1)
  .map((string) => string.split(' ').map(Number));

const START = 1;
const END = 100;

const diceNumbers = Array.from({ length: 6 }, (_, i) => i + 1);
const board = Array.from({ length: END + 1 }, (_, i) => i);

input.forEach(([from, to]) => {
  board[from] = to;
});

const bfs = (start) => {
  const queue = [{ position: start, step: 0 }];
  const visited = Array.from({ length: END + 1 }, () => false);

  for (let i = 0; i < queue.length; i += 1) {
    const { position: curr, step } = queue[i];

    if (curr === END) {
      return step;
    }

    diceNumbers.forEach((dice) => {
      const next = board[curr + dice];

      if (!visited[next]) {
        visited[next] = true;
        queue.push({ position: next, step: step + 1 });
      }
    });
  }
};

console.log(bfs(START));
