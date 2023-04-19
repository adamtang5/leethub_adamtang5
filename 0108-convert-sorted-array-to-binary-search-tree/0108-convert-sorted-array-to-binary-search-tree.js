/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.left = (left===undefined ? null : left)
 *   this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  const helper = (lb, ub) => {
    if (lb === ub) return null;
    const mid = Math.floor((lb + ub) / 2);
    return new TreeNode(nums[mid], helper(lb, mid), helper(mid + 1, ub));
  };
  
  return helper(0, nums.length);
};