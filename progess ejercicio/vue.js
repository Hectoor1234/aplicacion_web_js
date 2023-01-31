Vue.createApp({
    data() {
        return {
        rango:0


    }
},
    computed: {
        color(){

            if(this.rango >0 && this.rango <=40){
                return 'sucess';
            }
            else if (this.rango >= 41 && this.rango <=80){
                return 'warning';
            }
            else {
                return 'danger';
            }
                
            
        }
    }


    
   
}).mount("#app");