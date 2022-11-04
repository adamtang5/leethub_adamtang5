/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    const counts = new Array(60).fill(0);
    let numPairs = 0;
    
    time.forEach(min => counts[min % 60]++);
    
    const rr = n => n * (n - 1) / 2;
    
    numPairs += rr(counts[0]);
    numPairs += rr(counts[30]);
    
    for (let i = 1; i < 30; i++) {
        numPairs += counts[i] * counts[60 - i];
    }
    
    return numPairs;
};