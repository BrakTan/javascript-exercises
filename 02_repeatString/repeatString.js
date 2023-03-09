const repeatString = function(message, numberOfTime) {
    let finalMessage = "";
    if(numberOfTime < 0) return "ERROR";
    for(let i = 0; i < numberOfTime; i++){
        finalMessage += message;
    }
    return finalMessage;
};

// Do not edit below this line
module.exports = repeatString;
