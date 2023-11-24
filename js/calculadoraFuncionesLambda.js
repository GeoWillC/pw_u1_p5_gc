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
    console.log(diasSemana[0])
    console.log(diasSemana[3])
    console.log(diasSemana[5])
    diasSemana[5]="sabado"
    console.log(diasSemana[5])
    diasSemana.push("Domingo")
    diasSemana.unshift("Feriado")
    console.log(diasSemana)
    const edades=[1,2,3,4,5]
    console.log(edades)
    const edades2=[6,7,8,9]
    edades.concat(edades2)
    const edFinal=edades.concat(edades2)
    console.log(edFinal)

    for(const dia of diasSemana){
        console.log(dia)
        document.getElementById('idResultado2').innerText = dia;
        if(dia === 'MARTES'){
            console.log('Martes 2x1')
        }
    }

    const estudiante = {
        nombre:"Willian", apellido:"Conlago", edad:"23", genero:"M", ciudad: "Quito"
    }
    console.log(estudiante)
    console.log(estudiante.ciudad="Guayaquil")
    console.log(estudiante)

    const persona = {
        nombre:"W",
        apellido:"C",
        edad:23,
        direccion:{
            callePrincipal:"RioB",
            calleSecundaria:"JuanJ",
            numeracion:"N332-1",
            barrio:"Llano Chico"
        }
    }
    console.log(persona)
    console.log(persona.direccion.callePrincipal)
    document.getElementById('idResultado2').innerText = persona.direccion.callePrincipal

    
        const primero ={
            nombre : "Juan",
            apellido: "Perez",
            edad: "34"
        }
        const segundo ={
            nombre : "Carlos",
            apellido: "Perez",
            edad: "34"
        }
        const tercero ={
            nombre : "Mario",
            apellido: "Perez",
            edad: "34"
        }
        const cuarto ={
            nombre : "Andres",
            apellido: "Perez",
            edad: "34"
        }
        const quinto ={
            nombre : "Adrian",
            apellido: "Perez",
            edad: "34"
        }
        const pacientes =[primero,segundo,tercero,cuarto,quinto]
        console.log(pacientes)
        console.table(pacientes)

        //Memoria optimizada
        const paciente2 =[{nombre:"edison",apellido:"Cayambre"},{
            nombre : "Mario",
            apellido: "Perez",
            edad: "34"
        },{
            nombre : "Andres",
            apellido: "Perez",
            edad: "34"
        }
        ,{
            nombre : "Adrian",
            
        },
        {
            dias:"22",
            años:"45"    
        }
        
    ]
    console.log(paciente2)
    console.table(paciente2)

    //Desestructuracion de arreglos por posiciones
    const diasSemana2=["Lunes","Martes","Miercoles","Jueves","Viernes"]
    //Match con las posiciones del arreglo de arriba
    const [dia,dia2,dia3,dia4,dia5] = diasSemana2
    console.log(dia3)
    //Mejor manejo de cada elemento del arreglo
    const [d1,d2,d3,d4,d5] =["Lunes","Martes","Miercoles","Jueves","Viernes"]
    console.log(d2)

    //Desestructuracionde objetos 
    const vehiculo = {marca: "Toyota",anio:2023,modelos:"Prius"}
    //Desestructurado por atributo
    const {marca,modelo,anio}=vehiculo;
    console.log(anio) 

    const personaDes = {
        nombre:"W",
        apellido:"C",
        edad:23,
        direccion:{
            numeracion:"N332-1",
            barrio:"Llano Chico"
        }
    }

    const {nombre,edad, direccion:{numeracion,barrio}}=personaDes;
    console.log(barrio)

}


