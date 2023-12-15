const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(/\r?\n/);
const [n, ...types] = input;

const calMbtiDistance = (a, b) => {
  let distance = 0;

  for (let i = 0; i < 4; i += 1) {
    if (a.charAt(i) !== b.charAt(i)) {
      distance += 1;
    }
  }

  return distance;
};

const calMostFriendlyMbtiDistance = (mbtis) => {
  if (mbtis.length > 32) {
    return 0;
  }

  let minDistance = 13;

  const combine = (start = 0, curr = []) => {
    if (curr.length === 3) {
      const [a, b, c] = curr;
      let distance = 0;

      distance += calMbtiDistance(a, b);
      distance += calMbtiDistance(b, c);
      distance += calMbtiDistance(c, a);

      minDistance = Math.min(minDistance, distance);
      return;
    }

    for (let i = start; i < mbtis.length; i += 1) {
      curr.push(mbtis[i]);
      combine(i + 1, curr);
      curr.pop();
    }
  };

  combine();

  return minDistance;
};

console.log(
  Array.from({ length: Number(n) }, (_, i) => {
    const mbtis = types.slice(i * 2 + 1, i * 2 + 2).flatMap((string) => string.split(' '));
    return calMostFriendlyMbtiDistance(mbtis);
  }).join('\n'),
);
