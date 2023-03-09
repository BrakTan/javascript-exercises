const removeFromArray = function(array) {
    let args = Array.from(arguments);
    args.shift();
    let finalArray = [];
    outter: 
    for (let arr of array){
        for(let arg of args){
            if(arr === arg){
                continue outter;
            }
        }
        finalArray.push(arr);
    }

    return finalArray;
};

//console.log(removeFromArray([1, 2, 3, 4, 'hey'], 3, 4, 'hey'))
// Do not edit below this line
module.exports = removeFromArray;
