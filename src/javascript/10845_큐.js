const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\n/)
  .slice(1)
  .map((string) => string.split(' '));

class Queue {
  #values;

  constructor() {
    this.#values = [];
  }

  get size() {
    return this.#values.length;
  }

  get empty() {
    return this.size === 0 ? 1 : 0;
  }

  get front() {
    return this.#values[0] ?? -1;
  }

  get back() {
    return this.#values[this.#values.length - 1] ?? -1;
  }

  push(value) {
    this.#values.push(value);
  }

  pop() {
    return this.#values.shift() ?? -1;
  }
}

const PUSH = 'push';
const POP = 'pop';
const SIZE = 'size';
const EMPTY = 'empty';
const FRONT = 'front';
const BACK = 'back';

const commands = {
  [PUSH]: (queue, value) => queue.push(value),
  [POP]: (queue) => queue.pop(),
  [SIZE]: (queue) => queue.size,
  [EMPTY]: (queue) => queue.empty,
  [FRONT]: (queue) => queue.front,
  [BACK]: (queue) => queue.back,
};

const queue = new Queue();
const history = [];

input.forEach(([command, value]) => {
  const action = commands[command];
  const result = action(queue, Number(value));

  if (result !== undefined) {
    history.push(result);
  }
});

console.log(history.join('\n'));
