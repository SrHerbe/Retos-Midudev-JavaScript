/* 
Crea un programa que envuelva con "*" los regalos

const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped)
[
  "*****\\n*cat*\\n*****",
  "******\\n*game*\\n******",
  "*******\\n*socks*\\n*******"
] 

*/

function wrapping(gifts) {
    //Map reitera todo el array
    return gifts.map((item) => {
        const cobertura = "*".repeat(item.length+2);
        const regalo = "*"+item+"*";
        const devolver = [cobertura, regalo, cobertura].join("\n");
        return devolver;
    });
}

const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped)
