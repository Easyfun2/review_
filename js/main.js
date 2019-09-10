var app= new Vue({

    el:"#main",
    data:{
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
        // console.log(this.list);
        
        var val = ms.get("LIST");
        this.list = val || this.list;
    },

    methods:{
       add:function() {

        var current = this.current;
        // current.id ++;
        console.log("current.val的属性",typeof current.val);
        console.log("current.val的数值",current.val);

        if(current.val.length > 0){

            this.list.push(current);
        }

        
     
        
        this.init_current();
           
       },

       init_current:function () {
           this.current ={};
           
       },

       completed:function (id) {
        //    console.log(099);
        //    console.log(id);
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

            Vue.set(this.list[id],'completed',!this.list[id].completed);

            // this.list[id].completed=!this.list[id].completed;
            console.log('此时 completed 的值',this.list[id].completed)

           
       },


       delect:function (id) {
           this.list.splice(id,1);
           
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