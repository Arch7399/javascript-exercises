const sumAll = function (x, y) {
if (x > 0 && y > 0 && typeof x === 'number' && typeof y === 'number') {
    var total = 0;
    if (x < y) {
        for (var i = x; i <= y; i++) {
            total += i;
        }
        return total;
    } else if (x > y) {
        for (var i = y; i <= x; i++) {
            total += i;
        }
        return total;
    }
} else {
    return 'ERROR';
 }
}

// Do not edit below this line
module.exports = sumAll;
