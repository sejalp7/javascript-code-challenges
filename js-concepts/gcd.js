function gcd (a,b) {
    if(!b) {
        return a;
    }
    return gcd(b, a%b);
}
console.log("gcd -> gcd", gcd(30,20))
