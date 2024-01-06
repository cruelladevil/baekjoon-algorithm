const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(/\r?\n/).slice(1).map(Number);

class MaxHeap {
  #heap;

  constructor() {
    this.#heap = [];
  }

  get size() {
    return this.#heap.length;
  }

  parent(index) {
    return Math.floor((index - 1) / 2);
  }

  left(index) {
    return index * 2 + 1;
  }

  right(index) {
    return index * 2 + 2;
  }

  insert(value) {
    this.#heap.push(value);
    this.bubbleUp(this.size - 1);
  }

  remove() {
    const min = this.#heap[0];

    this.swap(0, this.size - 1);
    this.#heap.pop();
    this.bubbleDown(0);

    return min;
  }

  bubbleUp(k) {
    let index = k;

    while (index > 0 && this.#heap[index] > this.#heap[this.parent(index)]) {
      this.swap(index, this.parent(index));
      index = this.parent(index);
    }
  }

  bubbleDown(k) {
    let index = k;

    while (this.left(index) <= this.size - 1) {
      let older = this.left(index);

      if (this.right(index) <= this.size - 1 && this.#heap[this.right(index)] > this.#heap[older]) {
        older = this.right(index);
      }

      if (this.#heap[index] > this.#heap[older]) {
        break;
      }

      this.swap(index, older);
      index = older;
    }
  }

  swap(i, j) {
    [this.#heap[i], this.#heap[j]] = [this.#heap[j], this.#heap[i]];
  }
}

const maxHeap = new MaxHeap();
const result = [];

input.forEach((number) => {
  if (number === 0) {
    if (maxHeap.size === 0) {
      maxHeap.insert(0);
    }
    result.push(maxHeap.remove());
  } else {
    maxHeap.insert(number);
  }
});

console.log(result.join('\n'));
