const fibonacci = function(num) {
        num = parseInt(num);
        if(num <= 0)
            return 'OOPS';
        if(num == 1)
            return 1;
        if(num == 2)
            return 1;
        return fibonacci(num - 1) + fibonacci(num - 2);
    
};

fibonacci(4);

// Do not edit below this line
module.exports = fibonacci;
