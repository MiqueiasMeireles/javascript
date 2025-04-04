let valores = [8,7,1,4,2,9]
/*  FORMA PADRÃO:

for(let pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
console.log(`Em ordem crescente: ${valores.sort()}`)

*/// FORMA SIMPLIFICADA:

for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
console.log(`Em ordem crescente: ${valores.sort()}`)
