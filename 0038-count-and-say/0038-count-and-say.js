/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    // Base case
    if (n === 1) return '1';
    
    const convert = s => {
        let [ans, curr] = ['', ''];
        let i = 0;
        while (i < s.length) {
            if (s[i] === curr[0]) {
                curr += s[i];
            } else {
                if (curr.length) {
                    ans += curr.length.toString();
                    ans += curr[0];
                }
                curr = s[i];
            }
            i++;
        }
        if (curr.length) {
            ans += curr.length.toString();
            ans += curr[0];
        }
        return ans;
    };
    
    return convert(countAndSay(n - 1));
};