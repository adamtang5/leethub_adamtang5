/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const lookup = {
        1: 'I',
        5: 'V',
        10: 'X',
        50: 'L',
        100: 'C',
        500: 'D',
        1000: 'M',
    };
    
    const parse = n => {
        return n.toString(10).split('').reverse().map((s, p) => +s * (10 ** p)).reverse();
    };
    
    const digit2Roman = n => {
        const leadDigit = parseInt(n.toString(10)[0], 10);
        if (!n) {
            return '';
        } else if (leadDigit <= 3) {
            return new Array(leadDigit).fill(lookup[n / leadDigit]).join('');
        } else if (leadDigit <= 8) {
            const pre = new Array(Math.abs(Math.min(leadDigit - 5, 0))).fill(lookup[n / leadDigit]).join('');
            const five = lookup[5 * n / leadDigit];
            const post = new Array(Math.max(leadDigit - 5, 0)).fill(lookup[n / leadDigit]).join('');
            return pre + five + post;
        } else if (leadDigit === 9) {
            const pre = lookup[n / leadDigit];
            const ten = lookup[10 * n / leadDigit];
            return pre + ten;
        }
    };
    
    return parse(num).map(n => digit2Roman(n)).join('');
};