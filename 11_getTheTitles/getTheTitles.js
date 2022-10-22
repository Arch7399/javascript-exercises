const getTheTitles = function(array) {
    const arr = array.map(book => book.title);
    return arr;
};

getTheTitles([]);

// Do not edit below this line
module.exports = getTheTitles;
