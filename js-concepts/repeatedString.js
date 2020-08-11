// Complete the repeatedString function in the editor below. It should return an integer representing the number of occurrences of a in the prefix of length  in the infinitely repeating string.

// repeatedString has the following parameter(s):

// s: a string to repeat
// n: the number of characters to consider

function repeatedString(string, num) {
  if(string === undefined || string === '') {
    return 0;
  }
  let rem = 0; remCount = 0, repeatCount = 0, count = 0;
  rem = num % string.length;
  repeatCount = num / string.length;
  for (let index = 0; index < string.length; index++) {
      if(string[index] === 'a') {
        count++;
      }
      if(string[index] === 'a' && index < rem) {
        remCount++;
      }
  }
  return Math.floor((count * repeatCount) + remCount);
}
console.log("repeatedString('ab', 100)", repeatedString('abc', 10));