/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    const len = num.length;
    if (num[len - 1] + k < 10) {
        num[len - 1] += k;
        return num;
    } else {
        num.reverse();
        k.toString().split('').reverse().forEach((s, i) => {
            num[i] = num[i] || 0;
            num[i] += (+s)
        });
        let [i, carry] = [0, 0];
        while (i < num.length) {
            num[i] += carry;
            if (num[i] > 9) {
                carry = Math.floor(num[i] / 10);
                num[i] %= 10;
            } else {
                carry = 0;
            }
            i++;
        }
        if (carry) num.push(carry);
        return num.reverse();
    }
};
