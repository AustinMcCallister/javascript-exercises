const removeFromArray = function(inputArray, ...num) {
  let outputArray = [...inputArray];

  for (let i = 0; i < inputArray.length; i++) {
    for (let j = 0; j < num.length; j++) {
      if (outputArray[i] === num[j]) {
        outputArray.splice(i, 1);
        i -= 1;
        break;
      }
    }
  }

  return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
