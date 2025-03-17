let agora = new Date()
let hora = agora.getHours()
let minutos = agora.getMinutes()
console.log(`Agora são extamamente ${hora} hora(s) e ${minutos} minuto(s).`)
if (hora < 6 || hora == 24){
    console.log('Boa madrugada')
}else if (hora < 12){
    console.log('Bom dia')
}else if (hora <= 18) {
    console.log('Boa tarde')
}else {
    console.log('Boa noite')
}