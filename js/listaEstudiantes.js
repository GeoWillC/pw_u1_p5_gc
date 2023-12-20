console.log("elementos Vue");
console.log(Vue);

const estudiantes=[
{nombre:'George',apellido:'Conlago',cedula:'1751242698',genero:'M',edad:'14'},
{nombre:'Juan',apellido:'Perez',cedula:'1751242622',genero:'M',edad:'15'},
{nombre:'',apellido:'Padilla',cedula:'1751242633',genero:'M',edad:'16'},
{nombre:'Pedro',apellido:'Montalvo',cedula:'1751242611',genero:'M',edad:'17'},
{nombre:'Maria',apellido:'Velasquez',cedula:'175124000',genero:'F',edad:'18'}]

console.log(estudiantes)
console.table(estudiantes)
const app = Vue.createApp({


    
    methods: {
        agregarEstudiante(){
            console.log("Agregando estudiante.........")
            const estu={nombre:this.nombre,apellido:this.apellido,cedula:this.cedula,
                genero:this.genero,edad:this.edad}
            // this.lista.unshift(estu)
            this.lista.push(estu)
            console.log(typeof(nombre))
            console.log(typeof(apellido))
        },
        presionandoTecla({charCode}){
            console.log("Presionando........")
            // console.log(event)
            // console.log(event.charCode)
            console.log(charCode)
            console.log(typeof(nombre))
        },
        agregarApellido(event){
            if(event.charCode===13){
                console.log("In")
               this.agregarEstudiante()
            }
        },
        agregarEstudianteMod({charCode}){
            console.log("Presionando 2........")
            this.agregarEstudiante()   
        }
    },
    watch: {

    },
    data() {
        return {
            lista:estudiantes,
            valor: 0,
            nombre:'',
            apellido:'',
            cedula:'',
            genero:'',
            edad:''
           
        }
    }
})


app.mount('#myApp')