let num = document.querySelector('input#num')
let lista = document.querySelector('select#lista')
let res = document.querySelector('div#res')
let valores = [] 

// Função para verificar se o valor é um número válido (entre 1 e 100)
function isNumero(n) { 
    if (Number(n) >= 1 && Number(n) <= 100) { // Verifica se o número está no intervalo permitido
        return true
    } else {
        return false
    }
}

// Função para verificar se o número já está na lista
function inLista(n, l) { 
    if (l.indexOf(Number(n)) != -1) { // Verifica se o número já existe no array
        return true  
    } else {
        return false
    }
}

// Função para adicionar um número à lista
function Adicionar() {
    // Verifica se o número é válido e não está na lista
    if (isNumero(num.value) && !inLista(num.value, valores)) { 
        valores.push(Number(num.value)) // Adiciona o número ao array
        let item = document.createElement('option') // Cria um novo elemento <option>
        item.text = `Valor ${num.value} adicionado` // Define o texto do <option>
        lista.appendChild(item) // Adiciona o <option> ao select
        res.innerHTML = '' // Limpa os resultados anteriores
    } else {
        window.alert('Valor inválido ou já encontrado na lista') // Exibe um alerta se o número for inválido ou duplicado
    }
    num.value = '' // Limpa o campo de entrada
    num.focus() // Foca novamente no campo de entrada
}

// Função para finalizar e exibir os resultados
function Finalizar() {
    if (valores.length == 0) { // Verifica se o array está vazio
        alert('Adicione valores antes de finalizar') // Exibe um alerta se não houver números na lista
    } else {
        let total = valores.length // Total de números cadastrados
        let menor = valores[0] // Inicializa o menor valor como o primeiro número do array
        let maior = valores[0] // Inicializa o maior valor como o primeiro número do array
        let soma = 0 // Inicializa a soma dos valores
        let media = 0 // Inicializa a média dos valores

        // Percorre o array para calcular soma, maior e menor valores
        for (let pos in valores) {
            soma += valores[pos] // Soma os valores
            if (valores[pos] > maior) { // Atualiza o maior valor
                maior = valores[pos]
            }
            if (valores[pos] < menor) { // Atualiza o menor valor
                menor = valores[pos]
            }
        }
        media = soma / total

        res.innerHTML = '' // Limpa os resultados anteriores
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando os os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
}