var app= new Vue({

    el:"#main",
    data:{
        msg:"nihao",
        current:{
            id:"",
            val:"",
            
        },

        list:[
            

        ],


    },
    methods:{
       add:function() {

        var current = this.current;
        // current.id ++;



        this.list.push(current.val);
        set("LIST",this.list)
        
        console.log("current的值:",this.current);
        console.log("list的值:",this.list);
           
       }
       
        

       
        

    },
    
})