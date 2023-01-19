/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    if (nums.length === 1) return true;
    let trend;
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            trend = nums[i] > nums[i - 1] ? 'inc' : 'dec';
            break;
        }
    }
    
    for (let i = 1; i < nums.length; i++) {
        if (trend === 'inc') {
            if (nums[i] < nums[i - 1]) return false;
        } else if (trend === 'dec') {
            if (nums[i] > nums[i - 1]) return false;
        }
    }
    
    return true;
};