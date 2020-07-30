function fibo(n) {
    let fibonaci = [0,1];
    let fiboList = [];
    if(n <= 2) {
        return 1;
    } else {
        for(i = 2; i <= n; i++) {
            fibonaci[i] = fibonaci[i-1] + fibonaci[i-2];
            fiboList.push(fibonaci[i]);
        }
    return fibonaci[n];
    }
}

console.log('Fibonacci is: ', fibo(12))

