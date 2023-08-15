const path = require('path');

// barra separadora de rutas segundo el sistema operativo
console.log(path.sep)

const  base = path.basename('/tmp/./archivo.txt')
console.log(base)

const  filename = path.basename('/tmp/./archivo.txt',".txt")
console.log(filename)

const extencion = path.extname('/tmp/./archivo.txt')
console.log(extencion)