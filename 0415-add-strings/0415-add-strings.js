/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    const digits = [];
    let [rev1, rev2] = ['', ''];
    for (let i = num1.length - 1; i >= 0; i--) {
        rev1 += num1[i];
    }
    for (let i = num2.length - 1; i >= 0; i--) {
        rev2 += num2[i];
    }
    
    for (let i = 0; i < Math.max(rev1.length, rev2.length); i++) {
        digits.push((rev1[i] ? +rev1[i] : 0) + (rev2[i] ? +rev2[i] : 0));
    }
    
    let [i, carry, ans] = [0, 0, ''];
    while (i < digits.length) {
        digits[i] += carry;
        carry = Math.floor(digits[i] / 10);
        digits[i] %= 10;
        ans = digits[i].toString() + ans;
        i++;
    }
    if (carry) ans = carry.toString() + ans;
    return ans;
};