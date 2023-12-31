const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const [size, ...rest] = input;
const [n] = size.split(' ').map(Number);
const sitePasswords = rest.slice(0, n);
const sites = rest.slice(n);

const sitePasswordMap = new Map(sitePasswords.map((string) => string.split(' ')));
const passwords = sites.map((site) => sitePasswordMap.get(site));

console.log(passwords.join('\n'));
