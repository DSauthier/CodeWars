// function spEng(sentence) {
//   //write your code here
//   sentence = sentence.toLowerCase();
//   let newArray = sentence.split("");
//   for (let i = 0; i < newArray.length; i++) {
//     if (newArray[i] === "e" && newArray[i + 1] === "n" && newArray[i + 2] === "g" && newArray[i + 3] === "l" && newArray[i + 4] === "i" && newArray[i + 5] === "s" && newArray[i + 6] === "h") {
//       return true
//     }
//   }
//   return false
// }


// function spEng(s) {
//   return s.toLowerCase().indexOf('english') != -1
// }

function spEng(s) {
  return /english/i.test(s)
}


// Given a string of arbitrary length with any ascii characters.Write a function to determine whether the string contains the whole word "English".

// The order of characters is important-- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

// Upper or lower case letter does not matter-- "eNglisH" is also correct.

// Return value as boolean values, true for the string to contains "English", false for it does not.