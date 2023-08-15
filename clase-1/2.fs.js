const fs = require('node:fs');
const  stats = fs.statSync('./archivo.txt');
console.log(stats.isFile(), stats.size);

const text = fs.readFileSync('./archivo.txt', 'utf-8');

console.log(text);
const text2 = fs.readFileSync('./archivo2.txt', 'utf-8');

console.log(text2);