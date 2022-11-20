/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    const mem = [0, 1, 1];
    if (n < 3) return mem[n];
    while (n > 2) {
        mem.push(mem[1] + mem[2] + mem.shift());
        n--;
    }
    return mem[2];
};