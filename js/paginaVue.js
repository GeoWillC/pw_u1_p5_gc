console.log("elementos Vue");
console.log(Vue);

const app = Vue.createApp({

    /*template: `
     <h1>Hola Mundo</h1>
     <h1>Desde App.js</h1>
     <h1>{{1+1}}</h1>
     <p>{{[1,2,3,4,5,6,7,8]}} </p>
     <p>{{true?'Verdadero':'Falso'}} </p>
     `*/
    methods: {
        CambiarMensaje(){
            console.log("se esta cambiando el mensaje")
            console.log(this.mensaje)
            this.mensaje='Valor cambiado'
        },
        CambiarNumero(){
            this.valor=this.valor+1
            console.log(this.valor)
        },
        Restaurar(){
            data.valor
        }
    },
    watch: {

    },
    data() {
        return {
            mensaje: 'hola mundo desde Vue.JS',
            valor: 100
        }
    }
})


app.mount('#myApp')