// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
const longestPalindrome = s => {
    if(!s || s.length <= 1) {
        return s
    }
    let longest = s.substring(0, 1);
    console.log("longest", longest);
    for(let i = 0; i < s.length; i++) {
        let temp = expand(s, i, i)
        if(temp.length > longest.length) {
            longest = temp
        }
        temp = expand(s, i, i + 1)
        if(temp.length > longest.length) {
            longest = temp
        }
    }
    return longest
}

const expand = (s, begin, end) => {
    while(begin >= 0 && end <= s.length - 1 && s[begin] === s[end]) {
        begin--
        end++
    }
    return s.substring(begin + 1, end)
}
console.log("longestPalindrome", longestPalindrome('annanaa'));