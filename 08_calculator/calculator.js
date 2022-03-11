const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((a, b) => a + b, 0);
};

const multiply = function(array) {
  return array.reduce((a, b) => a * b);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(input) {
	if (input == 0 || input == 1) {
    return 1;
  }
  else {
    let factorial = 1;
    for (let i = input; i >= 1; i--) {
      factorial *= i;
    }
    return factorial;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
