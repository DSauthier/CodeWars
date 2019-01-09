function staircase(n) {
  var line = Array(n + 1).fill(" ");
  line[n] = "";
  for (var i = n - 1; i >= 0; i--) {
    line[i] = "#";
    console.log(line.join(""));
  }
}




// Consider a staircase of size:

// #
// ##
// ###
// ####
// Observe that its base and height are both equal to, and the image is drawn using # symbols and spaces.The last line is not preceded by any spaces.

// Write a program that prints a staircase of size n.