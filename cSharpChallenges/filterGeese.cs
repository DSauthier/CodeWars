using System.Collections.Generic;
using System;
using System.Linq;

public static class Filter
{
  public static IEnumerable<string> GooseFilter(IEnumerable<string> birds)
  {
    // return IEnumerable of string containing all of the strings in the input collection, except those that match strings in geese
    List<string> geese = new List<string>() { "African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher" };

    List<string> birdsWithoutGeese = new List<string>();

    foreach(string bird in birds)
    {
      if (geese.Contains(bird) == false)
       {
         birdsWithoutGeese.Add(bird);
       }
    }

    return birdsWithoutGeese;
  }
}

// Write a function, gooseFilter/goose_filter/GooseFilter, that takes an array of strings as an argument and returns a filtered array containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:

// var geese = new[] { "African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher" };
// For example, if this array were passed as an argument:

// new string[] {"Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"}
// Your function would return the following array:

// new string[] {"Mallard", "Hook Bill", "Crested", "Blue Swedish"}
// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed.Note that all of the strings will be in the same case as those provided, and some elements may be repeated.