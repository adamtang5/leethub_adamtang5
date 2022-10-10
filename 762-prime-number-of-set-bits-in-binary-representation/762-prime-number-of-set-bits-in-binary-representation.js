/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function(left, right) {
    const ones = {};
    for (let i = left; i <= right; i++) {
        const bits = i.toString(2).split('').filter(d => d === '1').length;
        ones[bits] = ones[bits] || [];
        ones[bits].push(i);
    }
    
    const isPrime = n => {
        if (n < 2) return false;
        for (let x = 2; x <= Math.sqrt(n); x++) {
            if (n % x === 0) return false;
        }
        return true;
    };
    
    let count = 0;
    for (let bits in ones) {
        if (isPrime(bits)) count += ones[bits].length;
    }
    return count;
};