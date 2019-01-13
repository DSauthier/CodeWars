function diagonalDifference(arr) {
  console.log(arr)
  let leftToRigh = arr[0][0] + arr[1][1] + arr[2][2];
  let rightToLeft = arr[0][2] + arr[1][1] + arr[2][0];

  console.log(leftToRigh);
  console.log(rightToLeft)

  let answer = rightToLeft - leftToRigh;

  return answer

}