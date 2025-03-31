function Gerar() {
    let num = document.getElementById('num').value
    let tab = document.getElementById('seltab')
    if (num.length == 0) {
        alert('Preencha o campo')
    }else {
        let n = Number(num)
        tab.innerHTML = ''
        for(let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            tab.appendChild(item)
            
        }   
    }

    
}

    