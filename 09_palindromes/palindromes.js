const palindromes = function (word) {
   let str = word.replace(/[^a-zA-Z]/gi, '').toLowerCase();
   let neww = str.split('').reverse().join('');
   return neww === str ? true: false;
};


palindromes('racecar');

// Do not edit below this line
module.exports = palindromes;
