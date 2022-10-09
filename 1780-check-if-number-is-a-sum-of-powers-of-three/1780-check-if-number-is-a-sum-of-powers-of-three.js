/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function(n) {
    const powersOf3 = [];
    for (let i = 0; 3 ** i <= n; i++) {
        powersOf3.push(3 ** i);
    }
    
    const dfs = (arr, target) => {
        if (target === 0) return true;
        if (target < 0 || !arr.length) return false;
        const ele = arr.pop();
        return dfs(arr, target - ele) || dfs(arr, target);
    };
    
    return dfs(powersOf3, n);
};