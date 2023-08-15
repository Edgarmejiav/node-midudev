import os from "node:os"
console.log("informacion del sistema operativo:")

console.log("Sistema operativo:", os.platform());
console.log("Version del sistema operativo:", os.release());
console.log("Memoria total:", os.totalmem()/1024/1024, "bytes");
console.log("Memoria libre:", os.freemem()/1024/1024, "bytes");
console.log("Memoria disponible:",( os.totalmem() - os.freemem()) /1024/1024, "bytes");
//arquitectura del sistema
console.log("Arquitectura del sistema:", os.arch());
//updatime
console.log("Tiempo encendido:", os.uptime()/60/60, "horas");