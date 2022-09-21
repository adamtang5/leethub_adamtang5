/**
 * @param {number} n
 * @return {string[]}
 */

var generateParenthesis = function(n) {
    const dp = {};
    dp['0-0'] = [''];
    dp['0-1'] = [')'];

    const valid = (nOpen, nClose) => {
        return nClose >= nOpen && nOpen >= 0 && nClose >= 0;
    };
    
    const dfs = (nOpen, nClose) => {
        if (dp[`${nOpen}-${nClose}`]) return dp[`${nOpen}-${nClose}`];
        
        let ans = [];
        
        if (valid(nOpen - 1, nClose)) {
            ans = [...ans, ...dfs(nOpen - 1, nClose).map(seq => '(' + seq)];
        }
        if (valid(nOpen, nClose - 1)) {
            ans = [...ans, ...dfs(nOpen, nClose - 1).map(seq => ')' + seq)];
        }
        dp[`${nOpen}-${nClose}`] = ans;
        return ans;
    };
    
    return dfs(n, n);
};