/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const open = {
        ')' : '(',
        ']' : '[',
        '}' : '{',
    };
    for (let i = 0; i < s.length; i++) {
        const p = s[i];
        if ('([{'.includes(p)) {
            stack.push(p);
        } else if (stack.pop() !== open[p]) {
            return false;
        }
    }
    
    return !stack.length;
};