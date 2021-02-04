// Funçao que chama ela mesma dentro da própria função
// Esse conceito é chamado de RECURSIVIDADE (* pesquisar sobre)
function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))