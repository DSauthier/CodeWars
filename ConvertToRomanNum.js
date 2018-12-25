function convertToRoman(num) {
  let numberValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let romanNumeral = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  let answerArray = ""

  for (let i = 0; i < numberValue.length; i++) {
    while (numberValue[i] <= num) {
      answerArray += romanNumeral[i];
      num -= numberValue[i];
    }
  }
  return answerArray
}


// Convert the given number into a roman numeral.

// All roman numerals answers should be provided in upper -case.