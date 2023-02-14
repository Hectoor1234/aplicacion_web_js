Vue.createApp({
    data(){
        return{
            cursos:[],
              nombrecurso:'' ,
              descripcion:'',
              creador:'',
              imagen:'',
              precio:'',
              cantidad:''
                  
                   
        }
    },  
    methods: {
        agregar(){

            const cursoss= {
                nombrecurso:this.nombrecurso,
                descripcion:this.descripcion,
                creador:this.creador,
                imagen:this.imagen,
                precio:this.precio,
                cantidad:this.cantidad
            }
            this.cursos.push(cursoss);
        },
        acumulador(){
            const acumuladorr={
                acumulado:this.cantidad*this.precio
            }
        }
    
    }
}).mount('#app')