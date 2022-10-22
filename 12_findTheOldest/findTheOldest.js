

const findTheOldest = function(ppl) {
    let aLived, bLived;
    const lived = ppl.sort((a, b) => {
        if(!a.hasOwnProperty('yearOfDeath')){
            aLived = new Date().getFullYear() - a.yearOfBirth;
        } else {
        aLived = a.yearOfDeath - a.yearOfBirth;}
        if(!b.hasOwnProperty('yearOfDeath')){
            bLived = new Date().getFullYear() - b.yearOfBirth;
        } else {
        bLived = b.yearOfDeath - b.yearOfBirth;}

        return aLived > bLived ? -1: 1;
    })
    return lived[0];
};
findTheOldest([]);
// Do not edit below this line
module.exports = findTheOldest;
