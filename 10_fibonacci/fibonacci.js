const fibonacci = function(a) {
    let number = +a;
    if(a <= 0){
        return 'OOPS';
    }
    let old = 0;
    let newer = 0;
    let result = 1;
    for(let i = a; i > 1; i--){
        old = newer;
        newer = result;
        result = old + newer;
    }
    return result;
};

// Do not edit below this line
module.exports = fibonacci;
