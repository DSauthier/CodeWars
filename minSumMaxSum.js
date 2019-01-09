function miniMaxSum(arr) {
  arr.sort();
  var minSum = sum(arr.slice(0, -1))
  var maxSum = sum(arr.slice(1))
  console.log(minSum, maxSum)
}

function sum(subArr) {
  return subArr.reduce(function (a, b) {
    return a + b;
  }, 0);
}

// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.Then print the respective minimum and maximum values as a single line of two space - separated long integers.

// For example, .Our minimum sum is  and our maximum sum is.We would print

// 16 24
// Function Description

// Complete the miniMaxSum function in the editor below.It should print two space - separated integers on one line: the minimum sum and the maximum sum of  of  elements.

// miniMaxSum has the following parameter(s):

// arr: an array of  integers