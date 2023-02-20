Vue.createApp({
    data() {
        return {
            pokemon: []

        }
    },
    mounted(){

        this.getpokemon()
    }
       
        
        
    },

    methods: {
        //POST CREAR
        //GET OBTENER
        //PUT MODIFICAR
        //DELETE ELIMINAR
        async getpokemon() {
           var i = 1;
           while(i<=500){


        
           }
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + i, {
                method: 'GET'
            }); 
            const pokemon = await response.json();
            this.pokemon.push(pokemon);
            i++
        }
    }
}).mount('#Parcial2')