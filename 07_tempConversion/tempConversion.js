const ftoc = function(inputTemp) {
  return Math.round(((inputTemp - 32) * (5 / 9)) * 10) / 10;
};

const ctof = function(inputTemp) {
  return Math.round((inputTemp * (9 / 5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
