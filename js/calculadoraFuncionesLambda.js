const sumar = (n1, n2) => n1 + n2;

const sumarCompleto = () => {

    var resultado = parsear('idnumero1') + parsear('idnumero2');
    console.log(resultado);
    document.getElementById('idResultado2').innerText = resultado;
}

const restarCompleto = () => {

    var resultado = parsear('idnumero1') - parsear('idnumero2');
    console.log(resultado);
    document.getElementById('idResultado2').innerText = resultado;
}
const dividirCompleto = () => {

    var resultado = parsear('idnumero1') / parsear('idnumero2');
    console.log(resultado);
    document.getElementById('idResultado2').innerText = resultado;
}
const multiplicarCompleto = () => {

    var resultado = parsear('idnumero1') * parsear('idnumero2');
    console.log(resultado);
    document.getElementById('idResultado2').innerText = resultado;
}
const cambiarCompleto = () => {
    document.getElementById('idimg1').src = 'https://banner2.cleanpng.com/20171128/334/autumn-red-leaf-png-clipart-image-5a1d63fa805255.6938363915118755785256.jpg'

}

const parsear = (id) => parseInt(document.getElementById(id).value)


function conceptosJS() {
    let var1 = 10;
    let var1texto = 'texto1';
    console.log(var1);
    console.log(var1texto);

    /*var esta quedando en desuso*/ 
    var var2 = 10;
    var var2texto = 'texto2';
    console.log(var2);
    console.log(var2texto);

    const const1 = 10;
    const const1texto = 'texto3';
    console.log(const1);
    console.log(const1texto);

    //DECLARACION de arreglos
    const diasSemana=["LUNES","MARTES","MIERCOLES","JUEVES","VIERNES"];
    console.log(diasSemana)
}