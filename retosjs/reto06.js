/*
Programa con la capacidad de crear cubos de las dimensiones que reciba como parámetros.
Para crear los cubos se le pasa un número con el tamaño deseado al programa y este devuelve 
un string con el diseño de ese tamaño. Por ejemplo, si le pasamos un 3, el programa debe devolver un cubo de 3x3x3:

const cube = createCube(3)
  /\_\_\_\
 /\/\_\_\_\
/\/\/\_\_\_\
\/\/\/_/_/_/
 \/\/_/_/_/
  \/_/_/_/
  
A tener en cuenta:

Fíjate bien en los espacios en blanco que hay en el cubo.
El cubo tiene que ser simétrico.
Asegúrate de usar los símbolos correctos.
Cada nueva línea del cubo debe terminar con un salto de línea (\n) excepto la última.
*/    

function createCube(size) {
    let apertura = "";
    let cierre = "";
    for (let i = 0; i < size; i++) {
        apertura += " ".repeat(size-(i+1)) + "/\\".repeat(i+1) + "_\\".repeat(size) + "\n";
        cierre += " ".repeat(i) + "\\/".repeat(size-i) + "_/".repeat(size) + "\n";
    }
    return apertura + cierre.trimEnd();
}

console.log(createCube(3));
