// Variáveis globais
let anum = [] // Array para armazenar os números
let lista = document.getElementById('lista') // Lista onde os números serão exibidos
let res = document.getElementById('res') // Div onde os resultados serão exibidos

function Adicionar() {
    if (res.innerHTML !== '') {
        
        res.innerHTML = '' // Limpa os resultados
    }
    let n = document.getElementById('num') // Captura o elemento do input
    let num = Number(n.value) // Converte o valor do input para número

    if (n.value === '' || anum.includes(num) || num > 100 || num <= 0) { // Validação
        alert('Valor inválido ou já encontrado na lista')
    } else {
        let item = document.createElement('option')
        item.text = `Valor ${num} adicionado`
        lista.appendChild(item) // Adiciona o número na lista visual
        anum.push(num) // Adiciona o número ao array
    }
    n.value = '' // Limpa o campo de entrada
    n.focus() // Foca no campo de entrada
}

function Finalizar() {
    if (anum.length === 0) { // Verifica se o array está vazio
        alert('Adicione valores antes de finalizar!')
        return
    }

    let total = `<p>Ao todo, temos ${anum.length} números cadastrados.</p>`

    // Ordenação correta dos números
    anum.sort((a, b) => a - b) // Ordena os números em ordem crescente

    // Menor e maior valores
    let menor = `<p>O menor valor informado foi ${anum[0]}.</p>`
    let maior = `<p>O maior valor informado foi ${anum[anum.length - 1]}.</p>`

    // Soma dos valores
    let soma = 0
    for (let i = 0; i < anum.length; i++) {
        soma += anum[i]
    }
    let somatxt = `<p>Somando todos os valores, temos ${soma}.</p>`

    // Média dos valores
    let media = soma / anum.length
    let mediatxt = `<p>A média dos valores é ${media}.</p>`
    // Exibe os resultados
    res.innerHTML = `${total} ${menor} ${maior} ${somatxt} ${mediatxt} ${anum}`
}

function Limpar() { //Limpa os dados
    anum = []
    lista.innerHTML = ''
    res.innerHTML = ''
}