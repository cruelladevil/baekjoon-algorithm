const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(/\n/).slice(0, -1);

const checkPalindrome = (string) => {
  let left = 0;
  let right = string.length - 1;

  while (left <= right) {
    if (string.charAt(left) !== string.charAt(right)) {
      return false;
    }

    left += 1;
    right -= 1;
  }

  return true;
};

console.log(input.map((string) => (checkPalindrome(string) ? 'yes' : 'no')).join('\n'));
