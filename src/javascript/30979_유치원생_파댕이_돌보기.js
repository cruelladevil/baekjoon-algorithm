const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\r?\n/)
  .map((string) => string.split(' ').map(Number));
const [[t], , candies] = input;

console.log(candies.reduce((totalTime, time) => totalTime + time, 0) >= t ? 'Padaeng_i Happy' : 'Padaeng_i Cry');
