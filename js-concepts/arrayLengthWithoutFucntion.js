//Find the length of array without using len() function
function findArrayLength(arrInput) {
  let counter = 0;
  arrInput.forEach(element => {
      console.log(element);
      counter++
  });
  console.log('Array Length', counter);
}

//Find length of string without using the length function
function findStringLength(str) {
    let counter = 0;
    while(str[counter] !== undefined) {
        counter++;
    }
    console.log('String Length', counter);
}

// findArrayLength([1,2,3,4,5,6,7,8]);
findStringLength('Sejal Pande');