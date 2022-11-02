/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    // 2147483647
    let [d, dv, output] = [Math.abs(dividend), Math.abs(divisor), 0];
    while (d >= dv) {
        let [temp, mul] = [dv, 1];
        while (d >= temp) {
            d -= temp;
            output += mul;
            mul += mul;
            temp += temp;
        }
    }
    if (dividend < 0 && divisor >= 0 || divisor < 0 && dividend >= 0) {
        output = 0 - output;
    }
    return Math.min(2147483647, Math.max(-2147483648, output));
};