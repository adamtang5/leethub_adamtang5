/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function(left, right) {
    let count = 0;
    const isPrime = n => {
        if (n < 2) return false;
        for (let x = 2; x <= Math.sqrt(n); x++) {
            if (n % x === 0) return false;
        }
        return true;
    };
    
    for (let i = left; i <= right; i++) {
        const bits = i.toString(2).split('').filter(d => d === '1').length;
        if (isPrime(bits)) count++;
    }
    return count;
};