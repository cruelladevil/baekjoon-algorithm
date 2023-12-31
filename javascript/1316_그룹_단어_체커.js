const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(/\r?\n/).slice(1);

const isGroupWord = (word) => {
  const set = new Set(word.charAt(0));
  let prev = word.charAt(0);

  for (let i = 1; i < word.length; i += 1) {
    const char = word.charAt(i);

    if (prev === char) {
      continue;
    }

    if (!set.has(char)) {
      set.add(char);
      prev = char;
    } else {
      return false;
    }
  }

  return true;
};

console.log(input.filter(isGroupWord).length);
