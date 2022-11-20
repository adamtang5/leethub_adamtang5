/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (n < 2) return n;
    const mem = [0, 1];
    let i = 2;
    while (i < n) {
        mem.push(mem[0] + mem[1]);
        mem.shift();
        i++;
    }
    return mem[0] + mem[1];
};