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
# @return {Integer[]}
def dfs(node, ans)
  return if !node
  ans << node.val
  dfs(node.left, ans)
  dfs(node.right, ans)
end

def preorder_traversal(root)
  ans = []
  dfs(root, ans)
  ans
end