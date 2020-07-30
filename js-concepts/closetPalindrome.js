// Find the closed palindrome number
function palindrome(num) {
    let reversedNo = 0;
    let inputNum = num;
    while (num > 0 ) {
        let remainder = num % 10;
        num = parseInt(num/10);
        reversedNo = reversedNo * 10 + remainder;
    }
    
    if(reversedNo === inputNum) {
        return true;
    } else {
     return false;
    }
}

function closestPalindrome(number) {
  let SPNumber = number - 1;
  let GPNumber = number + 1;
  // Check for nos. greater than given number
  while(GPNumber > number) {
      if(palindrome(GPNumber)) {
        console.log('Greater Palindrome', GPNumber);
        break;
      } else {
        GPNumber++;
      }
  }
  // Check for the nos. smaller than the given number
  while(SPNumber < number) {
      if(palindrome(SPNumber)) {
          console.log('smaller Palindrome', SPNumber);
          break;
      } else {
          SPNumber--;
      }
  }

  // Finding the closest using the absolute difference between the two
  let sDiff = Math.abs(number - SPNumber);
  let gDiff = Math.abs(GPNumber - number);
  if(sDiff == gDiff) {
      console.log('Closest Palindrome is: ', SPNumber, GPNumber);
  } else if(sDiff < gDiff) {
    console.log('Closest Palindrome is: ', SPNumber);
  } else {
    console.log('Closest Palindrome is: ', GPNumber);
  }
}

closestPalindrome(121);