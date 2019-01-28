function solve(time) {
  var hour = +time.match(/(\d+):(\d+)/)[1];
  var minutes = +time.match(/(\d+):(\d+)/)[2];

  if (minutes == '00') {
    return hour != '00' ? getHours(hour) + " o'clock" : getHours(hour)
  }
  if (minutes <= 30) {
    return getMinutes(minutes) + ' past ' + getHours(hour)
  }
  if (minutes > 30) {
    return getMinutes(60 - minutes) + ' to ' + getHours(hour + 1)
  }
}
function getHours(hour) {
  if (hour == 0 || hour == 24) {
    return 'midnight'
  } else if (hour == 12) {
    return 'twelve'
  } else {
    var obj = { 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven' }
    var hourTo12Hours = hour;
    if (hourTo12Hours > 12) hourTo12Hours -= 12;
    return obj[hourTo12Hours]
  }
}
function getMinutes(minutes) {
  var obj = { 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'quarter', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen', 20: 'twenty', 21: 'twenty one', 22: 'twenty two', 23: 'twenty three', 24: 'twenty four', 25: 'twenty five', 26: 'twenty six', 27: 'twenty seven', 28: 'twenty eight', 29: 'twenty nine', 30: 'half' };
  if (minutes == 1) return obj[minutes] + ' minute'
  if (minutes == 15) return obj[minutes]
  if (minutes == 30) return obj[minutes]
  return obj[minutes] + ' minutes'
}

// Given time in 24 - hour format, convert it to words.

// For example:
// 13: 00 = one o'clock 
// 13: 09 = nine minutes past one
// 13: 15 = quarter past one
// 13: 29 = twenty nine minutes past one
// 13: 30 = half past one
// 13: 31 = twenty nine minutes to two
// 13: 45 = quarter to two
// 00: 48 = twelve minutes to one
// 00: 08 = eight minutes past midnight
// 12: 00 = twelve o'clock
// 00: 00 = midnight

// Note: If minutes == 0, use 'o'clock'. If minutes <= 30, use 'past', and for minutes > 30, use 'to'.
// More examples in test cases.Good luck!

