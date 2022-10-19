const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  let summo = 0;
  array.forEach(element => {
    summo += element;
  });
  return summo;
};

const multiply = function(arr) {
  let prod = 1;
  arr.forEach(element => {
    prod *= element;
  });
  return prod;
};

const power = function(num, pow) {
  let raised = 1;
	for(i=0; i<pow; i++){
    raised *= num;
  }
  return raised;
};

const factorial = function(num) {
	let fac = 1;
  for(i=0; i<num; i++){
    fac *= (num - i);
  }
  return fac;
};

add(0, 0);
subtract(6, 4);
sum([7]);
multiply([2]);
power(4, 3);
factorial(0);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
