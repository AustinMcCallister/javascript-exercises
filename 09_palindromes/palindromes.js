const palindromes = function (input) {
  forwardInput = input.replaceAll(/[^a-zA-Z0-9]/g, '')
  reversedInput = input.split("").reverse().join("").replaceAll(/[^a-zA-Z0-9]/g, '');

  if (forwardInput.toLowerCase() === reversedInput.toLowerCase()) {
    return true;
  }
  else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
