/*
Los renos tienen un límite máximo de peso que será el doble de la longitud de sus nombres, los paquetes pesan la longitud de su nombre.
El programa debe calcular el máximo número de paquetes de regalos que pueden llevar los renos
Ten encuenta que:
    El paquete de regalos no se puede dividir.
    La longitud de los nombres de regalos y renos siempre será mayor que 0.
*/

function distributeGifts(packOfGifts, reindeers) {
    return Math.floor(reindeers.join("").length*2/packOfGifts.join("").length);
}

const caja = ['game', 'videoconsole', 'computer'];
const renos = ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd'];


console.log(distributeGifts(caja, renos)); 
