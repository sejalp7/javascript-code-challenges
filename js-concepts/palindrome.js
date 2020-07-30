// Find palindrome of a given number
function palindrome(num) {
    let reversedNo = 0;
    let inputNum = num;
    while (num > 0 ) {
        let remainder = num % 10;
        num = parseInt(num/10);
        reversedNo = reversedNo * 10 + remainder;
    }
    
    if(reversedNo === inputNum) {
        console.log(inputNum, 'is a palindrome');
    } else {
        console.log(inputNum, 'is not a palindrome');
    }
}

palindrome(1011);