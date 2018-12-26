function rot13(str) { // LBH QVQ VG!
  str = str.split("")
  let newArray = [];
  for (let i = 0; i < str.length; i++) {
    console.log(str[i])
    if (str[i] === " " || str[i] === "!" || str[i] === "?" || str[i] === ".") {
      newArray.push(str[i])
    }
    if (str[i].charCodeAt !== 32) {

      if (str[i].charCodeAt() > 64 && str[i].charCodeAt() < 78) {
        // console.log(str[i].charCodeAt(),str[i],str[i].charCodeAt()+13,String.fromCharCode(str[i].charCodeAt()+13))
        newArray.push(String.fromCharCode(str[i].charCodeAt() + 13))
      }
      if (str[i].charCodeAt() > 77 && str[i].charCodeAt() < 91) {
        // console.log(str[i].charCodeAt(),str[i],str[i].charCodeAt()-13,String.fromCharCode(str[i].charCodeAt()-13))
        newArray.push(String.fromCharCode(str[i].charCodeAt() - 13))
      }
    }

  }
  return newArray.join("");
}

// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher.In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places.Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase.Do not transform any non - alphabetic character(i.e.spaces, punctuation), but do pass them on.

// Remember to use Read - Search - Ask if you get stuck.Try to pair program.Write your own code.