const app = new Vue({
    el: '#app',
    data:{
        titulo: 'Respuesta',
        frases: ["Sí", "No", "Que se yo"],
        respuesta: null,
        pregunta: ''
    },
    methods:{
        
        getRandom: function(){
            const respuestanum = Math.floor(Math.random()*(3+1))
            console.log(respuestanum)
            this.respuesta = respuestanum
        }
    },
});