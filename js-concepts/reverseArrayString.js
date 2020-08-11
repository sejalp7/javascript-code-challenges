// Write a function that reverses a string. The input string is given as an array of characters char[].

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
function reverseString(s) {
    s = s.reverse();
    return s;
}
console.log("reverseString -> reverseString", reverseString(["h","e","l","l","o"]))