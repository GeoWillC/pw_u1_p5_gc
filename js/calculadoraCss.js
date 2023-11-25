
const parsear = (id) => parseInt(document.getElementById(id).value)
// const valor=String.prototype.split("+")

function resultado(){
    console.log(valoresTexto)
}
function limpiar(){
    var cleanText = '';
    document.getElementById('respuesta').innerText=cleanText
    texto=cleanText
    total=0
}

var texto = "";
var total = 0
function agregarValor(value) {
    texto+=value
    console.log(texto)
    console.log(typeof(texto))
    // Obtener el campo de entrada por su ID
    document.getElementById('respuesta').innerText=texto
}
function operar(){
    
    if(texto.includes('+')){
        console.log('Suma')
        division=texto.split('+')
        for(const valor of division){
            console.log(total)
            total += parseInt(valor)
        }
        // console.log(parseInt(division[0])+parseInt(division[1]))
        console.log(total)
        document.getElementById('respuesta').innerText=total
    }
    if(texto.includes('-')){
        console.log('Resta')
        division=texto.split('-')
        // primer valor se mantiene
        total=division[0]
        for(var i=1;i<division.length;i++){
            console.log(total)
            total -= parseInt(division[i])
        }
        // console.log(parseInt(division[0])-parseInt(division[1]))
        console.log(total)
        document.getElementById('respuesta').innerText=total
    }
    if(texto.includes('x')){
        console.log('Multiplicación')
        division=texto.split('x')
        total=division[0]
        for(var i=1;i<division.length;i++){
            console.log(total)
            total *= parseInt(division[i])
             //console.log(parseInt(division[0])*parseInt(division[1]))
        }
        console.log(total)
        document.getElementById('respuesta').innerText=total
    }
    if(texto.includes('/')){
        console.log('Division')
        division=texto.split('/')
        console.log('Multiplicación')
        division=texto.split('/')
        total=division[0]
        for(var i=1;i<division.length;i++){
            console.log(total)
            total /= parseInt(division[i])
            //console.log(parseInt(division[0])/parseInt(division[1]))
        }
        console.log(total)
        document.getElementById('respuesta').innerText=total
    } 
}
const operacion={
    operador1: Number,
    operador2: Number,
    operando3: Text
}



