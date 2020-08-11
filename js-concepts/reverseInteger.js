// Given a 32-bit signed integer, reverse digits of an integer.
function reverseInteger(num) {
    let reversedNo = 0;
    let inputNum = Math.abs(num);
    while(inputNum > 0) {
        let remainder = inputNum % 10;
        inputNum = parseInt(inputNum/10);
        reversedNo = reversedNo * 10 + remainder;
    }
    return reversedNo > 0x7FFFFFFF? 0 : reversedNo * Math.sign(num);
}
console.log("reverseInteger -> reverseInteger", reverseInteger(121));