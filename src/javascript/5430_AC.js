const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(/\r?\n/);
const [t, ...strings] = input;

const REVERSE = 'R';
const DELETE = 'D';
const FRONT = 'front';
const BACK = 'back';
const ERROR_MESSAGE = 'error';

const commands = {
  [FRONT]: (array) => array.shift(),
  [BACK]: (array) => array.pop(),
};

const ac = (input) => {
  const [func, n, arrayString] = input;
  const array = Number(n) > 0 ? arrayString.slice(1, -1).split(',') : [];
  let direction = FRONT;
  let reverseCount = 0;

  for (const command of func) {
    if (command === REVERSE) {
      direction = direction === FRONT ? BACK : FRONT;
      reverseCount += 1;
    } else if (command === DELETE && array.length > 0) {
      const action = commands[direction];
      action(array);
    } else {
      return ERROR_MESSAGE;
    }
  }

  return (reverseCount & 1) === 0 ? `[${array.join(',')}]` : `[${array.reverse().join(',')}]`;
};

console.log(Array.from({ length: Number(t) }, (_, i) => ac(strings.slice(i * 3, i * 3 + 3))).join('\n'));
