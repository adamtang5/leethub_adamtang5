/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *   int val;
 *   TreeNode left;
 *   TreeNode right;
 *   TreeNode() {}
 *   TreeNode(int val) { this.val = val; }
 *   TreeNode(int val, TreeNode left, TreeNode right) {
 *     this.val = val;
 *     this.left = left;
 *     this.right = right;
 *   }
 * }
 */
class Solution {
  public TreeNode helper(int lb, int ub, int[] nums) {
    if (lb == ub) return null;
    int mid = (lb + ub) / 2;
    return new TreeNode(nums[mid], helper(lb, mid, nums), helper(mid + 1, ub, nums));
  }
  
  public TreeNode sortedArrayToBST(int[] nums) {
    return helper(0, nums.length, nums);
  }
}