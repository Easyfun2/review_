var app= new Vue({

    el:"#main",

    data:{
        id_timer:"",
        list:[],
        current:{

            id:"",
            val:"",
            completed:"",
            des:"test",
            show_detail:false,
            
        },

    

    },


    mounted:function(){
        // list = ms.get('LIST');
        // console.log(this.list);
        
        var val = ms.get("LIST");
        this.list = val || this.list;

        var init_id_timer = ms.get("ID_TIMER");
        console.log("init_id_timer,",init_id_timer);
        console.log("1、this.id_timer,",this.id_timer);

        this.id_timer = init_id_timer || -1;
        console.log("2、this.id_timer,",this.id_timer);




        
    },



    methods:{
       add:function() {
        // console.log("初始化之前的id_timer的值为：",this.id_timer);
  
        this.id_timer = this.id_timer + 1 ;
        this.current.id = this.id_timer;

        // console.log("初始化之后的current.id的值为：",this.current.id);
        // console.log("初始化之后的current.id_timer的值为：",this.id_timer);


        
        var current = this.current;

        if(current.val.length >= 0){

            this.list.push(current);
        }

        
     
        
        this.init_current();
           
       },

       init_current:function () {
           this.current ={};
           
       },

       completed:function (id) {

            console.log("completed方法传来的id",id);

            index = this.find_index(id);


            Vue.set(this.list[index],'completed',!this.list[index].completed);

            // this.list[id].completed=!this.list[id].completed;
            // console.log('此时 completed 的值',this.list[id].completed)

           
       },




       delect:function (id) {
           console.log("delect方法传来的id",id);
           
           var get_id;
           get_id= this.find_index(id);
           
           console.log("删除的值是",this.list[get_id]);
           this.list.splice(get_id,1);
       },

    //    字符串转对象  对象转字符串
    //    字符串转数组  数组转字符串
    //    对象转数组    数组转对象



       find_index:function (id) {
        //     设置返回值

            return this.list.findIndex(function(item) {
           console.log("--------------------");

                console.log("item的值：",item);

                console.log("item.id的值：",item.id);
                console.log("id的值：",id);
                // [{title: "我", id: 1}, {title: " ", id: 2}, {title: "0", id: 3}, {title: "2ode", id: 4}]

                return item.id == id;
                //当数组中的元素在测试条件时返回 true 时, findIndex() 返回符合条件的元素的索引位置
                
            })
           
       },

       show_detail:function(id){

        var index = this.find_index(id);
        Vue.set(this.list[index],"show_detail",!this.list[index].show_detail);
       }
       
        
// 耳朵留学
       
        

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

        id_timer:{
            deep:true,
            handler:function (n,o) {
                if(n){
                    ms.set("ID_TIMER",n)
                }else{
                    return
                }                
            }
        }
            
            
        },



    


    
})