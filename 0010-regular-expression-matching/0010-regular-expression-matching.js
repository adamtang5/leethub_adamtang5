/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const parseP = p => {
        const ans = [];
        let i = 0;
        while (i < p.length) {
            if (p[i + 1] === '*') {
                ans.push(p[i] + p[i + 1]);
                i += 2;
            } else {
                ans.push(p[i]);
                i++;
            }
        }
        return ans;
    };
    
    const parsed = parseP(p);
    // console.log(s, parsed);
    
    const charMatch = (ch1, ch2) => {
        return ch2 === '.' || ch2 === ch1;
    };
    
    // base case
    if (s.length && !parsed.length) return false;
    if (!s.length && !parsed.length) return true;
    if (!s.length && parsed.length) return !(parsed.some(el => el.length === 1));
    
    // recursive step
    const first = parsed.shift();
    if (first.length === 1) {
        return charMatch(s[0], first) && isMatch(s.slice(1), parsed);
    } else {
        if (!charMatch(s[0], first[0])) {
            return isMatch(s, parsed);
        } else {
            let len = 1;
            while (first[0] === '.' && len < s.length || s[len] === s[0]) {
                len++;
            }
            let bool = false;
            for (let i = 0; i <= len; i++) {
                bool ||= isMatch(s.slice(i), parsed);
            }
            return bool;
        }
    }
};