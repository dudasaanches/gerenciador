var receitas = JSON.parse(localStorage.getItem("receitas")) || []
var gastos = JSON.parse(localStorage.getItem("gastos")) || []
var totalGastos = 0
var totalReceitas = 0

var form_receita = document.getElementById("form_receita")

var form_gastos = document.getElementById("form_gastos")


form_receita.addEventListener('submit', function(event){
    event.preventDefault()

    var nomeR = document.getElementById("nomeR")
    var numR = document.getElementById("numR")
    var textoR = document.getElementById("textoR")

    receitas.push({
        valor: parseFloat(numR.value),
        nome: nomeR.value
    })


    var string = JSON.stringify(receitas)
    localStorage.setItem("receitas", string)

    calcularReceitas()
    
})


function calcularReceitas() {
    var itens = localStorage.getItem("receitas")
    itens = JSON.parse(itens)

    totalReceitas = 0

    for(receita of itens) {
        totalReceitas += receita.valor
    }
    
    textoR.innerHTML = totalReceitas
    console.log(totalReceitas)
}


form_gastos.addEventListener('submit', function(event){
    event.preventDefault()

    var nomeG = document.getElementById("nomeG")
    var numG = document.getElementById("numG")
    var textoG = document.getElementById("textoG")

    gastos.push({
        valor: parseFloat(numG.value),
        nome: nomeG.value
    })

    var string = JSON.stringify(gastos)
    localStorage.setItem("gastos", string)

    calcularGastos()
})

function calcularGastos() {
    var itens = localStorage.getItem("gastos")
    itens = JSON.parse(itens)
    totalGastos = 0

    for(gasto of gastos) {
        totalGastos += gasto.valor
    }textoG.innerHTML = totalGastos
    
    console.log(totalGastos)
}



calcularReceitas()
calcularGastos()