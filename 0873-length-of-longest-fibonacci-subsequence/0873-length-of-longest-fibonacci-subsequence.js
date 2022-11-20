/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function(arr) {
    const dp = {};
    for (let i = 0; i < arr.length - 1; i++) {
        dp[arr[i]] = dp[arr[i]] || {};
        for (let j = i + 1; j < arr.length; j++) {
            dp[arr[i]][arr[j]] = 2;
        }
    }
    for (let j = 0; j < arr.length; j++) {
        for (let k = j + 1; k < arr.length; k++) {
            const diff = arr[k] - arr[j];
            if (diff < arr[j] && dp[diff]) dp[arr[j]][arr[k]] = dp[diff][arr[j]] + 1;
        }
    }
    let ans = 0;
    for (const outerKey in dp) {
        for (const innerKey in dp[outerKey]) {
            if (dp[outerKey][innerKey] > 2) ans = Math.max(ans, dp[outerKey][innerKey]);
        }
    }
    return ans;
};