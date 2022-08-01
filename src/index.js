module.exports = function toReadable(number) {
  const ones = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  };

  const teens = {
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
  };

  const tens = {
    1: 'ten',
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety',
  };

  if (number === 0) return ones[number];

  return convertHundreds(number);

  function convertHundreds(number) {
    if (number >= 100 && number % 100 === 0) {
      return ones[Math.trunc(number / 100)] + ' hundred';
    } else if (number >= 100) {
      return ones[Math.trunc(number / 100)] + ' hundred ' + convertTens(number % 100);
    } else return convertTens(number);
  }

  function convertTens(number) {
    if (number < 10) {
      return ones[number];
    } else if (number < 20) {
      return teens[number];
    } else if (number % 10 === 0) {
      return tens[Math.trunc(number / 10)];
    } else return tens[Math.trunc(number / 10)] + ' ' + ones[number % 10];
  }
}
