Vue.createApp({
    data() {
        return {
            pokemon: [],
            loading:null,
            valores: 20
            

        }
    },
    mounted(){

        this.getpokemon()
    },
       
        

    methods: {
        //POST CREAR
        //GET OBTENER
        //PUT MODIFICAR
        //DELETE ELIMINAR
        async getpokemon() {
            this.loading=true;
            var i = 1;
           while(i<=this.valores){
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + i, {
                method: 'GET'

            }); 

            const pokemon = await response.json();
            this.pokemon.push(pokemon);
            i++;

         }
         this.loading=false;

        }
    }

}).mount('#Parcial2')
