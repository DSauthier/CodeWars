
// We all love fridays, and even better if it is the last day of the month!

// In this kata you should write a function that will receive 2 parameters.Both are years, and indicates a range.

// Your work is to return the number of times a month ends with a Friday.

// If there is only one year provided, return the number of times a month ends on Friday on that year.Range bounds are inclusive in every case !

//   For example, between 1901 and 2000, a month ends on Friday 171 times.




function lastDayIsFriday(initialYear, endYear = initialYear) {
  let count = 0;
  //  if(endYear < initialYear || !endYear|| !initialYear){
  //    initialYear === endYear;
  //   }
  for (let year = initialYear; year <= endYear; year++) {
    for (let months = 0; months <= 11; months++) {
      let date = new Date(year, months + 1, 0);
      console.log(date.getDay())
      if (date.getDay() === 5) {

        count++
      }
    }
  }

  return count
}