/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    let [currStreak, ans] = [0, 0];
    nums.forEach(n => {
        if (n === 0) {
            currStreak++;
        } else {
            ans += currStreak * (currStreak + 1) / 2;
            currStreak = 0;
        }
    });
    ans += currStreak * (currStreak + 1) / 2;
    return ans;
};