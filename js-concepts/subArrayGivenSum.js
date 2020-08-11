// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

function subArraySum(arr,s) {
    for(i=0; i< arr.length; i++) {
        for(j=0; j< arr.length; i++) {
            if(i !== j && arr[i] + arr[j] === s) {
                return [j, i];
            }
        }
    }
    return null;
}

const subArraySum2 = function(nums, target) {
    const comp = {};
    for (let i = 0; i < nums.length; i++) {
      if (comp[nums[i]] >= 0) {
        return [comp[nums[i]], i];
      }
      comp[target - nums[i]] = i;
    }
};

const arr = [10, 2, -2, -20, 10] ;
console.log("subArraySum -> subArraySum", subArraySum2(arr, 10));
