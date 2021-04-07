const app = new Vue({
    el: '#app',
    data:{
        titulo: 'COLLA Respuestas',
        frases: ["Sí", "No", "Que se yo", "Nose, pero yo no soy gordo, soy compacto"],
        respuesta: null,
        texto_label: '',
        pregunta: ''
    },
    methods:{
        
        getRandom: function(){
            const respuestanum = Math.floor(Math.random()*(2+1))
            console.log(respuestanum)
            this.respuesta = respuestanum
            this.pregunta = this.texto_label
            this.texto_label = ''
        }
    },
});