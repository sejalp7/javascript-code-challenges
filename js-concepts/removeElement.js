
//  * @param {number[]} nums
//  * @param {number} val
//  * @return {number}
//  * Given an array nums and a value val, remove all instances of that value in-place and return the new length.
 
var removeElement = function(nums, val) {
    let i=0;
    for(let j=0; j < nums.length; j++) {
        if(nums[j] !== val) {
            nums[i] = nums[j]
            i++;
        }
    }
    return i;
};

console.log('removeElement' , removeElement([3,2,2,3], 3));