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
def dfs(node, ans)
  return 0 if !node
  left_max = [dfs(node.left, ans), 0].max
  right_max = [dfs(node.right, ans), 0].max
  ans[0] = [ans[0], node.val+left_max+right_max].max
  node.val+[left_max, right_max].max
end

def max_path_sum(root)
  ans = [root.val]
  dfs(root, ans)
  return ans[0]
end