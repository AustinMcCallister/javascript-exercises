const reverseString = function(input) {
  let stringArray = [];
  let outputString = '';

  for (let i = 0; i < input.length; i++) {
    stringArray.push(input.slice(i, (i + 1)));
  }

  stringLength = stringArray.length;

  while (stringArray.length > 0) {
    outputString += stringArray.pop();
  }

  return outputString;
};

// Do not edit below this line
module.exports = reverseString;
