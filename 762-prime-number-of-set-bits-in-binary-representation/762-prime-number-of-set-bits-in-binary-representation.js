/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function(left, right) {
    let count = 0;
    primes = new Set([2, 3, 5, 7, 11, 13, 17, 19]);
    
    const bitCount = n => {
        let count = 0;
        const places = n.toString(2).length;
        for (let p = 0; p < places; p++) {
            let mask = 1 << p;
            if ((mask & n) == (mask)) count++;
        }
        return count;
    };
    
    for (let i = left; i <= right; i++) {
        if (primes.has(bitCount(i))) count++;
    }
    return count;
};