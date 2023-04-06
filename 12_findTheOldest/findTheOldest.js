const findTheOldest = function(array) {
    const oldest = array.reduce((older, next) => {
        if(!older.yearOfDeath){
            older.yearOfDeath = (new Date).getFullYear();
        }
        if(!next.yearOfDeath){
            next.yearOfDeath = (new Date).getFullYear();
        }
        const olderAge = older.yearOfDeath - older.yearOfBirth;
        const nextAge = next.yearOfDeath - next.yearOfBirth;
        return  nextAge > olderAge ? next : older;
    },)
    return oldest;
}

// Do not edit below this line
module.exports = findTheOldest;
