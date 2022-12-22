/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    const digits = [];
    let [rev1, rev2] = [[], []];
    for (let i = 0; i < num1.length; i++) {
        rev1.unshift(+num1[i]);
    }
    for (let i = 0; i < num2.length; i++) {
        rev2.unshift(+num2[i]);
    }
    
    for (let i = 0; i < Math.max(rev1.length, rev2.length); i++) {
        digits.push((rev1[i] || 0) + (rev2[i] || 0));
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