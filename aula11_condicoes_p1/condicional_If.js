// Condição IF simples

var vel = 50
console.log(`A velocidade do seu carro é ${vel} km/h`)
if (vel > 60) {
    console.log(`Você Ultrapassou a velocidade permitida. Multado!`)
} console.log(`Dirija sempre usando o cinto de segurança!`)


// Condição IF Composta
var país = 'EUA'
console.log(`Vivendo em ${país}`)
if(país == 'Brasil') {
    console.log('Você é Brasileiro')
} else {
    console.log('Você é Estrangeiro')
}




/*
    >> Condicional IF <<
        O if serve para fazer ações com base em treu e false. Basicamente determinada ação vai acontecer apenas se estiver de acordo com as condições requeridas.

        >>> Condional Simples - composta por um bloco de if. Expemplo

            if (5 > 2) if {
                true
            }

        >>> condicional "composta" - Composta por um bloco de if e outro de else(se não). Exemplo

            if (5 > 2) if {
                Maior
            } else {
                Menor
            }
*/