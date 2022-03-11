const fibonacci = function(n) {
  let firstTerm = 0;
  let secondTerm = 1;
  let nextTerm;

  if (n < 0) {
    return 'OOPS';
  }
  else {
    for (let i = 0; i < n; i++) {
      nextTerm = firstTerm + secondTerm;
      firstTerm = secondTerm;
      secondTerm = nextTerm;
    }
    return firstTerm;
  }
};

// Do not edit below this line
module.exports = fibonacci;
