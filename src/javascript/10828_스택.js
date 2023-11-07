const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\n/)
  .slice(1)
  .map((string) => string.split(' '));

class Stack {
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

  get top() {
    return this.#values[this.#values.length - 1] ?? -1;
  }

  push(value) {
    this.#values.push(value);
  }

  pop() {
    return this.#values.pop() ?? -1;
  }
}

const PUSH = 'push';
const POP = 'pop';
const SIZE = 'size';
const EMPTY = 'empty';
const TOP = 'top';

const commands = {
  [PUSH]: (stack, value) => stack.push(value),
  [POP]: (stack) => stack.pop(),
  [SIZE]: (stack) => stack.size,
  [EMPTY]: (stack) => stack.empty,
  [TOP]: (stack) => stack.top,
};

const stack = new Stack();
const history = [];

input.forEach(([command, value]) => {
  const action = commands[command];
  const result = action(stack, Number(value));

  if (result !== undefined) {
    history.push(result);
  }
});

console.log(history.join('\n'));
