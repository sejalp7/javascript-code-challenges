function mergeArray(arr1, arr2) {
    let arr = arr1.concat(arr2).sort(function(a,b) { return a-b });
    return [...new Set(arr)];
}

console.log(mergeArray([2,5,6,9], [1,2,3,29]));