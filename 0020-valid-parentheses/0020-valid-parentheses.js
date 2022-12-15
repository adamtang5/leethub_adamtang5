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
    const isOpen = p => '([{'.includes(p);
    
    for (let i = 0; i < s.length; i++) {
        const p = s[i];
        if (isOpen(p)) {
            stack.push(p);
        } else if (stack.pop() !== open[p]) {
            return false;
        }
    }
    
    return !stack.length;
};