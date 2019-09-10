var app= new Vue({

    el:"#main",
    data:{
        msg:"nihao",
        current:{
            id:"",
            val:"",
            completed:false,
            
        },

        list:[
            

        ],


    },


    mounted:function(){
        // list = ms.get('LIST');
        console.log(this.list);
        
        var val = ms.get("LIST");
        this.list = val || this.list;
    },

    methods:{
       add:function() {

        var current = this.current;
        // current.id ++;
        console.log("current的属性",typeof current.val);

        if(current.val.length > 0){

            this.list.push(current);
        }

        
        console.log("current的值:",this.current);
        console.log("list的值:",this.list);
        
        this.init_current();
           
       },

       init_current:function () {
           this.current ={};
           
       },

       completed:function (id) {
           console.log(099);
           console.log(id);
            // var me= this; 
            // var index= this.list.findIndex(
            //     function(id){ 
                    
            //         for(i=0, i<me.list.length,i++){
            //             if()
            //         }
                    
            //         return id == me.index;
                    
            //     }
            // );
            // console.log("找到的索引值为。",index);
            // console.log("找到的索引值为。",me.list.index);

            this.list[id].completed=!this.list[id].completed;
            console.log('test',this.list[id].completed)

           
       }
       
        

       
        

    },



    watch:{
        list:{
            deep:true,
            // immediate:true,
            handler:function(n,o){
                    if(n){
                        ms.set('LIST',n)
                    }else{
                        ms.set("LIST",{})
                    }
                }
            },
            
            
        },



    


    
})