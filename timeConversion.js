function timeConversion(s) {
  const arr = s.slice(0, 8).split(':');
  arr[0] = (s.indexOf('PM') > -1) ?
    (arr[0] == 12 ? '12' : Number(arr[0]) + 12) :
    (arr[0] == 12 ? '00' : arr[0]);
  return arr.join(':');
}

// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: Midnight is 12: 00: 00AM on a 12 - hour clock, and 00: 00: 00 on a 24 - hour clock.Noon is 12: 00: 00PM on a 12 - hour clock, and 12: 00: 00 on a 24 - hour clock.

// Function Description

// Complete the timeConversion function in the editor below.It should return a new string representing the input time in 24 hour format.

// timeConversion has the following parameter(s):

