// Check if given string is a palindrome or not
function palindromeString(str) {
    let reversedString = '';
    for(let i=str.length - 1; i >= 0; i--) {
        reversedString = reversedString.concat(str[i]);
        
    }
    if(str.toLowerCase() === reversedString.toLowerCase()) {
        console.log(str, 'is a palindrome string');
    } else {
        console.log(str, 'is not a palindrome string');
    }
}

function palindromeStringWithoutNativeFunction(str) {
   let i= 0;
   let j= str.length - 1;
   let isPalindrome;
   while(i <= str.length-1 && j >= 0) {
       if(str[i] === str[j]) {
       i++;
       j--;
       isPalindrome = true;
    } else {
        break;
        isPalindrome = false;
    }
   }
   if(isPalindrome) {
   console.log('Given String is a palindrome');
   } else {
       console.log('Given string is not a palindrome');
   }
}

palindromeString1('MADAM');