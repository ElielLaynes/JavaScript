
function carregar() {
var msg = document.getElementById('msg')
var imag = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
    // Bom dia
    imag.src = 'manha.png'
} else if (hora >= 12 && hora < 18) {
    // Boa tarde
    imag.src = 'tarde.png'
} else {
    imag.src = 'noite.png'
}
}