function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date
    let hora = data.getHours()
    let minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} mintos`

    if (hora > 0 && hora < 12) {
        img.src = 'imagens/fotomanha.png'
        document.body.style.background = '#dacc7d'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'imagens/fototarde.jpg'
        document.body.style.background = '#56314A'
    } else {
        img.src = 'imagens/fotonoite.jpg'
        document.body.style.background = '#12203B'
    }
}

//cores: m-#E8A76E t-#9B676D n-#12203B