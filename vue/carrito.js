Vue.createApp({
    data(){
        return{
            producto:'',
            carrito: [
                'cebolla',
                'tomate',
                'uvas'

            ]
        }
    },
    methods:{

        agregar(){
            this.carrito.push(this.producto);
            this.producto='';

        }
        
    }

    
}).mount('#app')