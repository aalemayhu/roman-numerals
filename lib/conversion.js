var toRoman = require("roman-numerals").toRoman;

var toRomanNumeral = function(input) {
  return toRoman(input);
};

module.exports = {
  toRomanNumeral
};
