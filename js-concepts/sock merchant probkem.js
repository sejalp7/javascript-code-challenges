'use strict';

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
  let obj = {};
  let totalPairs = 0;

  for (let i = 0; i < ar.length; i++) {
    if (obj[ar[i]]) {
      obj[ar[i]]++;

      if (obj[ar[i]] === 2) {
        totalPairs++;
        obj[ar[i]] = 0;
      }
    } else {
      obj[ar[i]] = 1;
    }
  }

  console.log("sockMerchant -> totalPairs", totalPairs)
  return totalPairs;
}

sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]);
