const sumAll = function(...num) {
  let sum = 0;

  num.sort(function(a, b){return a - b});

  for (const arg of num) {
    if (arg < 0 || typeof(arg) != 'number') {
      return 'ERROR';
    }
  }

  for (let i = num[0]; i <= num[1]; i++) {
    sum += i;
  }
  
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
