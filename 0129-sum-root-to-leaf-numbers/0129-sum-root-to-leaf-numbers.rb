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
# @return {Integer}
def dfs(node, curr, ans)
  ans[0] += curr+node.val if !node.left && !node.right
  dfs(node.left, 10*(curr+node.val), ans) if node.left
  dfs(node.right, 10*(curr+node.val), ans) if node.right
  nil
end

def sum_numbers(root)
  ans = [0]
  dfs(root, 0, ans)
  ans[0]
end