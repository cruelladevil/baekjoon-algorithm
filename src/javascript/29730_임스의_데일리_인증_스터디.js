const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(/\r?\n/).slice(1);

const bojRegExp = new RegExp(/boj\.kr\/\d+/);

input.sort((a, b) => {
  if (bojRegExp.test(a) && bojRegExp.test(b)) {
    return Number(a.replace('boj.kr/', '')) - Number(b.replace('boj.kr/', ''));
  }

  if (bojRegExp.test(a)) {
    return 1;
  }

  if (bojRegExp.test(b)) {
    return -1;
  }

  if (a.length === b.length) {
    return a > b ? 1 : -1;
  }

  return a.length - b.length;
});

console.log(input.join('\n'));
