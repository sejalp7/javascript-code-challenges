// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
 let clouds = c.split('');
 let counter = 0;
 for(let i=0; i <= clouds.length; i++) {
     for(let j=i+1; j<= clouds.length; j--) {
         if(clouds[0] === clouds[j]){
             j--;
             counter++;
             console.log('counter', counter);
         }
     }
 }

}
let c = '0 0 1 0 0 1 0';
jumpingOnClouds(c);
