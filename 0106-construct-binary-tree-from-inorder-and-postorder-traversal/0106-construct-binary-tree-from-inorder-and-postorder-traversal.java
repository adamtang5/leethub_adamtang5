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
  public TreeNode helper(int postLb, int postUb, int[] inorder, int[] postorder, Map<Integer, Integer> inIdx) {
    if (postLb == postUb) return null;
    int rootInIdx = inIdx.get(postorder[postUb - 1]);
    if (postUb - postLb == 1) return new TreeNode(inorder[rootInIdx]);
    
    int l = postLb;
    int r = postUb - 2;
    if (inIdx.get(postorder[r]) < rootInIdx) {
      return new TreeNode(
        inorder[rootInIdx],
        helper(postLb, postUb - 1, inorder, postorder, inIdx),
        null
      );
    } else if (inIdx.get(postorder[l]) > rootInIdx) {
      return new TreeNode(
        inorder[rootInIdx],
        null,
        helper(postLb, postUb - 1, inorder, postorder, inIdx)
      );
    }
    int mid = (l + r) / 2;
    while (l <= r) {
      mid = (l + r) / 2;
      if (inIdx.get(postorder[mid]) < rootInIdx && inIdx.get(postorder[mid + 1]) > rootInIdx) {
        break;
      } else if (inIdx.get(postorder[mid]) < rootInIdx) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
    return new TreeNode(
      inorder[rootInIdx],
      helper(postLb, mid + 1, inorder, postorder, inIdx),
      helper(mid + 1, postUb - 1, inorder, postorder, inIdx)
    );
  }
  
  public TreeNode buildTree(int[] inorder, int[] postorder) {
    Map<Integer, Integer> inIdx = new HashMap<Integer, Integer>();
    for (int i = 0; i < inorder.length; i++) {
      inIdx.put(inorder[i], i);
    }
    
    return helper(0, postorder.length, inorder, postorder, inIdx);
  }
}