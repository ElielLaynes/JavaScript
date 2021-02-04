
let valores = [8, 1, 7, 4, 2, 9]
console.log(valores)
valores.sort() // Colocando os calores em ordem crescente
/*for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

// Estrutura mais simples para retonar a posição

// para cada posição em número na varável composta, eu vou mostar a posição do número.
for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

// Buscando valores dentro de um vetor, mais uma opção
// para isso, vamos utilizar o método   .indexOf(7)

valores.indexOf(7)