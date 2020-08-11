// Longest Substring Without Repeating Characters
var lengthOfLongestSubstring = function (s) {
  if (!!!s.length || typeof s !== 'string') return 0; 
  if (s.length == 1) return 1; 
  ``
  let hashTable = {}; 
  let longestSubstringLength = 0;
  let length = s.length; 
  let start = 0;
  //convert our strings to an array;
  const strings = s.split('');

  //iterate over the array
  for (let i = 0; i < length; i++) {
    console.log("lengthOfLongestSubstring -> hashTable[strings[i]]", hashTable[strings[i]])
    console.log("lengthOfLongestSubstring -> strings[i]", strings[i])
    if (hashTable[strings[i]] !== undefined && hashTable[strings[i]] >= start) {
      start = hashTable[strings[i]] + 1;
    }
    hashTable[strings[i]] = i;
    longestSubstringLength = Math.max(longestSubstringLength, i - start + 1);
    console.log("lengthOfLongestSubstring -> longestSubstringLength", longestSubstringLength)
  }
  return longestSubstringLength;
};

console.log(
  'nonRepeatingSubstring -> nonRepeatingSubstring',
  lengthOfLongestSubstring('abbccddd')
);
