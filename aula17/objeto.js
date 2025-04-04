let amigo = { nome:'José', 
sexo:'M', 
peso: 85.4, 
engordar(p=0){
    if(p >= 1) {
    console.log(`Engordou ${p}Kg`)
    this.peso += p    
    }      
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)


/* CONTINUE AVANÇANDO!
-Functions
-Arrow function
-Callbacks
-Funções anônimas
-IIFE
-Orientação a objetos
-Modularização
-RegEx(expressões regulares)
-Json
-AJAX
-NodeJs
-Bibliotecas e frameworks(Jquery, vue,js, angular[...])
*/