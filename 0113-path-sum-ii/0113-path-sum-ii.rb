# Definition for a binary tree node.
# class TreeNode
#   attr_accessor :val, :left, :right
#   def initialize(val = 0, left = nil, right = nil)
#     @val = val
#     @left = left
#     @right = right
#   end
# end
# @param {TreeNode} root
# @param {Integer} target_sum
# @return {Integer[][]}
def dfs(node, running_sum, running_vals, target_sum, ans)
  return nil if !node
  ans << running_vals+[node.val] if !node.left && !node.right && running_sum+node.val == target_sum
  dfs(node.left, running_sum+node.val, running_vals+[node.val], target_sum, ans)
  dfs(node.right, running_sum+node.val, running_vals+[node.val], target_sum, ans)
  nil
end

def path_sum(root, target_sum)
  ans = []
  dfs(root, 0, [], target_sum, ans)
  ans
end