/*  >> ESCOPO DA CONDIÇÃO MÚLTIPLA <<

    Para utilziar a condição múltipla, precisamos do comando switch().
    Dentro do comando switch() vamos utilizar as cláusulas case, que basicamente são as opções de resultado e no final, depois das cláusulas case adicionadas sempre tem o default, pra caso nenhuma das cláusulas case seja atendida.

    IMPORTANTE: Tem um comando ~ break  ~  para cada cláusula case que não pode esquever de colocar. É obrigatório.

        Exemplo:

            switch(expressão) {
                case valor 1:
                    resultado desejado
                    break
                case valor 2:
                    resultado desejado
                    break
                case valor 3:
                    resultado desejado
                    break
                default:
                    saída desejada
                    break
            }
 E assim por diante. É dessa forma que funcionam as condições múltiplas.
*/

// Abaixo, Exemplo Funcional:

var agora = new Date()
var diaSem = agora.getDay()

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça-Feira')
        break
    case 3:
        console.log('Quarta-Feira')
        break
    case 4:
        console.log('Quinta-Feira')
        break
    case 5:
        console.log('Sexta-Feira')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] número inválido.')
        break
}


