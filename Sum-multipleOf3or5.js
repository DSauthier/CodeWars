
// Output
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Note: If the number is a multiple of both 3 and 5, only count it once.

// Courtesy of ProjectEuler.net

function solution(number){
  let array = []
  for(let i = 0 ; i < number; i++){
    if(i % 3 === 0 ){
      array.push(i);
      continue
    }
    if(i % 5 === 0 ){
      array.push(i);
      continue
    }
  }
const reducer = (accumulator, currentValue) => accumulator + currentValue;
  console.log(array)
  if(array.length<0){
      return array.reduce(reducer);
    }else{
      return 0
    }

}

solution(10)