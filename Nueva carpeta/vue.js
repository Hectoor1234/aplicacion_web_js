Vue.createApp({
    data(){
        return{
            amiibos:[
              
             
            ]

            
               
        }
    },
    methods: {
        async obtener(){
          const response =  await fetch ('https://amiiboapi.com/api/amiibo/',{
                method:'GET'
            });
            const data = await response.json();
          "console.log(data.amiibo);"
            this.amiibos=data.amiibo;
            
    }
},
}).mount('#app')