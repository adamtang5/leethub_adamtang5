/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n === 1) return '1';
    
    const convert = s => {
        let [ans, currCh, currLen, i] = ['', '', 0, 0];
        while (i < s.length) {
            if (s[i] === currCh) {
                currLen++;
            } else {
                if (currLen) {
                    ans += currLen.toString();
                    ans += currCh;
                }
                currCh = s[i];
                currLen = 1;
            }
            i++;
        }
        if (currLen) {
            ans += currLen.toString();
            ans += currCh;
        }
        return ans;
    };
    
    return convert(countAndSay(n - 1));
};