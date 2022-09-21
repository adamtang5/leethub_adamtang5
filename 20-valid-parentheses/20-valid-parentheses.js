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
    const isClose = p => Object.keys(open).includes(p);
    
    for (let i = 0; i < s.length; i++) {
        const p = s[i];
        if (!isClose(p)) {
            stack.push(p);
        } else {
            if (stack[stack.length - 1] !== open[p]) {
                return false;
            } else {
                stack.pop();
            }
        }
    }
    
    return !stack.length;
};