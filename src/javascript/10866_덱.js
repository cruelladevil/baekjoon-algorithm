const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\n/)
  .slice(1)
  .map((string) => string.split(' '));

class Deque {
  #queue;

  constructor() {
    this.#queue = [];
  }

  get size() {
    return this.#queue.length;
  }

  get empty() {
    return this.size === 0 ? 1 : 0;
  }

  get front() {
    return this.#queue[0] ?? -1;
  }

  get back() {
    return this.#queue[this.size - 1] ?? -1;
  }

  push_front(value) {
    this.#queue.unshift(value);
  }

  push_back(value) {
    this.#queue.push(value);
  }

  pop_front() {
    return this.#queue.shift() ?? -1;
  }

  pop_back() {
    return this.#queue.pop() ?? -1;
  }
}

const PUSH_FRONT = 'push_front';
const PUSH_BACK = 'push_back';
const POP_FRONT = 'pop_front';
const POP_BACK = 'pop_back';
const SIZE = 'size';
const EMPTY = 'empty';
const FRONT = 'front';
const BACK = 'back';

const commands = {
  [PUSH_FRONT]: (deque, value) => deque.push_front(value),
  [PUSH_BACK]: (deque, value) => deque.push_back(value),
  [POP_FRONT]: (deque) => deque.pop_front(),
  [POP_BACK]: (deque) => deque.pop_back(),
  [SIZE]: (deque) => deque.size,
  [EMPTY]: (deque) => deque.empty,
  [FRONT]: (deque) => deque.front,
  [BACK]: (deque) => deque.back,
};

const deque = new Deque();
const history = [];

input.forEach(([command, value]) => {
  const action = commands[command];
  const result = action(deque, Number(value));

  if (result !== undefined) {
    history.push(result);
  }
});

console.log(history.join('\n'));
