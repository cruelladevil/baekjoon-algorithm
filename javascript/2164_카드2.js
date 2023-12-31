const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim();
const n = Number(input);

let cards = Array.from({ length: n }, (_, i) => i + 1);

while (cards.length > 1) {
  const evenIndexCards = Array.from({ length: Math.floor(cards.length / 2) }, (_, i) => cards[2 * i + 1]);

  if ((cards.length & 1) === 0) {
    cards = evenIndexCards;
  } else {
    cards = [cards[cards.length - 1], ...evenIndexCards];
  }
}

console.log(cards[0]);
