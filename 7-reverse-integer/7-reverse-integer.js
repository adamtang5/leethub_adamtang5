/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const sign = x >= 0 ? 1 : -1;
    
    const ans = sign * parseInt(Math.abs(x).toString(10).split('').reverse().join(''), 10);
    
    return ans < -1 * (2 ** 31) || ans >= 2 ** 31 ? 0 : ans;
};