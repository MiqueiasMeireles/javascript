function Contar() {    
    let ini = Number(document.getElementById('i').value)
    let fim = Number(document.getElementById('f').value)
    let pass = Number(document.getElementById('p').value)
    let res = document.getElementById('res')
    res.innerHTML = " "

    if (document.getElementById('i').value.length == 0 || document.getElementById('f').value.length == 0 || document.getElementById('p').value.length == 0) {
        res.style.color = '#779107e8'
        res.innerHTML = 'Insira novamente'
    
    }else if (pass == 0) {
        alert('Passo inválido. Considerando PASSO 1')
        while (ini <= fim) {           
            res.innerHTML += ` &#x1F449 ${ini} `
            ini ++;
        }
    }else if(ini < fim) {  
        while (ini <= fim) {
        res.innerHTML += ` &#x1F449 ${ini} `
            ini += pass;
        }
    }else if (ini > fim ) {
        while (ini >= fim) {
            res.innerHTML += ` &#x1F449 ${ini} `
            ini -= pass;
        }
    res.innerHTML += '&#x1F3C1'    
    }          
}
