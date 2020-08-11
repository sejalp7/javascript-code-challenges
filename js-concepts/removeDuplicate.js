// Remove duplicate from the array
// function removeDuplicates(arrInput) {
//     let array = [];
//     arrInput.forEach(element => {
//         if(!array.includes(element)) {
//             array.push(element);
//             console.log('Update d array', array.sort(function(a, b){return(a - b)}));
//         }
//     });
// }

function removeDuplicates1(arrInput) {
    // return [... new Set(arrInput)];
    //let arr = arrInput.filter((el, index) => arrInput.indexOf(el) === index);
    let arr = arrInput.reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], []);
    console.log("removeDuplicates -> arr", arr)
    return arr;
}

// Remove duplicate from sorted array in place 
function removeDuplicates(nums) {
    if (nums.length === 0) {
        return 0
    };
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}

console.log(removeDuplicates([1,2,3,46,7,2,1, 46, 50]));