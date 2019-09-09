
var set = function(key,value) {
    localStorage.setItem(key,value);    
    
};

var get = function (key) {
    return localStorage.getItem(key);
    
}

// var test;

set(1,"test");
console.log(get(1));
