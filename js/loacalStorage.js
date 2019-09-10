
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