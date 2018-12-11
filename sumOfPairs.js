
// Sum of Pairs
// Given a list of integers and a single sum value, return the first two values(parse from the left please) in order of appearance that add up to form the sum.

//   sum_pairs([11, 3, 7, 5], 10)
// #              ^ --^ 3 + 7 = 10
//   == [3, 7]

// sum_pairs([4, 3, 2, 3, 4], 6)
// #          ^ -----^ 4 + 2 = 6, indices: 0, 2 *
// #             ^ -----^ 3 + 3 = 6, indices: 1, 3
// #                ^ -----^ 2 + 4 = 6, indices: 2, 4
// #  * entire pair is earlier, and therefore is the correct answer
//   == [4, 2]

// sum_pairs([0, 0, -2, 3], 2)
// #  there are no pairs of values that can be added to produce 2.
//   == None / nil / undefined(Based on the language)

// sum_pairs([10, 5, 2, 3, 7, 5], 10)
// #              ^ -----------^ 5 + 5 = 10, indices: 1, 5
// #                    ^ --^ 3 + 7 = 10, indices: 3, 4 *
// #  * entire pair is earlier, and therefore is the correct answer
//   == [3, 7]
// Negative numbers and duplicate numbers can and will appear.

//   NOTE: There will also be lists tested of lengths upwards of 10, 000, 000 elements.Be sure your code doesn't time out.



// var sum_pairs=function(ints, s){

//   if (ints.length < 2) return undefined; //not enough numbers for pair.
//   let intSet = []

//   intSet.push(ints[0]);

//   for (let i=1; i < ints.length; ++i){
//     console.log('n')
//     let needed = s - ints[i];
//     if (intSet.includes(needed)){//check if we have already seen the number needed to complete the pair.
//       return [needed,ints[i]];
//     }

//     if(!intSet.includes(ints[i])){
//     intSet.push(ints[i]);//if not insert the number in set and continue.
//     }
//   }
//   return undefined;//No answer found
// }






var sum_pairs = function (ints, s) {
  let alreadySeen = {};

  for (let i = 0; i < ints.length; i++) {
    console.log(alreadySeen)

    let numberNeeded = s - ints[i]

    if (alreadySeen[numberNeeded]) {

      //  if(alreadySeen[8] exists)

      return [numberNeeded, ints[i]];

    }


    alreadySeen[ints[i]] = true
  }
}






sum_pairs([1, 2, 2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9], 10)