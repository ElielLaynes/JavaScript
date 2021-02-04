
function carregar() {
var msg = document.getElementById('msg')
var imag = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
// var de teste -> var hora = 8
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
    // Bom dia
    imag.src = 'manha.png'
    document.body.style.background = '#445b48'
} else if (hora >= 12 && hora < 18) {
    // Boa tarde
    imag.src = 'tarde.png'
    document.body.style.background = '#c37728'
} else {
    imag.src = 'noite.png'
    document.body.style.background = '#063641'
}
}