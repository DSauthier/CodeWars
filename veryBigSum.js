function aVeryBigSum(ar) {
  let answer = ar.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;

  })
  return answer
}

// Calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

// Function Description

// Complete the aVeryBigSum function in the editor below.It must return the sum of all array elements.

// aVeryBigSum has the following parameter(s):

// ar: an array of integers.