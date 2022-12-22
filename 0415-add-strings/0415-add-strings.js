/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    const digits = [];
    num1 = num1.split("").reverse().join("");
    num2 = num2.split("").reverse().join("");
    
    for (let i = 0; i < Math.max(num1.length, num2.length); i++) {
        digits.push((num1[i] ? +num1[i] : 0) + (num2[i] ? +num2[i] : 0));
    }
    
    let [i, carry] = [0, 0];
    while (i < digits.length) {
        digits[i] += carry;
        carry = Math.floor(digits[i] / 10);
        digits[i] %= 10;
        i++;
    }
    if (carry) digits.push(carry);
    return digits.reverse().join("");
};