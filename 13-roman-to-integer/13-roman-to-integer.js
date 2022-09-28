/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const lookup = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };
    
    let [ans, i] = [0, 0];
    while (i < s.length) {
        if (lookup[s[i]] < lookup[s[i + 1]]) {
            ans += lookup[s[i + 1]] - lookup[s[i]];
            i += 2;
        } else {
            ans += lookup[s[i]];
            i++;
        }
    }
    
    return ans;
};