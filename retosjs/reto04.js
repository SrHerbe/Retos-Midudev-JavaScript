/* 
Recibimos objetos con 3 propiedades large, width and height (l,w,h) simulando ser medidas de paquetes.
El programa debe comprobar si los paquetes caben uno dentro de otro de tal manera que no se quede ninguno fuera.
Ten en cuenta que:
    Las cajas no se pueden rotar ya que los elfos nos han dicho que la máquina no está preparada.
    Las cajas pueden venir desordenadas de tamaño.
    Las cajas no son siempre cuadradas, pueden ser rectangulares.
*/

function fitsInOneBox(boxes) {
    /*
    1. Ordenamos el array de objetos con sort, abrimos una función dónde indicamos que todas las propiedades del objeto A 
    deben ir antes que las del objeto B. Retornamos -1 para que se efectue el cambio.

    2. Con every iteramos el array mientras la condición se cumpla.
    */

    return boxes.sort((a,b) => { if (a.l < b.l && a.w < b.w && a.h < b.h) {return -1}}).every((valor, key, array) => {   
        
        //Si no es la ultima posición: (porque no podemos comparar la ultima posición con la siguiente ya que no existe)
        if (key != array.length-1) {
            //Devolvemos true o false dependiendo si la caja actual cabe en la siguiente.
            return valor.l < array[key+1].l && valor.w < array[key+1].w && valor.h < array[key+1].h;
        } 
        //Si hemos llegado hasta la ultima posición significa que todas las medidas de las cajas son correctas y devolvemos true.
        else {
            return true;
        }
    });
}

console.log(fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 3, w: 1, h: 3 }
]));
