const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\r?\n/)
  .map((string) => string.split(' ').map(Number));
const [[n], ...edges] = input;

const graph = Array.from({ length: n }, (_, row) => {
  return Array.from({ length: n }, (_, col) => (row === col ? 0 : Infinity));
});

edges.slice(0, -1).forEach(([from, to]) => {
  graph[from - 1][to - 1] = 1;
  graph[to - 1][from - 1] = 1;
});

for (let k = 0; k < n; k += 1) {
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
    }
  }
}

const scores = graph.map((row) => Math.max(...row));
const minScore = Math.min(...scores);
const misScoreCandidates = scores
  .map((score, i) => ({ score, candidate: i + 1 }))
  .filter(({ score }) => score === minScore)
  .map(({ candidate }) => candidate);

console.log(minScore, misScoreCandidates.length);
console.log(misScoreCandidates.join(' '));
