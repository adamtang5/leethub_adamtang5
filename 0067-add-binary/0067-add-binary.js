/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    a = a.split('').reverse();
    b = b.split('').reverse();
    const ans = [];
    
    let [carry, l, r] = [false, false, false];
    
    for (let i = 0; i < Math.max(a.length, b.length); i++) {
        l = a[i] ? !!(+a[i]) : false;
        r = b[i] ? !!(+b[i]) : false;
        ans.push(l ^ r ^ carry);
        carry = l & r || l & carry || r & carry;
    }
    if (carry) ans.push(carry);
    return ans.reverse().join('');
};