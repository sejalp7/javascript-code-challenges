function arrangeElements(arrInput) {
  let rearrangeArray = arrInput.sort(function (a, b) {
    return a - b;
  });
  let finalArray = [];
  while (rearrangeArray.length) {
    let i = 0;
    let j = rearrangeArray.length - 1;
    let min = rearrangeArray[i];
    let max = rearrangeArray[j];
    rearrangeArray.splice(rearrangeArray.indexOf(max), 1);
    rearrangeArray.splice(rearrangeArray.indexOf(min), 1);
    finalArray.push(max);
    finalArray.push(min);
  }
  return finalArray;
}

function arrangeElements_1(arrInput) {
  // Find Median of array
  let sortedArray = arrInput.sort(function (a, b) {
    return a - b;
  });
  const mid = Math.floor(sortedArray.length / 2);
  let midElement = sortedArray[mid];
  let tempIndex = 0;
  let targetEl = sortedArray[sortedArray.length - 1];
  while (targetEl !== midElement) {
    // console.log("targetEl", targetEl)
    let delIndex = sortedArray.indexOf(sortedArray[tempIndex]);
    // console.log("delIndex", delIndex)
    if(sortedArray[tempIndex] < sortedArray[tempIndex + 1]) {
      delIndex === 0 ? sortedArray.splice(delIndex,0,targetEl) : sortedArray.splice(delIndex +1,0,targetEl);
      sortedArray.pop(targetEl);
      targetEl = sortedArray[sortedArray.length - 1]
      tempIndex++;
      // console.log('sortedArray', sortedArray);
    } else {
      tempIndex++;
    }
    // console.log('sortedArray', sortedArray);
    // let delIndex = sortedArray[tempIndex + 1];
    // console.log("delIndex", delIndex)
    // if (targetEl > sortedArray[tempIndex]) {
    //   sortedArray.splice(delIndex,
    //     0,
    //     targetEl
    //   );
    //   sortedArray.pop(targetEl);
    //   targetEl = sortedArray[sortedArray.length - 1];
     
    //   tempIndex++;
    // }
  }
  //   for (let index = sortedArray.length - 1; index > 0; index--) {

  //       console.log("targetEl", targetEl)
  //       if(targetEl !== midElement) {
  //          if(targetEl > sortedArray[tempIndex]) {
  //              sortedArray.splice(sortedArray.indexOf(sortedArray[tempIndex]), 0, targetEl);
  //              sortedArray.pop(targetEl);
  //              console.log("sortedArray", sortedArray)
  //              tempIndex + 2;
  //          }
  //         //  console.log("sortedArray", sortedArray)
  //       }
  //   }
  return sortedArray;
}

// const arrInput = [2, 1, 5, 4, 7, 6];
const arrInput = [1,3,2,4];
console.log('arrangeElements -> arrangeElements', arrangeElements_1(arrInput));
