const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(/\r?\n/);
const [size, ...strings] = input;
const [n] = size.split(' ');

const pokemons = strings.slice(0, n);
const questions = strings.slice(n);

const pokemonMap = new Map(pokemons.map((name, index) => [name, index + 1]));

const answers = questions.map((value) => {
  if (Number.isInteger(Number(value))) {
    return pokemons[Number(value) - 1];
  } else {
    return pokemonMap.get(value);
  }
});

console.log(answers.join('\n'));
