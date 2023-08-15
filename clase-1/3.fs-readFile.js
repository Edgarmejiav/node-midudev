const fs = require('node:fs');

console.log("informacion :")
fs.readFile('./archivo.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
})
console.log("Haciendo cosas...")
console.log("Haciendo cosas...")
console.log("Haciendo cosas...")
fs.readFile('./archivo2.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
})