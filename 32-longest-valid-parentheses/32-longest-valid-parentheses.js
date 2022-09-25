/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    // trim leading ')'
    let l = 0;
    while (s[l] === ')') {
        l++;
    }
    
    // trim trailing '('
    let r = s.length;
    while (s[r - 1] === '(') {
        r--;
    }
    s = s.slice(l, r);
    
    let mirrored = s.split('').map(paren => paren === ')' ? '(' : ')').reverse().join('');
    
    const parse = s => {
        let [ans, stackHeight, validLen] = [0, 0, 0];

        for (let i = 0; i < s.length; i++) {
            if (s[i] === '(') {
                stackHeight++;
                validLen++;
            } else {
                stackHeight--;
                if (stackHeight < 0) {
                    validLen = 0;
                    stackHeight = 0;
                } else {
                    validLen++;
                }
                if (stackHeight === 0) ans = Math.max(ans, validLen);
            }
        }
        
        return ans;
    };
    
    return Math.max(parse(s), parse(mirrored));
};