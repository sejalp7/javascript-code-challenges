// Take an array of string [Geek, GeekforGeeks, Gee, Geeky]
// Find the largest prefix substring
// Output - GEE

function findLargestPrefix(str) {
    str.sort();
    let len = Math.min(str[0].length, str[str.length - 1].length);
    let prefix = '';
    let i = 0;
    while(i < len && str[0].charAt(i) === str[str.length - 1].charAt(i)) {
        i++;
        // return prefix;
    }
    return str[0].substring(0, i);
}

console.log('Output' ,findLargestPrefix(['Geek', 'GeekforGeeks', 'GeeK', 'Geeky']));
