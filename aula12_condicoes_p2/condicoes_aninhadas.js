/* Além das condicionais if, simples e composta, também há a condição aninhada.
Consiste basicamente em aninhar os IFs uns dentro dos outros. */

// menor de 16 anos não voto
// entre 16 e 18 anos e também 65 anos, o voto é opcional
// acima de 18 anos o voto é obrigatório
/*
var idade = 66
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log(`Não vota`)
} else if (idade < 18 || idade > 65 ) {
    console.log('Voto Opcional')
} else {
    console.log('Voto Obrigatório!')
}*/


// Comprimetar o usuário de acordo com a hora do dia

// iniciamnete vamos usar 3 opções: Bom dia, boa tarde e boa noite.
// Para pegar a hora do sitema pode-se utilizar o método new Date()

var hora_agora = new Date()
var hora = hora_agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12) {
    console.log('Bom Dia! :D')
} else if (hora <=18) {
    console.log(`Boa Tarde! ;)`)
} else {
    console.log(`Boa Noite! Zzz`)
}
