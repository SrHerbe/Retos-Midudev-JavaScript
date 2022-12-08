/*
Nos han pedido que escribamos un programa que nos diga qué regalos hay que comprar para reponer en nuestros almacenes
ahora que se acerca la Navidad. Un regalo se tiene que reponer cuando sólo hay stock en uno de los tres almacenes.
*/

function getGiftsToRefill(a1, a2, a3) {
  /* EXPLICACIÓN
  1. El operador "..." nos permite copiar los valores del array.
  2. El objeto set nos permite almacenar valores de manera que no se repita ninguno.
  - Una vez ya tenemos un array con todos los valores de los 3 arrays de manera que no se repite ninguno debemos filtrar que solo exista en uno.
  3. Aplicamos un filtro. Sumará 1 si se encuentra el valor búscado en un almacen. 
     De manera que si la suma total es 1 significa que ese valor solo se encuentra en un almacen.
  */
  return [...new Set([...a1, ...a2, ...a3])].filter((v) => a1.includes(v) + a2.includes(v) + a3.includes(v) === 1);
}

const a1 = ['bici', 'coche', 'bici', 'bici'];
const a2 = ['coche', 'bici', 'muñeca', 'coche'];
const a3 = ['bici', 'pc', 'pc'];

console.log(getGiftsToRefill(a1, a2, a3));
