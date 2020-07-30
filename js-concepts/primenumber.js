function primeNumber(number) {
   var divisor=2;
   while(number > divisor) {
       if(number % divisor === 0) {
           return false;
       } else {
           console.log(number, 'is a prime number');
           break;
       }
   }
   return true;
}

primeNumber(124);