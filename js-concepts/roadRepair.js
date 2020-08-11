/*
 * Complete the 'getMinCost' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY crew_id
 *  2. INTEGER_ARRAY job_id
 */
function getMinCost(crew_id, job_id) {
    // Write your code here
    let repairCost = {
       path: [],
       steps: 0
    };
    let step = 0;
    let j = 0;
    let job_sorted = job_id.sort(function(a,b) { return(a - b)});
    let crew_sorted = crew_id.sort(function(a,b) { return(a - b)});
    for(let i=0; i < crew_sorted.length; i++) {
        let index = job_sorted.indexOf(crew_sorted[i]);
        if(index !== -1) {
            job_sorted[index] = 0;
            crew_sorted[i] = 0;
            continue;
        } 
        while(j === 0) {
            j++;
        }
        step += Math.abs(crew_sorted[i]- job_sorted[++j]);
    }
    return step;
}


// console.log("getMinCost -> getMinCost", getMinCost([5,3,1,4,6], [9,8,3,15,1]));
console.log("getMinCost -> getMinCost", getMinCost([1,3,4,5,6], [1,5,8,9,15]));
