// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.
function searchInsertPosition(nums, target) {
    let index = nums.findIndex(el => el === target);
    if(index >= 0) {
        return index;
    } else {
        nums.push(target);
        let instArray = nums.sort(function(a,b) { return(a-b)});
        index = instArray.findIndex(el => el === target);
        return index;
    }
    
}
console.log("searchInsertPosition -> searchInsertPosition", searchInsertPosition([1,3,5,6], 2));