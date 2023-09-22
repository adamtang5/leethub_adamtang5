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
  public TreeNode helper(int preLb, int preUb, int[] preorder, int[] inorder, Map<Integer, Integer> inIdx) {
    if (preLb == preUb) return null;
    int rootInIdx = inIdx.get(preorder[preLb]);
    if (preUb - preLb == 1) return new TreeNode(inorder[rootInIdx]);
    
    int l = preLb + 1;
    int r = preUb - 1;
    if (inIdx.get(preorder[l]) > rootInIdx) {
      return new TreeNode(
        preorder[preLb],
        null,
        helper(preLb + 1, preUb, preorder, inorder, inIdx)
      );
    } else if (inIdx.get(preorder[r]) < rootInIdx) {
      return new TreeNode(
        preorder[preLb],
        helper(preLb + 1, preUb, preorder, inorder, inIdx),
        null
      );
    }
    int mid = (l + r) / 2;
    while (l <= r) {
      mid = (l + r) / 2;
      if (inIdx.get(preorder[mid]) < rootInIdx && inIdx.get(preorder[mid + 1]) > rootInIdx) {
        break;
      } else if (inIdx.get(preorder[mid]) < rootInIdx) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
    return new TreeNode(
      preorder[preLb],
      helper(preLb + 1, mid + 1, preorder, inorder, inIdx),
      helper(mid + 1, preUb, preorder, inorder, inIdx)
    );
  }
  
  public TreeNode buildTree(int[] preorder, int[] inorder) {
    Map<Integer, Integer> inIdx = new HashMap<Integer, Integer>();
    for (int i = 0; i < inorder.length; i++) {
      inIdx.put(inorder[i], i);
    }
    
    return helper(0, preorder.length, preorder, inorder, inIdx);
  }
}