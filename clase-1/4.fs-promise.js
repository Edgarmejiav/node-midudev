const fs = require('node:fs/promises');

const {promisify} = require('node:util');
const readFilePromise = promisify(fs.readFile);
//
console.log("informacion :")
readFilePromise('./archivo.txt', 'utf-8').then((data) => {
    console.log(data)
})
console.log("Haciendo cosas...")
console.log("Haciendo cosas...")
console.log("Haciendo cosas...")
fs.readFile('./archivo2.txt', 'utf-8').then((data) => {
    console.log(data)
})

