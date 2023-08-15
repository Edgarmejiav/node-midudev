import fs from 'fs/promises'
console.log("informacion :")
const text = await fs.readFile('./archivo.txt', 'utf-8')
console.log(text)
console.log("Haciendo cosas...")
console.log("Haciendo cosas...")
console.log("Haciendo cosas...")
const text2 = await fs.readFile('./archivo2.txt', 'utf-8')
console.log(text2)
