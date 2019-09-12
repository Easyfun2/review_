
;(function () {
    

    var set = function(key,value) {

        var json = JSON.stringify(value);
        localStorage.setItem(key,json);    
        // 以json的形式，存。
        
    };

    var get = function (key) {

        var json = localStorage.getItem(key);
        
        if(json){
            return JSON.parse(json)
        };
    }

    window.ms = {
        set:set,
        get:get,
    };
    
})();

// var test;


ms.set('test',new Date());

console.log("看看现在的时间是，",ms.get('test'));

function a(id) {
    console.log("测试下这个关于return的函数吧")
    return "看看函数a的返回值是什么呢？"+id
    
};


var test= function () {
    return a(10)    
  
} ;

console.log(test())
