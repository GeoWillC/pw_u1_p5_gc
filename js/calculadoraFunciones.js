
function sumarNumerosCompleto() {
    var n1 = parseInt(document.getElementById('idnumero1').value);
    var n2 = parseInt(document.getElementById('idnumero2').value);


    console.log(' Function sumar numeros' + n1);
    console.log(' Function sumar numeros' + n2);

    var resultado = n1 + n2;
    console.log(resultado);
    document.getElementById('idResultado2').innerText = resultado;
}

function restarNumeros(){
    var n1 = parseInt(document.getElementById('idnumero1').value);
    var n2 = parseInt(document.getElementById('idnumero2').value);


    console.log(' Function restar numeros' + n1);
    console.log(' Function restar numeros' + n2);

    var resultado = n1 - n2;
    console.log(resultado);
    document.getElementById('idResultado2').innerText = resultado;
}

function divNumeros(){
    var n1=parseInt(document.getElementById('idnumero1').value);
    var n2=parseInt(document.getElementById('idnumero2').value);
    console.log('Function dividir numeros'+ n1);
    console.log(' Function dividir numeros' + n2);

    var resultado = n1 / n2;
    console.log(resultado);
    document.getElementById('idResultado2').innerText = resultado;
}

function mulNumeros(){
    var n1=parseInt(document.getElementById('idnumero1').value);
    var n2=parseInt(document.getElementById('idnumero2').value);
    console.log('Function multiplicar numeros'+ n1);
    console.log(' Function multiplicar numeros' + n2);

    var resultado = n1 * n2;
    console.log(resultado);
    document.getElementById('idResultado2').innerText = resultado;
}
function imgCambia(){
    document.getElementById('idimg1').src='https://banner2.cleanpng.com/20171128/334/autumn-red-leaf-png-clipart-image-5a1d63fa805255.6938363915118755785256.jpg' 
}