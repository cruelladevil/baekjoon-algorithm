const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(/\r?\n/).map(Number);
const [topBurger, middleBurger, bottomBurger, sprite, coke] = input;

console.log(Math.min(topBurger, middleBurger, bottomBurger) + Math.min(sprite, coke) - 50);
