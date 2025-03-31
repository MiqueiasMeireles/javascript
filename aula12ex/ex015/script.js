function verificar() {
    let data = new Date
    let anoAtual = data.getFullYear()
    let anoNasc = document.getElementById('anoNasc').value
    let res = document.getElementById('res')

    if (anoNasc.length == 0 || anoNasc > anoAtual) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let radsex = document.getElementsByName('radsex')
        let idade = anoAtual - anoNasc
        let sexo = '' 
        let img = document.createElement('img') //https://youtu.be/f5es-PpaUI8?list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1&t=932
        img.setAttribute('id', 'foto')
        if (radsex[0].checked) {
            sexo = 'Homem'
            if (idade >=0 && idade < 10) {
               //criança 
               img.setAttribute('src', 'imagens/menino.jpg')
            }else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/jovemhomem.jpg')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/homem.jpg')
            }else {
                //idoso
                img.setAttribute('src', 'imagens/idoso.jpg')
            }
        } else if (radsex[1].checked) {
            sexo = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança 
                img.setAttribute('src', 'imagens/menina.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/jovemmulher.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/mulher.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Foi detectado: <strong>${sexo} com ${idade} anos.</strong>`
        res.appendChild(img)
    }
}