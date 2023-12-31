const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(/\n/).slice(1);

input.forEach((scoreString) => {
  let totalScore = 0;
  let currScore = 0;

  for (const score of scoreString) {
    if (score === 'O') {
      currScore += 1;
    } else {
      currScore = 0;
    }

    totalScore += currScore;
  }

  console.log(totalScore);
});
