// Find all the prime factors of a number
function primeFactor(number) {
    let divisor = 2;
    let factors = [];
    while(number > 2) {
        if(number % divisor === 0) {
            factors.push(number);
             number = number/divisor;
        } else {
            divisor++;
        }
    }
    return factors;
}

console.log('Prime Factors: ', primeFactor(49));