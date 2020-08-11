// Complete the minimumBribes function below.
function minimumBribes(n, q) {
    let ans = 0;
    for (let i = q.length - 1; i >= 0; i--) {
        if (q[i] - (i + 1) > 2) {
            return "Too chaotic";
        }
        for (let j = Math.max(0, q[i] - 2); j < i; j++) {
            if (q[j] > q[i]) ans++;
        }
    }
    
    return ans;
}

// console.log("minimumBribes -> minimumBribes", minimumBribes(5, [2,1,5,3,4]))
console.log("minimumBribes -> minimumBribes", minimumBribes(5, [2,5,1,3,4]))
