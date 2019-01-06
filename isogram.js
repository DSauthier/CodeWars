// Task
// An isogram is a word that has no repeating letters, consecutive or non - consecutive.

// Implement a function that determines whether a string is an isogram.Assume an empty string is an isogram, and ignore letter case.

// Examples
// Input	Output	Comments
// "Dermatoglyphics"	true
// "aba"	false
// "moOse"	false	Ignore letter case.
// "ααβγδ"	false	Make sure to handle any characters
// Documentation
// isIsogram(str)
// Parameters:
// str: String
// A string of characters.

// Guaranteed Constraints:
// The string will never be null or undefined.
// The string may be empty(""), and may contain any character.
//   Returns: boolean
// Return true if the string contains only unique characters(ignoring case), otherwise return false.



function isIsogram (str) {
  str = str.toLowerCase()
  let answer = true
  let newArray = str.split("");
  console.log(newArray)
  for(let i =0;i<newArray.length;i++){
    for(let j = i+1;j<newArray.length;j++){
      // console.log(newArray[i])
      if(newArray[i]===newArray[j]){
        answer = false
      }

    }
  }
  return answer
}

isIsogram("Dermatoglyphics")

