let stepsCount = 0;
var palindromeChainLength = function (n) {
  n = n + "";
  let reverseNumber = n.split("").reverse().join("");
  // console.log(reverseNumber)
  // console.log(n)
  // console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=")
  // console.log("these are the steps",stepsCount)
  if (Number(n) === Number(reverseNumber)) {
    //   console.log(stepsCount)
    //     console.log("debug message");
    return stepsCount

  } else {
    stepsCount++
    //   console.log("=-=--=-==-",stepsCount)

    let newNumber = Number(n) + Number(reverseNumber)
    //   console.log("........",newNumber)
    //   console.log("end of process")
    n = newNumber;
    //   console.log(n)
    //     console.log("debug message");
    // return stepsCount
  }
  //     console.log("debug message");
  //   console.log(stepsCount+">>>>>>>>>>>>>")
  return palindromeChainLength(n);

  //   console.log(Number(n)+Number(reverseNumber))
};

// Number is a palindrome if it is equal to the number with digits in reversed order.
// For example, 5, 44, 171, 4884 are palindromes and 43, 194, 4773 are not palindromes.

// Write a method palindrome_chain_length which takes a positive number and returns the number of special steps needed to obtain a palindrome.The special step is: "reverse the digits, and add to the original number".If the resulting number is not a palindrome, repeat the procedure with the sum until the resulting number is a palindrome.

// If the input number is already a palindrome, the number of steps is 0.

// Input will always be a positive integer.

// For example, start with 87:

// 87 + 78 =  165
// 165 + 561 =  726
// 726 + 627 = 1353
// 1353 + 3531 = 4884
// 4884 is a palindrome and we needed 4 steps to obtain it, so palindrome_chain_length(87) == 4

// Specification
// palindromeChainLength(n)
// Adds the palindrome of a number until a number that is a palidrome is reached

// Parameters
// n: Number - Number to begin adding from

// Return Value
// Number - Amount of steps needed to reach a palindromic number

// Examples
// n	Return Value
// 89	24
// 10	1