// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
 let counter = 0;
 let len = c.length;
 let i = 0;
 while(i < len - 1) {
     if(i + 2 >= len || c[len + 2] === 1) {
         i = i + 1;
         counter = counter + 1;
     } else {
         i = i + 2;
         counter = counter + 1;
     }
 }
 return counter;
}
let c = [0, 0, 0, 1, 0, 0];
console.log("jumpingOnClouds", jumpingOnClouds(c));
