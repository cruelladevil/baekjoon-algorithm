const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim();
const score = Number(input);

const calRank = (score) => {
  if (score >= 90) {
    return 'A';
  } else if (score >= 80) {
    return 'B';
  } else if (score >= 70) {
    return 'C';
  } else if (score >= 60) {
    return 'D';
  } else {
    return 'F';
  }
};

console.log(calRank(score));
