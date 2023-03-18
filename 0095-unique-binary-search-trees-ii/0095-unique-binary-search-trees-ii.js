/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  const dp = {};
  
  const helper = (lb, ub) => {
    if (lb === ub) {
      dp[`${lb}-${ub}`] = dp[`${lb}-${ub}`] || [new TreeNode(lb)];
      return;
    }
    
    const trees = [];
    for (let rootVal = lb; rootVal <= ub; rootVal++) {
      helper(lb, rootVal - 1);
      helper(rootVal + 1, ub);
      if (rootVal === ub) {
        dp[`${lb}-${rootVal - 1}`].forEach(leftTree => {
          trees.push(new TreeNode(rootVal, leftTree, null));
        });        
      } else if (rootVal === lb) {
        dp[`${rootVal + 1}-${ub}`].forEach(rightTree => {
          trees.push(new TreeNode(rootVal, null, rightTree));
        });        
      } else {
        dp[`${lb}-${rootVal - 1}`].forEach(leftTree => {
          dp[`${rootVal + 1}-${ub}`].forEach(rightTree => {
            trees.push(new TreeNode(rootVal, leftTree, rightTree));
          });
        });
      }
    }
    if (lb <= ub) dp[`${lb}-${ub}`] = dp[`${lb}-${ub}`] || trees;
  };
  
  helper(1, n);
  return dp[`1-${n}`];
};