/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const invert = (combo, n) => {
        const ans = [];
        for (let i = 1; i <= n; i++) {
            if (!combo.includes(i)) ans.push(i);
        }
        return ans;
    };
    
    if (k === 1) {
        return new Array(n).fill().map((combo, i) => [i + 1]);
    } else if (k === n) {
        return [new Array(n).fill().map((el, i) => i + 1)];
    } else if (k <= n - k) {
        const ans = [];
        combine(n, k - 1).forEach(combo => {
            for (let s = combo.at(-1) + 1; s <= n; s++) {
                ans.push([...combo, s]);
            }
        });
        return ans;
    } else {
        return combine(n, n - k).map(combo => invert(combo, n));
    }
};