const palindromes = function (stringArg) {
    const ponctuation = [' ', '!','?',',','.'];
    let a = Array.from(stringArg).filter(letter => {
        return !ponctuation.includes(letter);
    });
    let c = a.join('').toLowerCase();
    let b = a.reverse().join('').toLowerCase();
    return c == b;

};

// Do not edit below this line
module.exports = palindromes;
