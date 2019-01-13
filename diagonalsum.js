// function diagonalDifference(arr) {
//   console.log(arr)
//   let leftToRigh = arr[0][0] + arr[1][1] + arr[2][2];
//   let rightToLeft = arr[0][2] + arr[1][1] + arr[2][0];

//   console.log(leftToRigh);
//   console.log(rightToLeft)

//   let answer = Math.abs(rightToLeft - leftToRigh);

//   return answer

// }
// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix  is shown below:

// 1 2 3
// 4 5 6
// 9 8 9
// The left - to - right diagonal = .The right to left diagonal = .Their absolute difference is.

// Function description

// Complete the  function in the editor below.It must return an integer representing the absolute diagonal difference.

// diagonalDifference takes the following parameter:

// arr: an array of integers.

function diagonalDifference(matrix) {
  // length of input matrix.
  const length = matrix.length;
  let diagonal1 = 0, diagonal2 = 0;

  // Looping through the array and summing the diagonals.
  for (let i = 0; i < length; i++) {
    // Calculating the primary diagonal.
    diagonal1 += matrix[i][i];
    // Reversing the second dimension of array to calculate secondary diagonal.
    diagonal2 += matrix[length - 1 - i][i]
  }
  // return absolute difference value.
  return Math.abs(diagonal1 - diagonal2);

}