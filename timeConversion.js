function timeConversion(s) {
  const arr = s.slice(0, s.length - 2).split(':');
  console.log(arr)
  // create a new array where the PM will be removed split the string by :
  console.log(arr[0])
  // (s.indexOf('PM') > -1) ? means -> if the index that generates the string PM is in the string (exists) do something. if it doesnt, keep going.
  arr[0] = (s.indexOf('PM') > -1) ?
    // if arr[0] = 12 return 12 else return the number+12 ; if arr[0] = 0 return 0 else arr[0]
    (arr[0] == 12 ? '12' : Number(arr[0]) + 12) :
    (arr[0] == 12 ? '00' : arr[0]);
  // now all we need to do is join the parts together
  return arr.join(':');
}

// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: Midnight is 12: 00: 00AM on a 12 - hour clock, and 00: 00: 00 on a 24 - hour clock.Noon is 12: 00: 00PM on a 12 - hour clock, and 12: 00: 00 on a 24 - hour clock.

// Function Description

// Complete the timeConversion function in the editor below.It should return a new string representing the input time in 24 hour format.

// timeConversion has the following parameter(s):

