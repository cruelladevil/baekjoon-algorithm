const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\r?\n/)
  .slice(1)
  .map((string) => string.split(' ').map(Number));

input.sort(([startA, endA], [startB, endB]) => {
  if (endA === endB) {
    return startA - startB;
  }
  return endA - endB;
});

const { meetingCount } = input.reduce(
  ({ endTime, meetingCount }, [start, end]) => {
    if (start >= endTime) {
      return { endTime: end, meetingCount: meetingCount + 1 };
    }
    return { endTime, meetingCount };
  },
  { endTime: 0, meetingCount: 0 },
);

console.log(meetingCount);
