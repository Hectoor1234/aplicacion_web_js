Vue.createApp({
    data() {
        return {
            fruta:'',

           
    }
},
computed: {
    frutas(){
        if(this.fruta=='Manzana'){
            return 'https://1.bp.blogspot.com/-5yk0hbeJ0mw/Xrv9Q9GW3MI/AAAAAAAA1O0/07_qF5Y6LvQkd3CvuphQiy4fGRuWDQjGwCLcBGAsYHQ/s1600/manzana.jpg'
        }
        else if(this.fruta=="pera"){
            return 'https://th.bing.com/th/id/OIP.hRko0yZKYSB9z3p_t8-oRwHaE7?pid=ImgDet&rs=1'
        }
      
        else (this.fruta=="Mango")
        return 'https://th.bing.com/th/id/OIP.jzosvl2b1zmb0OyiBOm9OQHaFj?pid=ImgDet&rs=1'
        }
        
    }
}).mount("#app");