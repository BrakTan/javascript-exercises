const sumAll = function(first, second) {
    let sum = 0;
    let begin;
    let end;
    /*let args = Array.from(arguments);
    args.forEach((element) => {
        if(element < 0 || typeof element != 'number'){
            return "ERROR";
        }
    });*/
    if(first < 0 || second < 0 || typeof first != 'number'
    || typeof second != "number"){
        return "ERROR";
    }
    if(first < second){
        begin = first;
        end = second;
    }
    else if(first > second){
        begin = second;
        end = first;
    }
    else{
        return first+second;
    }
    for(let i = begin; i <= end; i++){
        sum += i;
    }
    return sum;
};
console.log(sumAll(4, '8'))
// Do not edit below this line
module.exports = sumAll;
