/**
 * @param {number[]} nums
 * @return {number}
 */

/*
// create variable `result` -> Math.max(...nums) to keep track of maximum after each round of processing
// keep track of both `currMin` and `currMax` to keep track of 
// 1. create variables `[currMin, currMax]` -> [1, 1]
// 2. iterate through `nums` (num, i)
// 3a. have temp -> currMax
// 3. currMax = max(currMin * num, currMax * num, num)
// 4. currMin = min(currMin * num, temp * num, num)
// 4. outside of loop, return max(currMax, currMin)
*/

var maxProduct = function(nums) {
    let ans = Math.max(...nums);
    let [currMin, currMax] = [1, 1];
    
    nums.forEach(num => {
        let temp = currMax;
        currMax = Math.max(currMin * num, temp * num, num);
        currMin = Math.min(currMin * num, temp * num, num);
        ans = Math.max(currMax, currMin, ans);
    })
    
    return ans;
};