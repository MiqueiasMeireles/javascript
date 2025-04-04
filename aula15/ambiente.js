let num = [5,8,9,2,3]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} elementos`)
console.log(`O 1º valor é o número ${num[0]}`)

let pos = num.indexOf(8)
if (pos == -1) {
    console.log('O valor não foi encontrado')
}else
console.log(`O Valor 8 está na posição ${pos}`)