// Description:
// #Find the missing letter

// Write a method that takes an array of consecutive(increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array.And it will be always exactly one letter be missing.The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a', 'b', 'c', 'd', 'f'] -> 'e'
// ['O', 'Q', 'R', 'S'] -> 'P'
//     (Use the English alphabet with 26 letters!)



function findMissingLetter(array) {
  let missingNum;
  let numArray = array.map((eachLetter) => {
    return eachLetter.charCodeAt();
  })

  numArray.forEach((eachNum, theIndex) => {
    if (theIndex !== 0) {
      if (eachNum - 1 !== numArray[theIndex - 1]) {
        missingNum = eachNum - 1;
      }
    }
  })
  return String.fromCharCode(missingNum)
}