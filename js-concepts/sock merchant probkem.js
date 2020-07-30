'use strict';

// Complete the sockMerchant function below.
function sockMerchant(n, ar) { 
  let matchingPair = [];
  let counter = 0;
  ar.sort(function(a, b){return a - b});
  console.log('Sorted arr', ar);
  for(let i=0; i < n; i++) {
      for(let j=i+1; j < n; j++) {
          if(!ar[i] || !ar[j]) {
          if(ar[i] === ar[j]) {
              counter++;
              i++;
              j++;
              ar[i] = true;
              ar[j] = true;
            //   console.log(counter);
          }
        }
      }
  }
  console.log(counter);
}

sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]);
