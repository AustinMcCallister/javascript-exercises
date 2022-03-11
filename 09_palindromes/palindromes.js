const palindromes = function (input) {
  forwardInput = input.replaceAll(/[!,.\s]/g, '')
  reversedInput = input.split("").reverse().join("").replaceAll(/[!,.\s]/g, '');
  
  if (forwardInput.toLowerCase() === reversedInput.toLowerCase()) {
    return true;
  }
  else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
