/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const len = digits.length;
    if (digits[len - 1] < 9) {
        digits[len - 1]++;
        return digits;
    } else {
        digits.reverse();
        let [i, carry] = [0, 1];
        while (i < digits.length) {
            if (digits[i] + carry > 9) {
                digits[i] = 0;
                carry = 1;
                i++;
            } else {
                digits[i] += carry;
                carry = 0;
                break;
            }
        }
        if (carry === 1) digits.push(1);
        return digits.reverse();
    }
};